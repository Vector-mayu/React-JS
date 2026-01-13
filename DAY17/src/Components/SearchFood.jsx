import { useParams } from "react-router";


export default function SearchFood(){

	const {id} = useParams();

	return(
		<>
			<div>Namaste pro coder {id}</div>
		</>
	)
}