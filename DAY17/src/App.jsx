import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption.jsx"
import InstaOptions from "./Components/InstaOptions.jsx";


function App(){
	return(
		<>
			<Header></Header>
			<FoodOption></FoodOption>
			<InstaOptions></InstaOptions>
		</>
	)
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);