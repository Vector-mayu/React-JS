import React from "react";
import ReactDOM from "react-dom/client";

// make a card function

function Card(props) {
  return (
    <div className="middle" style={{border:"2px solid black", padding:"10px",  background:"linear-gradient(240deg, #83d6f4ff 10%, #3de7e7ff 30%, #138ad4ff 100%)"}}>
      <img src="https://m.media-amazon.com/images/I/61n8G12sUML._SY741_.jpg" height="200px" width="200px"/>
      <div style={{textAlign:'center'}}>
        <h2>{props.name}</h2>
        <h1 style={{color:'white'}}>{props.offer}</h1>
        <h2 style={{color:'black', fontSize:"2rem"}}>Shop Now</h2>
      </div>
    </div>
  );
}

function Header(){
	return (
		<div className="header">
			<img className="logo" src="https://images.indianexpress.com/2021/01/myntra.png" height="65px" />

			<div className="sections">
				<button className="but">MEN</button>
				<button className="but">WOMEN</button>
				<button className="but">KIDS</button>
				<button className="but">HOME</button>
				<button className="but">BEAUTY</button>
				<button className="but">STUDIO</button>
			</div>

		<input className="search-bar" placeholder="Search For Products, Brands and More"/>

		<div className="profile">
			<button className="corner">Profile</button>
			<button className="corner">Wishlist</button>
			<button className="corner">Bag</button>
		</div>

		</div>
	)
}

const arr = [{name:'Pants', offer:'20-30% Off'},
			{name:'Shirts', offer:'10-20% Off'},
			{name:'Patloons', offer:'20-30% Off'},
			{name:'Kurtas', offer:'30-40% Off'},
			{name:'Tops', offer:'15-30% Off'},
			{name:'Garments', offer:'5-15% Off'},
			{name:'Trousers', offer:'20-30% Off'},
			{name:'Party Wear', offer:'30-35% Off'},
			{name:'Nighty', offer:'10-30% Off'},
			{name:'Saree', offer:'10-40% Off'}];

function App(){
	return (
		<>
		<Header/>

		{/* //Body */}
		<div className="card" style={{display:'flex', gap:'20px', flexWrap:"wrap"}}>
			{
				arr.map((value, index)=> <Card key={index} name={value.name} offer={value.offer}/>)
			}
		</div>


		</>
	)
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
