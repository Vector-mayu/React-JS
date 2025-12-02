

const root = document.getElementById('root');
document.querySelector('body').style.backgroundColor = 'black';

// Noob 
// header.innerText = "Hello Coder Army";
// header.style.backgroundColor = "Yellow";
// header.style.color = 'black';
// header.style.fontSize = "2rem";


// Intermidiate 
// const React = {

// 	createElement: function(tag, style, child){
// 		const element = document.createElement(tag);

// 		element.innerText = child;

// 		for(let key in style){
// 			element.style[key] = style[key];
// 		}

// 		return element;
// 	}
// }
// // Now call the function 
// const h1 = React.createElement('h1', {fontSize:'2rem', backgroundColor:'yellow',color:'black'}, 'Mayu is Coming Tech World')
// const h2 = React.createElement('h2', {fontSize:'1rem', backgroundColor:'orange',color:'black'}, 'Lets Have 1CR+ Package');
// const h3 = React.createElement('h1', {fontSize:'1rem', backgroundColor:'orange',color:'black'}, '');



// root.appendChild(h1);
// root.appendChild(h2);
// root.appendChild(h3);


// Pro (Actual React Way)

const element = React.createElement('h1', {id:'first', className:'hehe', style:{backgroundColor:'green',fontSize:'2rem'}}, "Mayuresh");
const element2 = React.createElement('h1',{id:'second', className:'hey', style:{backgroundColor:'red',fontSize:'2rem'}}, "F1");

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(element);
Reactroot.render(element2);

// here 2 Elements gets Overlapped on Each other





