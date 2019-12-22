<template>
    <div id="app">
        <panel title="Doing"/>
    </div>
</template>

<script>

    import Panel from "./components/Panel";

    export default {
        name: 'app',
        components: {Panel}
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
</style>
