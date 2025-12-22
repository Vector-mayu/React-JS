import React from "react-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./Store";
import Counting from "./Counting";

function App(){
	return(
		<>
		<Provider store={Store}>
			<Counting></Counting>
		</Provider>
		</>
	)
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);