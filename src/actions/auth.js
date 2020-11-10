import Axios from "axios";
import { LOGIN } from ".";
import setAuthorizationToken from "../utils/setAuthorizationToken";

export function setCurrentUser(user) {
	return {
		type: LOGIN,
		payload: user
	};
}

export const login = data => {
	return dispatch => {
		return Axios.post("http://localhost:8000/api/auth", data).then(res => {
			// const token = res.data.token;
			// localStorage.setItem("jwtToken", token);
			setAuthorizationToken(res.data.access_token);
			// dispatch(setCurrentUser(jwtDecode(token)));
			dispatch(getAuth(res.data.access_token));
		});
	};
};

export const getAuth = token => {
	return dispatch => {
		return Axios.get("http://localhost:8000/api/auth").then(res => {
			// const token = res.data.token;
			// localStorage.setItem("jwtToken", token);
			// setAuthorizationToken(token);
			// dispatch(setCurrentUser(jwtDecode(token)));
			dispatch(setCurrentUser(res.data));
		});
	};
};
