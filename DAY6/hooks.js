import React, {useState} from "react";
import ReactDOM from "react-dom/client"

function App(){
	let [count, setCount] = useState(0);

	function Increment(){
		count++;
		setCount(count);
	}

	function Decrement(){
		count--;
		setCount(count);
	}

	return(
		<div className="counter">
			<h1>Count: {count} </h1>
			<button onClick={Increment}>Increment {count}</button>
			<button onClick={Decrement}>Decrement {count}</button>
		</div>
	)
}

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(<App/>);