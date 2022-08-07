import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import news from "./../components/NewsList/news_slice";
import filter from "../components/NewsFilter/filter_slice";
import stringMiddleware from "./middleware/stringMiddleware";


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