<template>
    <draggable
            :list="panel"
            :disabled="!enabled"
            class="list-group-panel"
            ghost-class="ghost"
            @start="dragging = true"
            @end="dragging = false"
            group="box"
    >
        <transition type="transition" :name="!dragging ? 'flip-list' : null">
            <div class="list-group-panel-item">
                <div slot="header" class="header">{{ title }}</div>
                <box :tasks="items" @deleta="remove"/>
                <button @click.prevent="add" class="button">+</button>
            </div>
        </transition>
    </draggable>

</template>

<script>
    import Box from "./Box";
    import draggable from "vuedraggable";

    export default {
        name: 'Panel',
        components: {
            Box,
            draggable
        },
        data() {
            return {
                enabled: true,
                dragging: false,
            }
        },
        created() {
            window.console.log(this.items)
        },
        props: {
            title: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            panel: {
                type: Array
            }
        },
        methods: {
            add() {
                this.tasks.push(
                    {id: 1, title: "Final Tests", category: 'gray', color: ['red'], users: ['user-5.jpg', 'user-1.jpg']}
                );
            },
            remove(id) {
                let newList = this.tasks;
                for (var i = 0; i < this.tasks.length; i++) {
                    if (newList[i].id === id) {
                        newList.splice(i, 1);
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .panel {
        box-sizing: border-box;
        background-color: #efeff1;
        color: #000000;
        width: 300px;
        min-height: 40vh;
        padding: 15px;
        margin: 10px;
        float: left;
        border-radius: 5px;
    }

    .header {
        width: 100%;
        margin: 20px 5px;

    }

    .button {
        width: 100%;
        background: transparent;
        height: 40px;
        text-align: center;
        border: none;
        font-size: 1.8rem;
        outline: none;
        cursor: pointer;
        margin-top: 10px;
    }
</style>