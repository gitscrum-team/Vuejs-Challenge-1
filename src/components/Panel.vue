<template>
    <div class="panel">
        <div slot="header" class="header">{{ title }}</div>
        <box :tasks="tasks" @deleta="remove"/>
        <button @click.prevent="add" class="button">+</button>
    </div>
</template>

<script>
    import Box from "./Box";

    let id = 1;
    export default {
        name: 'Panel',
        components: {
            Box
        },
        data () {
            return {
                enabled: true,
                tasks: [
                    { id: id++, title: "Design UX Flows", category: 'purple', color: ['purple'], users: ['user-1.jpg', 'user-2.jpg'] },
                    { id: id++, title: "Launch Website", category: 'yellow', color: ['yellow', 'red'], users: ['user-3.jpg'] },
                    { id: id++, title: "Client Meeting", category: 'red', color: ['blue'], users: ['user-2.jpg', 'user-4.jpg'] },
                    { id: id++, title: "Release Build", category: 'blue', color: ['green'], users: ['user-4.jpg'] },
                    { id: id++, title: "Develop API", category: 'green', color: ['purple'], users: ['user-3.jpg', 'user-1.jpg'] }
                ],
            }
        },
        props: {
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            add () {
                this.tasks.push(
                    { id: id++, title: "Final Tests", category: 'gray', color: ['red'], users: ['user-5.jpg', 'user-1.jpg'] }
                );
            },
            remove (id) {
                let newList = this.tasks;
                for( var i = 0; i < this.tasks.length; i++){
                    if ( newList[i].id === id) {
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