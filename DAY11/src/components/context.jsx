import React, {useState} from "react"
import ReactDOM from "react-dom/client";
import GlobalContext from "../../Global";
import Second from "./second";

function App(){
	const [Count, setCount] = useState(1);

	return(
		<>
			<GlobalContext.Provider value={{Count,setCount}}>
				<h1>Hello Coder Amry {Count}</h1>
				<Second/>
			</GlobalContext.Provider>
		</>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)