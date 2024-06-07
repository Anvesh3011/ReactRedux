import React, { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const inputRef = useRef();
  let dispatch = useDispatch();
  let store = useSelector((store) => store);
  console.log(store);
  const { dishes, places, mountains } = store;

  function addToStore(e) {
    console.log(e.target.name);
    dispatch({ type: e.target.name, data: inputRef.current.value });
  }

  return (
    <div className="App">
      <div className="input">
        <input ref={inputRef} type="text" />
      </div>
      <div className="buttons">
        <button onClick={addToStore} name="dish">
          Add Dish
        </button>
        <button onClick={addToStore} name="place">
          Add Place
        </button>
        <button onClick={addToStore} name="mountains">
          Add mountains
        </button>
      </div>
      <div className="allItems">
        <div className="dishes">
          <h1>Dishes</h1>
          {dishes.map((dish, index) => (
            <p className="item" key={index}>
              {dish}
            </p>
          ))}
        </div>
        <div className="places">
          <h1>Places</h1>
          {places.map((place, index) => (
            <p className="item" key={index}>
              {place}
            </p>
          ))}
        </div>
        <div className="mountains">
          <h1>Mountains</h1>
          {mountains.map((mountain, index) => (
            <p className="item" key={index}>
              {mountain}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
