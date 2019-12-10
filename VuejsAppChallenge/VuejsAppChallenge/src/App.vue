<template>
  <div id="app">
    <Header ></Header>
    <TaskBoard />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TaskBoard from './components/TaskBoard';

export default {
  name: 'app',
  components: {
    Header,
    TaskBoard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

.cursor-pointer {
    cursor: pointer !important;
}
</style>
