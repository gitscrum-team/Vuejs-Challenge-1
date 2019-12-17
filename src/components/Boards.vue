<template>
    <b-container fluid class="board-canvas">
      <div class="boards">
          <board 
						:boards="boards" 
						:titleBoard="titleBoard"
					/>
      </div>
    </b-container>
</template>

<script>
import Board from './Board.vue'

export default {
	name: 'boards',
	components: {
		Board
	},
	data() {
    return {
      txtCard: '',
      titleBoard: '',
      showAddBoard: false,
      boards:[
        {
          title: "Tasks",
          items: [],
          showAddCard: false
        }
      ]
    };
  }
}
</script>

<style scoped>

.boards{
  margin-top: 50px;
}
.sortabble-chosen, .sortable-ghost{
  background: none;
}
</style>