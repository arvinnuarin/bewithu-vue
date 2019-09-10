<!-- =========================================================================================
    File Name: TodoItem.vue
    Description: Single todo item component
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div @click="displayPrompt" class="px-8 py-4 list-item-component">
        <div class="vx-row">
            <div class="vx-col w-full sm:w-5/6 flex sm:items-center sm:flex-row flex-col">
                <div class="flex items-center">
                    <vs-checkbox v-model="isDone" class="w-8 m-0 vs-checkbox-small" @click.stop></vs-checkbox>
                    <h6 class="todo-title" :class="{'line-through': isDone}">{{ title }}</h6>
                </div>
                <div class="todo-tags sm:ml-2 sm:my-0 my-2 flex">
                    <vs-chip>
                        <div class="h-2 w-2 rounded-full mr-1 bg-primary"></div>
                        <span>{{ todoItemData.updated_at | moment("from", "now")}}</span>
                    </vs-chip>
                </div>
            </div>
            <div class="vx-col w-full sm:w-1/6 ml-auto flex sm:justify-end">
                <feather-icon icon="InfoIcon" class="cursor-pointer" :svgClasses="[{'text-success stroke-current': isImportant}, 'w-5', 'h-5 mr-4']" @click.stop="toggleIsImportant"></feather-icon>
                <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning stroke-current': isStarred}, 'w-5', 'h-5 mr-4']" @click.stop="toggleIsStarred"></feather-icon>
                <feather-icon icon="TrashIcon" class="cursor-pointer" svgClasses="w-5 h-5 mr-4" @click.stop="moveToTrash" v-if="!isTrashed"></feather-icon>
            </div>
        </div>
        
        <div class="vx-row">
            <div class="vx-col w-full">
                <p class="mt-2 truncate" :class="{'line-through': isDone}">{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        todoItemId: {
            type: String,
            required: true,
        }
    },
    computed: {
        todoItemData() {
            return this.$_.filter(this.$store.state.todo.todoArray, { 'id': this.todoItemId})[0];
        },
        isImportant: {
            get() {
                return this.todoItemData.isImportant;
            },
            set(value) {
                this.$store.dispatch('todo/toggleIsImportant', { id: this.todoItemData.id, isImportant: value})
            }
        },
        isStarred: {
            get() {
                return this.todoItemData.isStarred;
            },
            set(value) {
                this.$store.dispatch('todo/toggleIsStarred', { id: this.todoItemData.id, isStarred: value})
            }
        },
        isTrashed: {
            get() {
                return this.todoItemData.status === 'trashed' ? true : false;
            },
            set(value) {
                this.$store.dispatch('todo/updateStatus', { id: this.todoItemData.id, status: 'trashed'})
            }
        },
        title() {
            return this.todoItemData.title;
        },
        desc() {
            return this.todoItemData.desc;
        },
        isDone: {
            get () {
               return this.todoItemData.status === 'completed' ? true : false;
            },
            set (value) {
                this.$store.dispatch('todo/updateStatus', { id: this.todoItemData.id, status: value ? 'completed' : 'pending'});
            }
        },
    },
    methods: {
        toggleIsImportant() {
            this.isImportant = !this.isImportant;
        },
        toggleIsStarred() {
            this.isStarred = !this.isStarred;
        },
        moveToTrash() {
            this.isTrashed = !this.isTrashed;
        },
        editTodo() {
            alert();
        },
        displayPrompt() {
            this.$emit('showDisplayPrompt', this.todoItemData.id);
        }
    },
}
</script>