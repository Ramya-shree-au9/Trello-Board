import { combineReducers } from "redux";
import Users from "./userreducer";
import lists from './listreducer'
import todo from './todoReducer'

const reducer = combineReducers({
  Users,
  lists,todo

});

export default reducer;
