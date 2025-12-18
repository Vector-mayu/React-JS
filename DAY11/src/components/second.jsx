import GlobalContext from "../../Global";
import React, {useContext} from "react";


export default function Second(){
	const {Count, setCount} = useContext(GlobalContext);
		return(
		<>
			<h2>Second count is : {Count}</h2>
			<button  onClick={()=> setCount(Count+4)}>Increment by 4</button>
		</>
	)
	
}