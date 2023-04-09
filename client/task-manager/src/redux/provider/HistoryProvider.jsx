import store from "../store/historyStore";

const historyProvider = (children) => {
  <Provider store={store}>{...children}</Provider>;
};

export default historyProvider;
