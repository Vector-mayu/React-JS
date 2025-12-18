import { Outlet, Link } from "react-router";

export default function Details(){
	return(
		<>
			<nav>
				<Link to="/Details">Detials</Link>
				<Link to="/first">First</Link>
			</nav>

			<Outlet></Outlet>
		</>
	)
}