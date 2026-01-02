
export default function RestaurantCard({restInfo}){
   
    
    return (
		<div className="">
        	<img className="w-70 h-45 container object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
			<h2 className="w-62 h-6 text-2xl font-bold font-serif relative bottom-8 left-4 overflow-x-auto">{restInfo?.info?.name}</h2>
		</div>
		)
}