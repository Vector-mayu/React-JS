import React from "react";
import ReactDOM from "react-dom/client";

const e1 = React.createElement('h1',{id: 'e1', style:{backgroundColor:'skyblue', fontsize:'2rem', color: 'black'}}, 'Mayuresh has Arrived.....');
const e2 = React.createElement('h1', {id: 'e2', style:{backgroundColor: 'yellow', fontsize: '2rem', color:'black'}}, 'Good Evening Entrepreneur')

const div = React.createElement('div', {id:'div1' ,style:{backgroundColor:'orange', height:'5rem', width:'25rem'}}, [e1, e2]);
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

const newElement = <h1>Hello Coder Army</h1>

Reactroot.render(newElement);

// run commands
// -> npx parcel filename.html
// -> npx parcel build filename.html