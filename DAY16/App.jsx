import React from "react";
import ReactDOM from "react-dom/client";

function App(){
	return(
		<>

				<div className="flex">

					<div className="h-90 w-100 bg-amber-100 shadow-lg rounded-lg text-center mt-8">
						<div className="flex justify-center">
							<img className="h-60 mt-4 rounded-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6k2Zp4iC1lWO4luUip_6Ls_abrHweNfzh1Q&s" alt="profile_pic" />
						</div>

						<div className="mt-2">
							<div className="font-bold text-2xl">
								<h2>Gateway of India</h2>
							</div>
							<div className="text-base text-gray-500">
								<h3>Location :- Mumbai</h3>
							</div>
							<div className="text-2xl text-blue-400">
								<button>More Info</button>
							</div>
						</div>

						<div className="h-90 w-100 bg-amber-100 shadow-lg rounded-lg text-center mt-8">
							<div className="flex justify-center">
								<img className="h-60 mt-4 rounded-lg object-cover" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/8a/24/79/the-taj-mahal-palace.jpg?w=500&h=400&s=" alt="profile_pic" />
							</div>

							<div className="mt-2">
								<div className="font-bold text-2xl">
									<h2>Tag Hotel</h2>
								</div>
								<div className="text-base text-gray-500">
									<h3>Location :- Mumbai</h3>
								</div>
								<div className="text-2xl text-blue-400">
									<button>More Info</button>
								</div>
							</div>
						</div>

					</div>




			</div>
		</>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);