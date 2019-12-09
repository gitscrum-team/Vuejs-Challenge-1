<template>
    <ul v-sortable="defaultOptions">
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import sortableDirective from "@/directives/sortable.directive";

    @Component({
        directives: { sortableDirective } // include the directive
    })
    export default class Sort extends Vue {
        defaultOptions = {
            draggable: 'li',
            mirror: {
                constrainDimensions: true,
            }
        };
</script>

