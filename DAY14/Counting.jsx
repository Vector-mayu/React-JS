import {useSelector, useDispatch} from "react-redux";
import {Increment, Decrement, Reset} from "./slice1";

export default function Counting(){

	const Count = useSelector((state)=> state.slice1.count);
	const Dispatch = useDispatch();

	console.log(Increment());



	return(
		<>
		<h1>The count is : {Count}</h1>
		<button onClick={()=>Dispatch(Increment())}>Increment</button>
		<button onClick={()=>Dispatch(Decrement())}>Decrement</button>
		<button onClick={()=>Dispatch(Reset())}>Reset</button>
		</>
	)
}