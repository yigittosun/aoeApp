const units = {
  namespaced: true,
  state: {
    unitsList: [],
    filterList: [],
    filter: {
      age: "All",
      costs: [],
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
    SET_COSTS_FILTER(state, costsFilter) {
      state.filter.costs = costsFilter;
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
      if (state.filter.costs.length) {
        const rangeValue = [];
        filterList.forEach((item) => {
          if (item.cost) {
            Object.keys(item.cost).forEach((key) => {
              state.filter.costs.forEach((cost) => {
                if (
                  key === cost.name &&
                  item.cost[key] >= cost.value[0] &&
                  item.cost[key] <= cost.value[1]
                ) {
                  rangeValue.push(item);
                }
              });
            });
          }
        });
        filterList = rangeValue;
      }
      commit("SET_FILTERED", filterList);
    },
    setAgeFilter({ commit, dispatch }, age) {
      commit("SET_AGE_FILTER", age);
      dispatch("FilterUnits");
    },
    setCostFilter({ commit, dispatch }, costs) {
      commit("SET_COSTS_FILTER", costs);
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
