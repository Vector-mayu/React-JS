import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantOption(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     }

     fetchData();
    },[])

    // console.log(RestData);

    return (
			<div className="mt-20">
				<h2 className="w-[80%] m-auto text-xl font-semibold mb-6">Top restaurant chains in Mumbai</h2>
        		<div className="flex flex-wrap w-[80%] container mx-auto mt-5 gap-10">
            		{
                		RestData.map((restInfo)=><RestaurantCard key={restInfo.info.id} restInfo={restInfo}></RestaurantCard>)
            		}
        		</div>
			</div>
    )

}