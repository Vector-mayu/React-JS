import CuisineCard from "./CuisineCard"

export default function MenuCard({MenuItems}){
	
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
	
	return(
		<div className="w-full mt-14">
			<p className="text-2xl font-bold ">{MenuItems.title}</p>
			<div className="">
				{
					MenuItems?.itemCards?.map((Items) => <CuisineCard key={Items?.card?.info?.id} Items={Items?.card?.info}></CuisineCard>)
				}
			</div>
		</div>


	)
}