import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, combineReducers, compose} from "redux";
import reducer from "./redux/reducer";
import {Provider} from "react-redux";
import App from './components/App';
import news from "./redux/reducers/news"
import filter from "./redux/reducers/filter"
import './index.scss'

const enhancer = (creteStore) => (...args) => { // store ni kuchaytirib beradi. bunda actionlarni funksiyalarini caqiriw bn birga type larni uzini beriw yuli bn ham funksiyalarni caqiriwimiz mumkin
  const store = creteStore(...args);
  const oldDispatch = store.dispatch;
  store.dispatch = (action) => {
    if (typeof action === "string"){
      return oldDispatch({type: action})
    }
    return oldDispatch(action)
  }
  return store;
}

const store = createStore(combineReducers({news, filter}),compose(enhancer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// const store = createStore(combineReducers({news, filter}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);