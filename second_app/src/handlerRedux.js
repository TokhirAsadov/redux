// import { createStore,bindActionCreators } from "redux";
// import * as actions from "./redux/actions"; // import {dec, inc, random} from "./redux/actions";
// import reducer from "./redux/reducer";
//
// const store = createStore(reducer); // create store <---------------------------------
// const { dispatch,subscribe,getState } = store;
//
// subscribe(()=>{ // kuzatuvchi uzgarishni tutib oladi
//   document.getElementById("counter").textContent = getState().value;
// });
//
// const { inc, dec, random } = bindActionCreators(
//   actions,
//   dispatch
// )
//
// document.getElementById("increment").addEventListener("click", ()=>{
//   inc();
// });
//
// document.getElementById("decrement").addEventListener("click",()=>{
//   dec();
// });
//
// document.getElementById("random").addEventListener("click",()=>{
//   const randomValue = Math.floor(Math.random() * 10);
//   random(randomValue);
// });
//
// // const bindActionCreator=
// //   (creator, dispatch) =>
// //     (...args) => {
// //       dispatch(creator(...args));
// //     }
// //
// // const incHandler = bindActionCreator(inc, dispatch);
// // const decHandler = bindActionCreator(dec, dispatch);
// // const randomHandler = bindActionCreator(random, dispatch);
// //
// //
// // document.getElementById("increment").addEventListener("click", ()=>{
// //   incHandler();
// // });
// //
// // document.getElementById("decrement").addEventListener("click",()=>{
// //   decHandler();
// // });
// //
// // document.getElementById("random").addEventListener("click",()=>{
// //   const randomValue = Math.floor(Math.random() * 10);
// //   randomHandler(randomValue);
// // });
//
//
//
// // let state = reducer(intialState,{ type: "INCREMENT" });
// // state = reducer(intialState,{ type: "INCREMENT" });
// // state = reducer(intialState,{ type: "INCREMENT" });
// // state = reducer(intialState,{ type: "INCREMENT" });
// // state = reducer(intialState,{ type: "INCREMENT" });
// // console.log(state);
//
// //const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <></>
// //   </React.StrictMode>
// // );