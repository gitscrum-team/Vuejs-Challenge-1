<style >
.task {
  border: 1px solid rgba(0, 0, 0, 0.15);
  cursor: grab;
}

.task:active {
  cursor: grabbing;
}



</style>

<template>
  <div>
    <draggable v-model="tasks" :group="{ name: 'boards' }">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="task shadow-sm p-3 mb-1 bg-white rounded sortable"
      >
        <input
          v-if="task.editMode"
          class="form-control form-editing"
          v-model="task.name"
          placeholder="Add Task Name "
        />
        <span v-else>{{ task.name }}</span>
        <i
          class="fas fa-sm ml-1 cursor-pointer"
          v-bind:class="{ 'fa-edit': !task.editMode, 'fa-check': task.editMode }"
          title="edit task name"
          v-on:click="toogleEditingTask({id:index, parentId})"
        ></i>
        <i
          v-if="task.editMode"
          class="fas fa-trash-alt fa-sm ml-1 text-danger cursor-pointer"
          v-on:click="removeTask({id:index, parentId})"
        ></i>
      </li>
    </draggable>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import draggable from "vuedraggable";

export default {
  name: "task-card",
  props: ["parentId"],
  components: {
    draggable
  },
  computed: {
    tasks: {
      get() {
        return this.$store.state.boards.all[this.parentId].tasks;
      },
      set(list) {
        this.$store.commit("updateBoardsTasks", {
          parentId: this.parentId,
          list
        });
      }
    }
  },
  methods: {
    ...mapActions(["toogleEditingTask", "removeTask"])
  }
};
</script>