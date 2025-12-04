import React from "react";
import ReactDOM from "react-dom/client";

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Here we can create a function in JSX style(1st letter Capital)

function Greet(props){
	return <h2>Hello {props.name} {props.surname} nice we both are {props.gender}</h2>
}

const element = <Greet name="Mayuresh" surname="Dandekar" gender="Male"/>


Reactroot.render(element);