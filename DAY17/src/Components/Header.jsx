import React from "react";


// div1 = Swiggy Logo and all
// div2 = Swiggy Search Bar and location
// div3 = 4 Cards for types of services

export default function Header(){


	return(
		<header className="bg-[#ff5200] font-serif">
			<div className="flex justify-between container mx-auto py-8">
				<img className="h-12 w-40" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />

				<div className="text-white font-bold text-base my-auto flex gap-15 items-center">
					<a className="" href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
					<a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
					<a className="border border-white px-4 py-3 rounded-xl" href="">Get the App</a>
					<a className="bg-black px-4 py-3 rounded-xl" href="">Sign In</a>
				</div>
			</div>

			<div className="pt-16 pb-8 relative">

				<img className="h-123 w-63 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
				<img className="h-123 w-63 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />

				<div className="text-5xl text-white font-bold max-w-[60%] mx-auto text-center">
					Order Food and groceries. Discover best restaurants. Swiggy it!
				</div>

				<div className="max-w-[70%] container mx-auto flex gap-5 mt-6 text-gray-950 relative justify-center">
					<img className="h-7 absolute top-4 left-48 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVcBE3zM44fk8jrHOKRLcjBOF2WCC0iV5Bg&s" alt="" />
					<input className="bg-white w-[30%] pl-14 pr-6 py-4 text-xl rounded-2xl border" type="text" placeholder="Mumbai, India"></input>
					<input className="bg-white w-[40%] px-6 py-4 text-xl rounded-2xl" type="text" placeholder="Search for restaurant, item or more"></input>
				</div>

				<div className="max-w-[80%] container mx-auto flex pt-14">
					<a href="https://www.swiggy.com/restaurants" target="_blank">
						<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
					</a>

					<a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1 " target="_blank">
						<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
					</a>

					<a href="https://www.swiggy.com/dineout" target="_blank">
						<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
					</a>
				</div>
			</div>
		</header>
	)

}