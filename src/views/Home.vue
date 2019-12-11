<template>
    <div class="home">
        <TaskBoard msg="Welcome to the Gitscrum Task Board Challenge" />
    </div>
</template>

<style lang="scss">
    @import '../styles/kanban.scss';
</style>

<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator';
    import TaskBoard from '@/components/TaskBoard.vue'; // @ is an alias to /src

    @Component({
        components: {
            TaskBoard
        },
    })
    export default class Home extends Vue { }
</script>
