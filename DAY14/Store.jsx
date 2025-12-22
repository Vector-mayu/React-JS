import {configureStore} from "@reduxjs/toolkit";
import Slice1Reducer from "./slice1";

const ReduxStore = configureStore({
	reducer : {
		slice1 : Slice1Reducer
	}
});

export default ReduxStore;