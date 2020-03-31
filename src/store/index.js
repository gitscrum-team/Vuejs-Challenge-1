import Vue from "vue";
import Vuex from "vuex";
import Persist from "vuex-persist";
import TaskBoard from "./modules/TaskBoard";

// console.log(TaskBoard);

Vue.use(Vuex);

let VuexLocal = new Persist({
  storage: window.localStorage,
  modules: ["TaskBoard"]
});

export default new Vuex.Store({
  modules: {
    TaskBoard: TaskBoard
  },
  plugins: [VuexLocal.plugin]
});
