import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){
	const [Password, setPassword] = useState("PASSWORD");
	const [Number, setNumber] = useState(8);
	const [Length, setLength] = useState(false);
	const [Character, setCharacter] = useState(false);

	return(
		<>
			<h1>Password is :- {Password}</h1>

			<div className="attributes">

				<input type="range" min={8} max={18} value={Length} onChange={(e)=>setLength(e.target.value)}></input>
				<label>Lenght({Length})</label>

				<input type="checkbox" defaultChecked={Length} onChange={()=>setNumber(!Number)}></input>
				<label>Number({Number})</label>

				<input type="checkbox" defaultChecked={Character} onChange={()=>setCharacter(!Character)}></input>
				<label>Character({Character})</label>

			</div>
		</>
	)
}




ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);