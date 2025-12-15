import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){

    const [Password, setPassword] = useState('PASSWORD');
    const [Length, setLength] = useState(8);
    const [Number, setNumber] = useState(false);
    const [Character, setCharacter] = useState(false);

    function GeneratePassword(){
        let str = "abcdefghijklmnopqrstuwwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        if(Number){
            str += "0123456789";
        }
        if(Character){
            str += "~!@#[$%^{&*()_+-=<>?/}]"
        }

        let pass = "";

        for(let i=0; i<Length; i++){
            pass += str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
    }

    // GeneratePassword(); // This creates a Function Loop 

    useEffect(()=>{
        GeneratePassword();
    },[Length, Number, Character]);

    return(
        <>
            <h1>Password is : {Password}</h1>

            <div className="attributes">
                <input type="range" min={8} max={18} value={Length} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length({Length})</label>

                <input type="checkbox" defaultChecked={Number} onChange={()=>setNumber(!Number)}></input>
                <label>Number({Number})</label>

                <input type="checkbox" defaultChecked={Character} onChange={()=> setCharacter(!Character)}></input>
                <label>Character({Character})</label>
            </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);