import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    return {
      min:7,
      max: 31,
    };
  },
  nomes: function (state, action) {
    return ["Ana", "Bia", "Bruno", "Carlos"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
