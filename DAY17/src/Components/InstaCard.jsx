export default function InstaCard({InstaData}){
	return(
		<>
			<div className="h-54 w-36 hover:shadow-lg flex-none">
				<a href={InstaData?.action?.link}>
					<img className="h-45 w-auto object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+InstaData?.imageId} alt="" />
				</a>
				<h2 className="text-center text-[20px] text-[#02060cbf] font-bold">{InstaData?.action?.text}</h2>
			</div>
		</>
	)
}