<!-- =========================================================================================
    File Name: TodoEdit.vue
    Description: Edit todo component
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->


<template>
    <vs-prompt
        vs-title="Edit Task"
        vs-accept-text= "Submit"
        vs-cancel-text = "Remove"
        vs-button-cancel = "border"
        @vs-cancel="removeTodo"
        @vs-accept="submitTodo"
        :vs-is-valid="validateForm"
        :vs-active.sync="activePrompt">
        <div>
            <form>
                <div class="vx-row">
                    <div class="vx-col w-1/6 self-center">
                        <vs-checkbox v-model="isCompletedLocal" class="w-8" @click="toggleIsCompleted"></vs-checkbox>
                    </div>

                    <div class="vx-col ml-auto flex">
                        <feather-icon icon="InfoIcon" class="cursor-pointer" :svgClasses="[{'text-success stroke-current': isImportantLocal}, 'w-5', 'h-5 mr-4']" @click.prevent="toggleIsImportant"></feather-icon>

                        <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning stroke-current': isStarredLocal}, 'w-5', 'h-5 mr-4']" @click.prevent="toggleIsStarred"></feather-icon>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" name="title" class="w-full mb-4 mt-5" placeholder="Title" v-model="titleLocal" disabled/>
                        <vs-textarea rows="5" label="Add description" v-model="descLocal" />
                    </div>  
                </div>

            </form>
        </div>
    </vs-prompt>
</template>

<script>

export default {
    
    props: {
        displayPrompt: {
            type: Boolean,
            required: true,
        },
        todoItemData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            titleLocal: this.todoItemData.title,
            descLocal: this.todoItemData.desc,
            isImportantLocal: this.todoItemData.isImportant,
            isStarredLocal: this.todoItemData.isStarred,
            isCompletedLocal: this.todoItemData.status === 'completed' ? true : false,
            status: this.todoItemData.status
        }
    },
    computed: {
        activePrompt: {
            get() {
                return this.displayPrompt;
            },
            set(value) {
                this.$emit('hideDisplayPrompt', value);
            }
        },
        validateForm() {
            return !this.errors.any() && this.title != '';
        }
    },
    methods: {
        toggleIsImportant() {
            this.isImportantLocal = !this.isImportantLocal;
        },
        toggleIsStarred() {
            this.isStarredLocal = !this.isStarredLocal;
        },
        toggleIsCompleted() {
            this.status = !this.isCompletedLocal ? 'completed' : 'pending';
        },
        removeTodo() {
            this.status = 'trashed';
            this.submitTodo();
        },
        submitTodo() {

            const payload = {
                id: this.todoItemData.id,
                desc: this.descLocal,
                isImportant: this.isImportantLocal,
                isStarred: this.isStarredLocal,
                status: this.status
            }

            this.$store.dispatch('todo/updateTodo', payload);
        }
    },
}
</script>