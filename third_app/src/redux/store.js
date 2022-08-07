import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import news from "./reducers/news";
import filter from "./reducers/filter";

const stringMiddleware = () => (next) => (action) => {// next === dispatch <---- middleware enhancer ni ham aptimallawtirib kodlarimizni qisqartirib beradi
  if (typeof action === "string"){
    return next({type: action})
  }
  return next(action)
}

export const store = configureStore({// redux-toolkit
  reducer: { news,filter },
  // middleware: [ ReduxThunk,stringMiddleware ],
  middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware)),
  devTools: process.env.NODE_ENV !== "production"
})

// export const store = createStore(
//   combineReducers({news, filter}),
//   compose(applyMiddleware(ReduxThunk,stringMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );