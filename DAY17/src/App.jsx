import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import {BrowserRouter, Routes, Route} from "react-router";
import RestaurantOption from "./Components/RestaurantOption";

function App(){
	return(
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/restaurant" element={<RestaurantOption/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);