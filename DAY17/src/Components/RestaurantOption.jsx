import { useEffect, useState } from "react"



export default function RestaurantOption(){

	const [RestData, setRestData] = useState([]);

	useEffect(()=>{

		async function fetchData() {
			const proxyserver = "https://cors-anywhere.herokuapp.com/";
			const swiggyAPI = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.19630&lng=72.96750&carousel=true&third_party_vendor=1"
			const response = await fetch(proxyserver+swiggyAPI);
			const data = await response.json();
			console.log(data);
		}

		fetchData();
	},[])
	return(
		<div>
			
		</div>
	)
}