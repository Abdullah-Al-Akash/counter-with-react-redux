import { applyMiddleware, createStore } from "redux";
import myLogger from "./DynamicCounter/middleWares/myLogger";
import rootReducers from "./rootReducer";
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, myLogger)));

export default store;