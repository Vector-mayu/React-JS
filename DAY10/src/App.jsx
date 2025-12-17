import React, {useState, useEffect, useMemo} from "react";
import ReactDOM from "react-dom/client";


function App(){

	const [Count, setCount] = useState(0);
	const [FiboNumber, setFiboNumber] = useState("");

	function CalculateFibonnaci(n){
		if(n<=1){
			return n;
		}

		return CalculateFibonnaci(n-1) + CalculateFibonnaci(n-2);
	}

	const result = useMemo(()=>
		CalculateFibonnaci(FiboNumber)
	,[FiboNumber])

	return(
		<>
			<div className="card">
				<div className="counter">
					<h1>Count is : {Count}</h1>
					<button onClick={()=>setCount(Count+1)}>Increment</button>
					<button onClick={()=>setCount(Count-1)}>Decrement</button>
				</div>
				<div className="fibo">
					<h2>Fibonnaci Number is : {result}</h2>
					<input type="number" value={FiboNumber} onChange={(e)=> setFiboNumber(e.target.value)} />
				</div>
			</div>
		</>
	)
}



ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);