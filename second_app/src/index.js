import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";

const intialState = 0;

const reducer = (state = intialState, action) => {
  switch (action.type){
    case "INCREMENT": {
      return state + 1;
    }
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(()=>{ // kuzatuvchi uzgarishni tutib oladi
  console.log(store.getState())
})
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"INCREMENT"});
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

