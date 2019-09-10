<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->

<template>
    <div class="todo__filters-container">
        <!-- pending -->
        <div class="px-6 py-4">
            <div class="flex cursor-pointer" :class="{'text-primary': todoFilter == 'pending'}" @click="applyTodoFilter('pending')">
                <feather-icon icon="MailIcon" :svgClasses="[{'text-primary stroke-current': todoFilter == 'pending'}, 'h-6 w-6']"></feather-icon>
                <span class="text-lg ml-3">Pending</span>
            </div>
        </div>

        <vs-divider></vs-divider>

        <!-- starred -->
        <div class="px-6 py-4">
            <h5>Filters</h5>

            <template v-for="filter in todoFilters">
                <div class="flex mt-6 cursor-pointer" :class="{'text-primary': todoFilter == filter.filter}" @click="applyTodoFilter(filter.filter)" :key="filter.filter">
                    <feather-icon :icon="filter.icon" :svgClasses="[{'text-primary stroke-current': todoFilter == filter.filter}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">{{ filter.filterName }}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return {
            todoFilters: [
                { filterName: 'Starred', filter: 'starred', icon: 'StarIcon' },
                { filterName: 'Important', filter: 'important', icon: 'InfoIcon' },
                { filterName: 'Completed', filter: 'completed', icon: 'CheckIcon' },
                { filterName: 'Trashed', filter: 'trashed', icon: 'TrashIcon' },
            ]
        }
    },
    computed: {
        todoFilter() {
            return this.$store.state.todo.todoFilter;
        }
    },
    methods: {
        applyTodoFilter(filterName) {
            this.$store.dispatch('todo/applyTodoFilter', filterName);
            this.$emit('closeSidebar', false);
        },
    },
}
</script>