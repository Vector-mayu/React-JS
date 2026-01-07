import { useState } from "react"
import CuisineCard from "./CuisineCard"

export default function MenuCard({MenuItems}){

	const [IsOpen, setIsOpen] = useState(true);
	
	if(MenuItems?.categories?.length in MenuItems)
	{
		return(
			<div className="w-full">
				<p>{MenuItems.title}</p>

				<div>
					{
						MenuItems?.categories?.map((Items)=> <MenuCard key={Items?.title} MenuItems={Items} ></MenuCard>)
					}
				</div>
			</div>
		)
	}
	
	if(!IsOpen)
    {
        return(
            <div className="w-full mt-14">
                <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold ">{MenuItems.title}</p>
                    <button className="text-5xl mr-10" onClick={()=> setIsOpen(!IsOpen)}>{IsOpen? `▾`:`▴`}</button>
                </div>
                <div className="h-4 bg-gray-200 w-full"></div>
            </div>
        )
    }

	return(
		<div className="w-full mt-15 mb-15">

			<div className="flex justify-between w-full">
			    <p className="text-2xl font-bold ">{MenuItems.title}</p>
                <button className="text-3xl mr-10" onClick={()=> setIsOpen(!IsOpen)}>{IsOpen? `▾`:`▴`}</button>
            </div>

			<div className="">
				{
					MenuItems?.itemCards?.map((Items) => <CuisineCard key={Items?.card?.info?.id} Items={Items?.card?.info}></CuisineCard>)
				}
			</div>

            <div className="h-4 bg-gray-200 w-full"></div>

		</div>


	)
}