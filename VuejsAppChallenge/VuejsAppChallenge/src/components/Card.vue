<template>
    <div v-bind:id="id"
         v-bind:draggable="true"
         class="card"
         @dragstart="dragStart"
         @dragover.stop>

        <slot />
        <p>{{title}}</p>
    </div>
</template>



<script>

    export default {
        props: [
            'id', 'draggable', 'title'
        ],
        methods: {
            dragStart: e => {
                const target = e.target;
                e.dataTransfer.setData('card_id', target.id);

                //setTimeout(() => {
                //    target.style.display = "none";
                //}, 0);
            }
        }
    }
</script>
