export default function InstaCard({InstaData}){
	return(
		<>
			<div className="h-54 w-36">
				<a href={InstaData?.action?.link}>
					<img className="h-45 w-36 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+InstaData?.imageId} alt="" />
				</a>
				<h2 className="text-center text-[20px] text-[#02060cbf] font-bold">{InstaData?.action?.text}</h2>
			</div>
		</>
	)
}