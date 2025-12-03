import React from "react";
import ReactDOM from "react-dom/client";

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

function greet(){
  return <h1>Mayureshhhhhh</h1>
}

function meet(){
  return <h1>Hiiiiiii</h1>
}

const newElement = meet();
const newElement2 = greet();

const newElement3 = <>{newElement2} {newElement}</>;

Reactroot.render(newElement3);