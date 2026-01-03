
export default function RestaurantCard({restInfo}){
   
    
    return (
			<div className="max-w-[275px] duration-200 transform transition hover:scale-95">
				<div className="relative">
        			<img className="w-68 h-45 object-cover rounded-2xl"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
					<p className="z-10 absolute top-38 left-3 font-extrabold text-lg text-white">{restInfo?.info?.aggregatedDiscountInfoV3?.header} {restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
					<div className="absolute bottom-0 left-0 right-0 top-32 rounded-b-2xl bg-gradient-to-t from-black h-14 to-transparent"></div>
					
					<h2 className="w-62 h-6 text-lg font-semibold font-serif ml-3 mt-3 overflow-hidden">{restInfo?.info?.name}</h2>
					
					<div className="flex items-center my-auto mt-2 font-sans">
						<div class="flex items-center justify-center w-5 h-5 rounded-full bg-[#07a145] ml-3">
							<svg
								class="w-3 h-4 fill-white"
								viewBox="0 0 24 24"
							>
							<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
							</svg>
							
						</div>
						<span className="ml-2 text-base font-light">{restInfo?.info?.avgRating}</span>
						<span className="ml-2 text-lg font-normal">{restInfo?.info?.sla?.slaString}</span>
					</div>

					<p className=" text-gray-500 h-6 ml-3 overflow-hidden">{restInfo?.info?.cuisines.join("  ")}</p>
					
					<p className="text-gray-500 ml-3">{restInfo?.info?.locality}</p>

				</div>
			</div>
		)
}