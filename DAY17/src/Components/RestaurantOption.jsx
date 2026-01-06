import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

export default function RestaurantOption(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19630&lng=72.96750&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     }

     fetchData();
    },[])

    if(RestData.length == 0){
        return <Shimmer></Shimmer>
    }


    return (
        <div className="relative">
			<div className="w-[80%] mx-auto mt-15">

                <Link to="/">
                    <div className="h-10 w-20 text-white font-bold bg-[#ff5200] rounded-2xl mb-5 flex justify-center items-center">Back</div>
                </Link>

				<h2 className="text-xl font-bold mb-6">Top restaurant chains in Mumbai</h2>
        		<div className="flex gap-10 flex-nowrap overflow-x-auto">
            		{
                		RestData.map((restInfo)=><RestaurantCard key={restInfo.info.id} restInfo={restInfo}></RestaurantCard>)
            		}
        		</div>
			</div>

            <hr className="w-[80%] mx-auto mt-14" />

            <div className="w-[80%] mx-auto mt-8">
				<h2 className="text-xl font-bold mb-6">Restaurants with online food delivery in Mumbai</h2>
        		<div className="flex gap-10 flex-wrap">
            		{
                		RestData.map((restInfo)=><RestaurantCard key={restInfo.info.id} restInfo={restInfo}></RestaurantCard>)
            		}
        		</div>
			</div>

        </div>

    )

}