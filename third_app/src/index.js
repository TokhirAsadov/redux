import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,combineReducers } from "redux";
import reducer from "./redux/reducer";
import {Provider} from "react-redux";
import App from './components/App';
import news from "./redux/reducers/news"
import filter from "./redux/reducers/filter"
import './index.scss'


const store = createStore(combineReducers({news, filter}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);