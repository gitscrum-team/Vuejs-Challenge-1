export default {
  setState: async ({ commit }, param) => {
    //state.listStates = param;
    commit("SET_STATE", param);
  }
};
