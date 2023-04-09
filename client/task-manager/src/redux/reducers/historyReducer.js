const initialState = {
  modifHistory: [],
};
const historyReducer = (state = initialState, action) => {
  if (action.type === "ADD_LOG") {
    return { ...state, payload };
  }
  if (action.type === "FETCH_HISTORY") {
    return [...state, action.payload];
  }

  return state;
};
export default historyReducer;
