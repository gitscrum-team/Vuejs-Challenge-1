<template>
    <div class="card"> 
        <b-col sm="10" cols="10">
            {{ name }}
        </b-col>
        <b-col sm="2" cols="2">
            <b-button variant="danger" size="sm" type="button" @click="removeCard(board, index)">X</b-button>
        </b-col>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        name: String,
        board: Object,
        index: Number
    },
    methods:{
      removeCard(board, index){
        if (confirm('Are you sure you want to delete this card?')) {
          board.items.splice(index, 1); 
        }
      }
    }
}
</script>