<template>
	<div>
		<draggable
			v-model="dataBoards"
			class="row align-center sortable-list"
		>
				<b-col
					sm="3"
					cols="12"
					v-for="(board, index) in dataBoards"
					:key="index"
				>
					<div class="board">
						<div>
							<h6 class="board-title">
								<strong>{{ board.title }}({{ board.items.length }})</strong>
								<div class="actions">
									<b-button variant="info" size="sm" @click="orderList(board, index)">sort</b-button>
									<b-button variant="danger" size="sm" type="button" @click="removeBoard(index)">x</b-button>
								</div>
							</h6>
						</div>
						<draggable
							:list="board.items"
							:group="{ name: 'board' }"
						>
							<div
								v-for="(item, i) in board.items"
								:key="i"
							>
								<card :name="item.name" :index="i" :board="board"  />

							</div>
						</draggable>
						<form-add-card :txtCard="txtCard" :board="board" />
					</div>
				</b-col>
				
				<b-col sm="3" cols="12">
					<b-input-group size="sm">
						<input v-model="title" v-on:keyup.enter="addBoard" placeholder="Add Board..." class="form-control">
						<b-input-group-append>
							<b-button variant="info" @click="addBoard">ok</b-button>
						</b-input-group-append>
					</b-input-group>
				</b-col>
		</draggable>
	</div>
</template>

<script>
import draggable from "vuedraggable"
import FormAddCard from './FormAddCard.vue'
import Card from './Card.vue'

export default {
	name: 'board',
	components: {
		draggable,
		FormAddCard,
		Card
	},
	data(){
		return {
			title: this.titleBoard,
			dataBoards: this.boards
		}
	},
	props: {
		boards: Array,
		txtCard: String,
		titleBoard: String
	},
	methods: {
		addBoard() {
      if(this.title == ''){
        return alert('Board Title is required')
      }
      this.dataBoards.push({
        title: this.title,
        items: [],
        showAddCard: false
      })
      this.title = ''
      this.showAddBoard = false
    },
    orderList(board, index) {
      let byName = board.items.slice(0);
      this.dataBoards[index].items = byName.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      });
    },
    removeBoard(index){
      if (confirm('Are you sure you want to delete this board and all your cards?')) {
        this.dataBoards.splice(index, 1); 
      }
    }
	}
}
</script>

<style scoped>
.board-canvas{
  flex-grow: 1;
  position: relative;
  background: #fff;
  margin-top: 20px;
  white-space: nowrap;
}
.board-canvas .row{
  overflow-x: auto;
  white-space: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 300px;
}
.board-canvas > .row > .col-sm-3 {
  display: inline-block;
  float: none;
}
.sortabble-chosen, .sortable-ghost{
  background: none;
}
.board{
  background: #EBECF0;
  border-radius: 2px;
  padding: 10px;
  padding: 10px;
  margin: 5px;
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
}
.card{
  border-radius: 3px;
  background: #fff;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  white-space:normal;
}
.board-title{
  padding: 3px 5px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
}
.board-title .actions{
  margin-left:auto;
}
</style>