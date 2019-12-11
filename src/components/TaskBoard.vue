<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
        <kanban-board class="kanban-board" :stages="stages" :blocks="blocks">
            <div v-for="stage in stages" :slot="stage" :key="stage">
                <button title="Add task" type="button" class="close" aria-label="Add task" v-on:click="addBlock(stage)">
                    <span aria-hidden="true">&plus;</span>
                </button>
                <button type="button" class="close" aria-label="Add task" v-on:click="sort(stage)" style="margin-right:15px">
                    <span v-show="sortOrder === 'asc'" aria-hidden="true" style="font-size:0.7em">▼</span>
                    <span v-show="sortOrder === 'desc'" aria-hidden="true" style="font-size:0.7em">▲</span>
                </button>
                <h2>{{ stage }}</h2>
            </div>
            <div v-for="block in blocks" :slot="block.id" :key="block.id">
                <div v-on:dblclick="ondblClick(block, $event)">
                    <button title="Remove" type="button" class="close" aria-label="Remove" v-on:click.once="removeBlock(block)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 :id="block.id" class="block-title" :contenteditable="block.edit" v-on:blur="updateBlock(block, $event);" v-on:keyup.enter="updateBlock(block, $event);" v-html="block.title"></h6>
                </div>
            </div>
        </kanban-board>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator';
    import { mapState, mapActions, mapMutations } from 'vuex';
    import vueKanban from 'vue-kanban';
    import { TaskInterface as Block } from '@/ts-data-types/TaskInterface';

    // this is not working, probably due to compilation problems
    @Component({
        components: {
            vueKanban
        },
        // omit the namespace argument ('pingData') if you are not using namespaced modules
        computed: mapState('kanbanData', {
            stages: 'stages',
            blocks: 'tasks'
        }),
        methods: {
            ...mapActions('kanbanData', {
                commitBlock: 'addNewTask',
                removeBlock: 'deleteTask',
                sortStage: 'sort'
            }),
            ...mapMutations('kanbanData', {
                commitBlockUpdate: 'updateTask'
            })
        }
    })
    export default class TaskBoard extends Vue {
        // private nextID: number = 1;
        // private stages: string[];
        // private blocks: Block[];
        private sortOrder = 'asc';

        @Prop() private msg!: string;

        private sort(stage: string) {
            // this should be done with storage getters,
            // but this is an exercise
            // @ts-ignore
            this.sortStage({stage, order: this.sortOrder});
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        }

        private addBlock(status: string): void {
            // @ts-ignore
            this.commitBlock(status).then(() => {
                // @ts-ignore
                document.querySelector('h6.block-title[contenteditable="true"]').focus();
            });
        }

        private updateBlock(block: Block, evt) {
            // @ts-ignore
            this.commitBlockUpdate({
                item: block,
                edit: false,
                title: evt.target.innerText
            });
        }

        private ondblClick(block, evt) {
            // @ts-ignore
            this.commitBlockUpdate({
                item: block,
                edit: true,
            });

            setTimeout(() => {/*
                // @ts-ignore
                if (document.selection) { // IE
                    // @ts-ignore
                    const range = document.body.createTextRange();
                    range.moveToElementText(evt.target);
                    range.select();
                } else if (window.getSelection) {
                    const range = document.createRange();
                    range.selectNode(evt.target);
                    // @ts-ignore
                    window.getSelection().removeAllRanges();
                    // @ts-ignore
                    window.getSelection().addRange(range);
                }*/

                if (evt.target) {
                    if (evt.target && evt.target.tagName === 'h6') {
                        evt.target.focus();
                    } else {
                        const el = evt.target.querySelector('h6');
                        if (el) {
                            el.focus();
                        }
                    }
                }
            }, 1);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
