import { useEffect, useState } from "react";
import {useParams} from "react-router";

export default function Github(){

	const [Profile, setProfile] = useState(null);
	const {name} = useParams();


	async function FetchUser(){
		const response = await fetch(`https://api.github.com/users/${name}`);
		const data = await response.json();
		setProfile(data)
	}

	useEffect(()=>{
		FetchUser();
	},[])

	return(
		<>
			<h1>This is Gihub Page</h1>

			<div>
				<img src={Profile?.avatar_url}/>
				<h2>{Profile?.login}</h2>
				<a href={Profile?.html_url}>Profile</a>
			</div>
		</>
	)
}