import { useParams } from "react-router"
import { useState, useEffect } from "react";

export default function RestaurantMenu(){

	let {id} = useParams();
	console.log(id);

	const [RestData, setRestData] = useState([])
	
	useEffect(()=>{
		
		async function fetchData() {
			
			const proxyServer = "https://cors-anywhere.herokuapp.com/"
			const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1963&lng=72.9675&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
			const response = await fetch(proxyServer+swiggyAPI);
			setRestData(response);
		 }
	
		 fetchData();
		},[id])

	return(
		<>
			<h1>Hello Coder Army</h1>
			<h1>{id}</h1>
		</>	
	)
}