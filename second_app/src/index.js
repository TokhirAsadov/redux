import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";

const intialState = { value: 0 };

const reducer = (state = intialState, action) => {
  switch (action.type){
    case "INCREMENT": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "RANDOM": {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
}

const inc = () =>({ type: "INCREMENT" });
const dec = () =>({ type: "DECREMENT" });
const random = (number) =>({ type: "RANDOM", payload: number });

document.getElementById("increment").addEventListener("click", ()=>{
  store.dispatch(inc());
});
document.getElementById("decrement").addEventListener("click",()=>{
  store.dispatch(dec());
});
document.getElementById("random").addEventListener("click",()=>{
  const randomValue = Math.floor(Math.random() * 10);
  store.dispatch(random(randomValue))
});


const store = createStore(reducer);
const update = ()=>{
  document.getElementById("counter").textContent = store.getState().value;
}
store.subscribe(update);// kuzatuvchi uzgarishni tutib oladi

store.dispatch({type:"INCREMENT"});



// let state = reducer(intialState,{ type: "INCREMENT" });
// state = reducer(intialState,{ type: "INCREMENT" });
// state = reducer(intialState,{ type: "INCREMENT" });
// state = reducer(intialState,{ type: "INCREMENT" });
// state = reducer(intialState,{ type: "INCREMENT" });
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);

