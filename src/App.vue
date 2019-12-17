<template>
  <div id="app">
    <action-bar logo="GitScrum" />
    <boards />
  </div>
</template>

<script>
import ActionBar from './components/ActionBar.vue'
import Boards from './components/Boards.vue'

export default {
  name: 'app',
  components: {
    ActionBar,
    Boards
  }
}
</script>

<style>

</style>
