<template>
    <div id="app">
        <main class="flexbox">
            <Board id="board-1">
                <Card id="card-1" draggable="true" title="Devops"></Card>
                <Card id="card-3" draggable="true" title="Devops3"></Card>
            </Board>
            <Board id="board-2" v-for>
                <Card id="card-2" draggable="true" title="Devops2">
                </Card>
            </Board>

        </main>
    </div>
</template>

<script>
    import Board from './components/Board.vue';
    import Card from './components/Card.vue';

    export default {
        name: 'app',
        components: {
            Board,
            Card
        }
    };
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #f3f3f3;
    }

    .flexbox{
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 768px;
        height: 100vh;
        overflow: hidden;
        margin: 0 auto;
        padding: 10px;


    }

    .flexbox .board{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        background-color: #313131;
        padding: 10px;
        position: relative;
    }


        .flexbox .board button {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            width: 20px;
            height: 20px;
        }

        .flexbox .board .card {
            padding: 10px 20px;
            background-color: #f3f3f3;
            cursor: pointer;
            margin-bottom: 15px;
        }


    

</style>
