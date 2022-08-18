import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./DynamicCounter/dynamicCounterReducer";


const rootReducers = combineReducers({
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer
});

export default rootReducers;