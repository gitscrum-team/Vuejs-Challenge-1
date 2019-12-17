<template>
  <b-container fluid class="container-header">
    <b-row>
        <b-col class="text-center"><strong>{{logo}}</strong></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ActionBar',
  props: {
    logo: String
  }
}
</script>

<style lang="stylus">
.container-header
    background #0081FF
    padding-top 10px
    padding-bottom 10px
    color white
    justify-content space-between
</style>