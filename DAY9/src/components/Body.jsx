import { useState, useEffect } from "react";

function Body(){

	const [Profiles, setProfiles] = useState([]);
	const [NumberChanged, setNumberChanged] = useState("");

	async function GenerateProfiles(count){
		const ran = Math.floor(Math.random()*10000+1);
		const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
		const data = await response.json();

		setProfiles(data);
	}

	useEffect(()=>{
		GenerateProfiles();
	},[])

	return(
		<>
			<div className="search-bar">
				<input type="text" placeholder="search for anyone..." value={NumberChanged} onChange={(e)=>setNumberChanged(e.target.value)}></input>
				<button onClick={()=>GenerateProfiles(Number(NumberChanged))}>Submit</button>
			</div>
		
			<div className="profiles">
				{
					Profiles.map((value)=>{
						return(
							<div key={value.id} className="cards">
								<img src={value.avatar_url}></img>
								<h2>{value.login}</h2>
								<a className="anchor" href={value.html_url} target="_blank">Profile</a>
							</div>
						)
					})
				}
			</div>
		</>	

	)
}

export default Body;