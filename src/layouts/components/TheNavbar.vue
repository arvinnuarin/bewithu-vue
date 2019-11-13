<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
<div class="relative">
  <div class="vx-navbar-wrapper">
    <vs-navbar class="vx-navbar navbar-custom" :color="navbarColor" :class="classObj">
        
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <feather-icon class="sm:inline-flex xl:hidden cursor-pointer mr-1" icon="MenuIcon" @click.stop="showSidebar"></feather-icon>
        <!-- Search -->
        <vs-input icon-pack="feather" icon="icon-search" icon-after class="inputx w-1/4" placeholder="Try 'Baccarat' " v-model="searchGame" />
        <!-- NOTIFICATIONS -->
        <the-notif-bar class="ml-5" v-if="user"></the-notif-bar>
      
      <vs-spacer></vs-spacer>

        <!-- USER META -->
        <div class="the-navbar__user-meta flex items-center" v-if="user">
            <div class="text-right leading-tight hidden sm:block">
            <p class="font-semibold">Arvin Nuarin</p>
            <small>μ₿ 0.00</small>
            </div>
            <!-- Deposit -->
            <div class="ml-3">
                <vs-button class="rounded-full" color="warning" type="filled" @click="onDeposit">Deposit</vs-button>
            </div>

             <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
                <div class="con-img ml-3">
                    <img key="localImg"
                    src="https://heathmont.imgix.net/bitcasino/images/loyalty-beginner-avatar.png?auto=compress,format"
                    alt="user-img"
                    width="40"
                    height="40"
                    class="rounded-full shadow-md cursor-pointer block" />
                </div>
                <!--Dropdown -->
                <vs-dropdown-menu class="vx-navbar-dropdown">
                    <ul style="min-width: 9rem">
                        <li
                            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                            @click="$router.push('/customer/loyalty')">

                            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                            <span class="ml-2">Loyalty</span>
                        </li>
                         <li
                            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                            @click="$router.push('/customer/bonuses')">

                            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                            <span class="ml-2">Bonuses</span>
                        </li>
                         <li
                            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                            @click="$router.push('/customer/account')">

                            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                            <span class="ml-2">Account</span>
                        </li>
                        <li
                            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                            @click="$router.push('/customer/security')">

                            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                            <span class="ml-2">Security</span>
                        </li>
                         <li
                            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                            @click="$router.push('/customer/settings')">

                            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                            <span class="ml-2">Settings</span>
                        </li>

                        <vs-divider class="m-1"></vs-divider>

                        <li
                            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                            @click="logout">
                            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"/>
                            <span class="ml-2">Logout</span>
                        </li>
                    </ul>
          </vs-dropdown-menu>

             </vs-dropdown>
        </div>
        <!-- NOT LOGIN -->
        <div v-else>
            <vs-button class="rounded-full" color="warning" type="gradient" @click="onRegister">Register</vs-button>
            <vs-button class="pr-3" color="primary" type="flat" @click="onLogin">Login</vs-button>
        </div>
    </vs-navbar>
  </div>
</div>
</template>

<script>
import VxAutoSuggest from '@/components/vx-auto-suggest/VxAutoSuggest.vue';
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import draggable from 'vuedraggable'

import TheNotifBar from './TheNotifBar'

export default {
    name: "the-navbar",
    components: {
      VxAutoSuggest,
      VuePerfectScrollbar,
      draggable,
      TheNotifBar
    },
    created() {
        this.$store.dispatch('auth/setAuthenticatedUser');
    },
    props: {
        navbarColor: {
            type: String,
            default: "#fff",
        },
    },
    data() {
        return {
            navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
            searchQuery: '',
            showFullSearch: false,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            autoFocusSearch: false,
            showBookmarkPagesDropdown: false,
            searchGame: null
        }
    },
    watch: {
        '$route'() {
            if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false
        }
    },
    computed: {
        // HELPER
        sidebarWidth() {
            return this.$store.state.sidebarWidth;
        },
        breakpoint() {
            return this.$store.state.breakpoint;
        },

        // NAVBAR STYLE
        classObj() {
            if (this.sidebarWidth == "default") return "navbar-default"
            else if (this.sidebarWidth == "reduced") return "navbar-reduced"
            else if (this.sidebarWidth) return "navbar-full"
        },

        // I18N
        getCurrentLocaleData() {
            const locale = this.$i18n.locale;
            if (locale == "en") return { flag: "us", lang: 'English' }
            else if (locale == "kr") return { flag: "kr", lang: 'Korean' }
        },

        // BOOKMARK & SEARCH
        data() {
            return this.$store.state.navbarSearchAndPinList;
        },
        starredPages() {
            return this.$store.state.starredPages;
        },
        starredPagesLimited: {
            get() {
                return this.starredPages.slice(0, 10);
            },
            set(list) {
                this.$store.dispatch('arrangeStarredPagesLimited', list);
            }
        },
        starredPagesMore: {
            get() {
                return this.starredPages.slice(10);
            },
            set(list) {
                this.$store.dispatch('arrangeStarredPagesMore', list);
            }
        },
        // AUTHENTICATED USER
        user() {
          return this.$store.state.auth.user
        },
    },
    methods: {
        onLogin() {
         this.$router.push('/auth/login')
        },
        onRegister() {
            this.$router.push('/auth/signup')
        },
        updateLocale(locale) {
            this.$i18n.locale = locale;
        },
        showSidebar() {
            this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
        },
        selected(item) {
            this.$router.push(item.url)
            this.showFullSearch = false;
        },
        actionClicked(item) {
            // e.stopPropogation();
            this.$store.dispatch('updateStarredPage', { index: item.index, val: !item.highlightAction });
        },
        showNavbarSearch() {
            this.showFullSearch = true;
        },
        showSearchbar() {
            this.showFullSearch = true;
        },
        logout() {
            this.$store.dispatch('auth/logout');
        },
        outside: function() {
            this.showBookmarkPagesDropdown = false
        },
        // Method for creating dummy notification time
        randomDate({hr, min, sec}) {
          let date = new Date()

          if(hr) date.setHours(date.getHours() - hr)
          if(min) date.setMinutes(date.getMinutes() - min)
          if(sec) date.setSeconds(date.getSeconds() - sec)

          return date
        },
        onDeposit() {
            this.$router.push('/customer/funds')
        }
    },
    directives: {
        'click-outside': {
            bind: function(el, binding) {
                const bubble = binding.modifiers.bubble
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = handler
                document.addEventListener('click', handler)
            },

            unbind: function(el) {
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        }
    }
}
</script>
