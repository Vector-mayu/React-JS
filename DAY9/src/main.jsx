import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

function GithubProfiles(){
	// This must return the Header and Body of the page
	return(
		<>
			<Header></Header>
			<Body></Body>
		</>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfiles></GithubProfiles>);