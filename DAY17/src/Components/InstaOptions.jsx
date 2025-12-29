import { ImageGridCards2 } from "../Utils/FoodData"
import InstaCard from "./InstaCard"

export default function InstaOptions(){
	return(
		<div>
			<h1 className="text-[#02060ceb] text-2xl font-bold font-serif ml-[10%] pb-10">Shop groceries on Instamart</h1>
			<div className="w-[80%] container mx-auto flex gap-14 flex-wrap pb-24">
				{
					ImageGridCards2.map((InstaData)=> <InstaCard key={InstaData.id} InstaData={InstaData}></InstaCard>)
				}
			</div>
		</div>
	)
}