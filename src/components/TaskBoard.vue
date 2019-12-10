<style >
.card-board {
  margin: 16px;
  min-height: 350px;
  min-width: 15rem;
}

.card-board.sortable-chosen,
.task.sortable-chosen {
  border: 1px solid var(--primary);
}

.card-board.sortable-ghost {
  transform: rotateZ(40deg);
}

.card-header {
  min-height: 49px;
}

.card-body {
  padding: 8px;
}

.form-editing {
  display: inline-block;
  height: 30px;
  width: 150px;
}

.handle {
  cursor: grab;
}

.handle:active {
  cursor: grabbing;
}

</style>

<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <button class="btn btn-primary ml-3 mr-3" v-on:click="addBoard(boardName)">add board</button>
      <div class="form-group mb-0">
        <input class="form-control" v-model="boardName" placeholder="board name" />
      </div>
    </div>

    <draggable class="row align-items-start" v-model="boards" handle=".handle">
      <div class="card card-board" v-for="(board, index ) in boards" :key="index" group="boards">
        <div class="card-header font-weight-bold">
          <input v-if="board.editMode" class="form-control form-editing" v-model="board.name" />
          <span v-else>{{ board.name }}</span>
          <i
            class="fas fa-sm ml-1"
            v-bind:class="{ 'fa-edit': !board.editMode, 'fa-check': board.editMode }"
            title="edit board name"
            v-on:click="toogleEditing(index)"
          ></i>
          <i class="fas fa-ellipsis-v fa-sm pull-right pt-2 handle"></i>
        </div>

        <div class="card-body">
            <div v-if="board.tasks.length > 0">
                <i class="fas fa-sort-alpha-up cursor-pointer" v-on:click="sortTaskAlphabetically(index)"></i>
                <hr class="mt-1 ">
            </div>
            <ul class="list-unstyled mb-0">
                <TaskCard :parentId="index" />
            </ul>
        </div>

        <div class="card-footer text-muted">
          <button class="btn btn-outline-primary btn-block" v-on:click="addTask(index)">add task</button>
          <button
            v-if="board.editMode"
            class="btn btn-danger btn-block"
            v-on:click="removeBoard(index)"
          >delele board</button>
        </div>
      </div>
    </draggable>
  </div>
</template>


<script>
import {  mapActions } from "vuex";
import draggable from "vuedraggable";
import TaskCard from "./TaskCard";

export default {
  name: "TaskBoard",
  components: {
    TaskCard,
    draggable
  },
  data() {
    return {
      boardName: null
    };
  },
  computed: {
    boards: {
      get() {
        return this.$store.state.boards.all;
      },
      set(value) {
        this.$store.commit("updateBoards", value);
      }
    }
  },
  methods: {
    ...mapActions(["addBoard", "removeBoard", "addTask", "toogleEditing", "sortTaskAlphabetically"])
  },
  created() {}
};
</script>