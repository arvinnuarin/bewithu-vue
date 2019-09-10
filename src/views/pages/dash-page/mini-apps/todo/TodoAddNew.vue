<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->

<template>
    <div class="px-6 pb-2 pt-6">
    <vs-button @click="activePrompt = true" class="w-full">Add Task</vs-button>
    <vs-prompt
        vs-title="Add Task"
        vs-accept-text= "Add Task"
        vs-button-cancel = "border"
        @vs-cancel="clearFields"
        @vs-accept="addTodo"
        @vs-close="clearFields"
        :vs-is-valid="validateForm"
        :vs-active.sync="activePrompt">
        <div>
            <form>
                <div class="vx-row">

                    <div class="vx-col ml-auto flex">
                        <feather-icon icon="InfoIcon" class="cursor-pointer" :svgClasses="[{'text-success stroke-current': isImportant}, 'w-5', 'h-5 mr-4']" @click.prevent="isImportant = !isImportant"></feather-icon>
                        <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning stroke-current': isStarred}, 'w-5', 'h-5 mr-4']" @click.prevent="isStarred = !isStarred"></feather-icon>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" name="title" class="w-full mb-4 mt-5" placeholder="Title" v-model="title" :color="validateForm ? 'success' : 'danger'" />
                        <vs-textarea rows="5" label="Add description" v-model="desc" />
                    </div>  
                </div>

            </form>
        </div>
    </vs-prompt>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activePrompt: false,
            title: '',
            desc: '',
            isDone: false,
            isImportant: false,
            isStarred: false,
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.title != '';
        }
    },
    methods: {
        addTodo() {
            // add a todo list in db and reflect it to the store
             this.$validator.validateAll().then(result => {
                if (result) {
                     const todo = {
                        title: this.title, desc: this.desc, isImportant: this.isImportant,
                        isStarred: this.isStarred 
                    }

                    this.$store.dispatch('todo/addTodo', todo);
                    this.clearFields();
                }
            });
        },
        clearFields() {
            // clear all fileds in todo
            this.title = "";
            this.title = "";
            this.desc = "";
            this.isImportant = false;
            this.isStarred = false;
        }
    },
}
</script>