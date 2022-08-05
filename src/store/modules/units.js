const units = {
  namespaced: true,
  state: {
    unitsList: [],
    filterList: [],
    filter: {
      age: "All",
    },
  },
  mutations: {
    UNIT_LIST(state, list) {
      state.unitsList = list;
      state.filterList = list;
    },
    SET_FILTERED(state, filterList) {
      state.filterList = filterList;
    },
    SET_AGE_FILTER(state, ageFilter) {
      state.filter.age = ageFilter;
    },
  },
  actions: {
    UnitsList({ commit }, list) {
      commit("UNIT_LIST", list);
    },
    FilterUnits({ commit, state }) {
      let filterList = state.unitsList.filter((item) => {
        if (state.filter.age === "All") {
          return item;
        }
        return item.age === state.filter.age;
      });
      commit("SET_FILTERED", filterList);
    },
    setAgeFilter({ commit, dispatch }, age) {
      commit("SET_AGE_FILTER", age);
      dispatch("FilterUnits");
    },
  },
  getters: {
    getUnits(state) {
      return state.filterList;
    },
  },
};

export default units;
