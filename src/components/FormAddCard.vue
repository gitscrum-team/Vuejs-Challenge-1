<template>
	<div>
		<b-input-group size="sm" v-show="board.showAddCard">
			<input v-model="txt" autofocus v-on:keyup.enter="addCard(board)" placeholder="Card Title..." class="form-control">
			<b-input-group-append>
				<b-button variant="info" @click="addCard(board)">ok</b-button>
			</b-input-group-append>
		</b-input-group>
		<p class="addCard text-center" @click="showForm(board)">+ Add a new card</p>
	</div>
</template>

<script>
export default {
	name: 'form-add-card',
	props: {
		txtCard: String,
		board: Object
	},
	data() {
		return {
			txt: this.txtCard
		}
	},
	methods: {
		showForm(board) {
      board.showAddCard = !board.showAddCard
    },
    addCard(board) {
      if(this.txt == ''){
        return alert('Card Title is required');
      }
      board.items.push({ name: this.txt});
      this.txt = ''
      board.showAddCard = false
    }
	}
}
</script>

<style scoped>

.addCard{
  margin-top: 20px;
  margin-bottom: 0;
  border-top: 1px solid #ccc;
  width: 100%;
  padding-top: 10px;
  font-weight: bold;
  color: #999;
  cursor: pointer;
}
.addCard:hover{
  color: #666;
}
</style>