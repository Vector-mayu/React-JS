<---------React.Js--------->

# Loop Returning a Array (Uses Array) -> Map
arr.map((value, index) => <Card name={value.name} offer={value.offer} />);
-> this will return a Array 

-> HERE 'KEY'for all must be unique so,
add a key here 
 arr.map((value, index)=> <Card key={index}/>)
 -> By adding key, React can run code Optimaly 
 -> Key helps in optimizing the react code and run in browser



