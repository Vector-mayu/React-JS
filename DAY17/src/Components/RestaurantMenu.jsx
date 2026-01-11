import { useParams } from "react-router"
import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";

export default function RestaurantMenu(){

	let {id} = useParams();
	// console.log(id);

	const [RestData, setRestData] = useState([]);
	const [Selected, setSelected] = useState(null);

	console.log(Selected);
	
	useEffect(()=>{
		
		async function fetchData() {
			
			const proxyServer = "https://cors-anywhere.herokuapp.com/"
			const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
			const response = await fetch(proxyServer+swiggyAPI);
			const data = await response.json();
			const TempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
			const FilterData = TempData.filter((items)=> 'title' in items?.card?.card)
			setRestData(FilterData);
		 }
	
		 fetchData();
		},[])

		// console.log(RestData); // Restdata = array elements containing all options in menu with title
	return(
		<div className="">

			<div className="w-[60%] mx-auto pt-10">

				<button className={`w-30 text-xl border py-2 px-4 rounded-3xl mr-4 border-gray-400 font-bold ${Selected=='veg'?'bg-green-500':'bg-gray-100'}`} 
				onClick={()=>setSelected(Selected==='veg'?null:'veg')}>
				Veg
				</button>

				<button className={`w-30 text-xl border py-2 px-4 rounded-3xl mr-4 border-gray-400 font-bold ${Selected=='nonveg'?'bg-[#fA3C5A]':'bg-gray-100'}`} 
				onClick={()=> setSelected(Selected==='nonveg'?null:'nonveg')}>
				Non-Veg
				</button>

			</div>
			<div className="w-[60%] mx-auto ">
				{
					RestData.map((MenuItems)=> <MenuCard key={MenuItems?.card?.card?.title} FoodSelected={Selected} MenuItems={MenuItems?.card?.card}></MenuCard>)
				}
			</div>
		</div>	
	)
}