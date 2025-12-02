const e1 = React.createElement('h1',{id: 'e1', style:{backgroundColor:'skyblue'}, fontsize:'2rem', color: 'black'}, 'Mayuresh has Arrived.....');
const e2 = React.createElement('h1', {id: 'e2', style:{backgroundColor: 'yellow', fontsize: '2rem', color:'black'}}, 'Good Evening Entrepreneur')

const div = React.createElement('div', {id:'div1' ,style:{backgroundColor:'orange', height:'5rem', width:'25rem'}}, [e1, e2]);
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(div);

// Node Modules Downloads Commands
// -> npm init 
// -> npm install parcel
// -> npm install react
// -> npm install react-dom