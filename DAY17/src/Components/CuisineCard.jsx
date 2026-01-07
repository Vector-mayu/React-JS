export default function CuisineCard({Items}){
	return(
		<div>
			<div className="h-44 overflow-hidden flex w-full justify-between mb-10 pb-4 mt-5">
				<div className="w-[60%] ">
					<h2 className="text-gray-700 font-bold text-lg">{Items?.name}</h2>

					<p className="text-base font-bold">{"₹ " + ("defaultPrice" in Items ? Items?.defaultPrice/100 : (Items?.price / 100).toFixed(0))}</p>
					
					<div className="my-3 flex gap-2">
						<span className="text-green-700 text-base font-medium" >{Items?.ratings?.aggregatedRating?.rating}</span>

						<span className="text-gray-500">{"("+Items?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
					</div>

					<p className="w-full text-gray-600 font-semibold" >{Items?.description}</p>
				</div>

				<div className="w-[20%] relative ">
					<img className="w-40 h-36 object-cover mx-auto rounded-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Items?.imageId}/>
					<button className="absolute left-8 bottom-0 w-30 h-9 text-xl text-green-500 font-bold bg-amber-50  border border-gray-300 rounded-lg hover:bg-gray-300">ADD</button>
				</div>

			</div>

			<div className="flex-none w-full">
				<hr className="h-1 text-gray-400" />
			</div>

		</div>

	)
}