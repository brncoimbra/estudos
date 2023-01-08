export function reducer(state, action) {
  switch (action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "multi7":
      return { ...state, number: state.number * 7 };
    case "div25":
      return { ...state, number: state.number / 25 };
    case "numberInt":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}