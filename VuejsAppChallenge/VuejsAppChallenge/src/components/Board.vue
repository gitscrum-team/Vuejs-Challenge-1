<template>
    <div
         v-bind:id="id"
         class="board"
         @dragover.prevent
         @drop.prevent="drop"
         >
        <slot />

        <button v-on:click="addCard">+</button>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        //data: {
            
        //    cards: [
        //        { title: 'devops' },
        //        { title: 'devops1' },
        //        { title: 'devops2' }
        //    ]
            
        //},
        methods: {
            drop: e => {
                const card_id = e.dataTransfer.getData('card_id');
                const card = document.getElementById(card_id);

                e.target.appendChild(card)
            },
            addCard: () => {

            }
        }
    }
</script>