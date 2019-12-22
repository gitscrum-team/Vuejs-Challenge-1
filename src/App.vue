<template>
    <div id="app">
        <div v-for="(item, index) in tasks" :key="index">
            <panel :panel="tasks" :title="item.title" :items="item.items"/>
        </div>
    </div>
</template>

<script>
    import Panel from "./components/Panel";

    export default {
        name: 'app',
        components: {Panel},
        data () {
            return {
                enabled: true,
                tasks: [
                    {
                        title: 'Doing',
                        items : [
                            { id: 1, title: "Design UX Flows", category: 'purple', color: ['purple'], users: ['user-1.jpg', 'user-2.jpg'] },
                            { id: 2, title: "Launch Website", category: 'yellow', color: ['yellow', 'red'], users: ['user-3.jpg'] },
                            { id: 3, title: "Client Meeting", category: 'red', color: ['blue'], users: ['user-2.jpg', 'user-4.jpg'] },
                            { id: 4, title: "Release Build", category: 'blue', color: ['green'], users: ['user-4.jpg'] },
                            { id: 5, title: "Develop API", category: 'green', color: ['purple'], users: ['user-3.jpg', 'user-1.jpg'] }
                        ]
                    },
                    {
                        title: 'Done',
                        items: []
                    }
                ]
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
    @import url('assets/css/reset.css');

    body {
        background-color: #5e74eb;
        font-family: 'Roboto', sans-serif;
        color: #ffffff;
    }

    #app {
        padding: 30px;
    }

    .list-group-panel-item {
        box-sizing: border-box;
        background-color: #efeff1;
        color: #000000;
        width: 300px;
        min-height: 40vh;
        padding: 15px;
        margin: 10px;
        float: left;
        border-radius: 5px;
        cursor: move;
    }

    .flip-list-move {
        transition: transform 1.5s;
    }

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: 0;
        background: #c8ebfb;
    }
</style>
