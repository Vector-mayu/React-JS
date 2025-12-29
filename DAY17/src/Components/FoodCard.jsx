


export default function FoodCard({FoodData}){
	return(
		<div className="transform hover:scale-110 transition duration-400">
			<a href={FoodData?.action?.link}>
				<img className="h-45 w-36 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+FoodData?.imageId} alt="Food Image"/>
			</a>
		</div>
	)
}