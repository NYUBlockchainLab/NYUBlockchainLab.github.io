import { createStore, Store } from "redux";
import reducer from "./reducer";

const configureStore = (): Store => {
  return createStore(reducer);
};

export default configureStore;
