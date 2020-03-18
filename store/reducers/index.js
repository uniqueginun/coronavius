import { combineReducers } from "redux";
import CoronaReducer from "./CoronaReducer";

const rootReducer = combineReducers({
  virus: CoronaReducer
});

export default rootReducer;
