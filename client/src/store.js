import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const middlewares = [thunk, logger];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
