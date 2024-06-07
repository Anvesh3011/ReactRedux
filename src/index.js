import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
let initialStore = {
  dishes: [],
  places: [],
  mountains: [],
};

function reducer(updatedStore = initialStore, dispatchedObj) {
  console.log("in the reducer");
  console.log(dispatchedObj);
  if (dispatchedObj.type === "dish") {
    return {
      ...updatedStore,
      dishes: [...updatedStore.dishes, dispatchedObj.data],
    };
  } else if (dispatchedObj.type === "place") {
    return {
      ...updatedStore,
      places: [...updatedStore.places, dispatchedObj.data],
    };
  } else {
    return {
      ...updatedStore,
      mountains: [...updatedStore.mountains, dispatchedObj.data],
    };
  }
}

let store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
