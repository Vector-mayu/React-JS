import { useState } from "react"
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./slice1";


export default function UpdateCounter(){
	const [number, useNumber] = useState("");
	const Dispatch = useDispatch();

	function HandleClick(){
		Dispatch(CustomIncreaser(Number(number)));
		useNumber("");
	}

	return(
		<>
			<input type="number" value={number} onChange={(e)=> useNumber(e.target.value)}/>
			<button onClick={HandleClick}>Submit</button>
		</>
	)
}