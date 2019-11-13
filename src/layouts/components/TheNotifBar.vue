<!-- =========================================================================================
  File Name: TheNotifBar.vue
  Description: Navbar Notification component
  Component Name: TheNotifBar
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    
    <!-- NOTIFICATIONS -->
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer ml-4">
    <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="notifications.length"></feather-icon>
    <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">

        <div class="notification-top text-center p-5 bg-primary text-white">
        <h3 class="text-white">{{ notifications.length }} New</h3>
        <p class="opacity-75">Your Notifications</p>
        </div>

        <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings">
        <ul class="bordered-items">
        <li v-for="ntf in notifications" :key="ntf.index" class="flex justify-between px-4 py-4 notification cursor-pointer" @click="removeNotification(ntf.id)">
            <div class="flex items-start">
            <feather-icon :icon="icon(ntf.status)" :svgClasses="[`${category(ntf.status)}`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>
            <div class="mx-2">
                <span class="font-medium block notification-title" :class="category(ntf.status)">{{ ntf.title }}</span>
                <small>{{ ntf.msg }}</small>
            </div>
            </div>
            <small class="mt-1 whitespace-no-wrap">{{ elapsedTime(ntf.time) }}</small>
        </li>
        </ul>
        </VuePerfectScrollbar>
                <div class="
                    checkout-footer
                    fixed
                    bottom-0
                    rounded-b-lg
                    text-primary
                    w-full
                    p-2
                    font-semibold
                    text-center
                    border
                    border-b-0
                    border-l-0
                    border-r-0
                    border-solid
                    d-theme-border-grey-light
                    cursor-pointer" @click="viewAllNotif">
                    <span>View All Notifications</span>
                </div>
    </vs-dropdown-menu>
    </vs-dropdown>
</template>

<script>
    
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    name: 'the-notif-bar',
    components: {
        VuePerfectScrollbar
    },
    mounted() {
        
        this.$store.dispatch('notif/getNotifications');
        
        window.Echo.channel('admin') //Should be Channel Name
        .listen('.appointment', (e) => {
        
           const notif = JSON.parse(e.data);
           this.$store.commit('notif/ADD_NOTIFICATION', notif);
            window.$notif('success', notif.title, notif.msg);
        });
    },
    data() {
        return {
             settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            showDetail: false
        }
    },
    methods: {
        elapsedTime(startTime) {
            let x = new Date(startTime);
            let now = new Date();
            var timeDiff = now - x;
            timeDiff /= 1000;

            var seconds = Math.round(timeDiff);
            timeDiff = Math.floor(timeDiff / 60);

            var minutes = Math.round(timeDiff % 60);
            timeDiff = Math.floor(timeDiff / 60);

            var hours = Math.round(timeDiff % 24);
            timeDiff = Math.floor(timeDiff / 24);

            var days = Math.round(timeDiff % 365);
            timeDiff = Math.floor(timeDiff / 365);

            var years = timeDiff;

            if (years > 0) {
                return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
            } else if (days > 0) {
                return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
            } else if (hours > 0) {
                return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
            } else if (minutes > 0) {
                return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
            } else if (seconds > 0) {
                return seconds + (seconds > 1 ? ' sec ago' : 'just now');
            }

            return 'Just Now'
        },
        category(status) {
            const categories = [{status: 'pending', category: 'primary'}, {status: 'paid', category: 'success'},
            {status: 'cancelled', category: 'danger'}, {status: 'completed', category: 'warning'}]; 

            return `text-${categories.find(s => s.status === status).category}`;
        },
        icon(status) {
            const icons = [{status: 'pending', icon: 'AlertCircleIcon'}, {status: 'paid', icon: 'ClipboardIcon'},
            {status: 'cancelled', icon: 'CheckSquareIcon'}, {status: 'completed', icon: 'CloudOffIcon'}];
        
            return icons.find(s => s.status === status).icon
        },
        removeNotification(id) {
            console.log(id)
        },
        viewAllNotif() {
            this.$router.push('/customer/notifications')
        }
    },
    computed: {
        notifications() {
            return this.$store.state.notif.notifsArray;
        }
    }
}
</script>