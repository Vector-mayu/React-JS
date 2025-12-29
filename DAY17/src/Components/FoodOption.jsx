import { ImageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";
import { ImageGridCards2 } from "../Utils/FoodData";


export default function FoodOption(){
	return(
		<div className="pt-30">
			<h1 className="text-black text-2xl font-bold font-serif ml-[10%] pb-10">Order our best food options</h1>
			
			<div className="w-[80%] container mx-auto flex gap-14 flex-wrap pb-24">
				{
					ImageGridCards.map((FoodData) => <FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>)
				}
			</div>
		</div>
	)
}

