import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLogged from "./isLogged";
import authReducer from "./auth.reducer";

const allReducers = combineReducers({
	counter: counterReducer,
	auth: authReducer,
	isLogged
});

export default allReducers;
