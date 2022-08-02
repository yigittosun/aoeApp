const units = {
  namespaced: true,
  state: {
    unitsList: [],
  },
  mutations: {
    UNIT_LIST(state, list) {
      state.unitsList = list;
    },
  },
  actions: {
    UnitsList({ commit }, list) {
      commit("UNIT_LIST", list);
    },
  },
  getters: {
    getUnits(state) {
      return state.unitsList;
    },
  },
};

export default units;
