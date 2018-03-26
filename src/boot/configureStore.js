// @flow
// import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "../reducers";

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: "nativestarterkit",
      hostname: "localhost",
      port: 5678
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
