import { createElement, useState } from "react";

function InputValueDisplay () {

    const [myName, setMyName] = useState("");
    const [myEmail, setMyEmail] = useState("");


    return(
        <div>
        <input type="text"
        value={myName}
        required
        onChange={(e) => setMyName(e.target.value)}
        />
        <input 
        type="email" 
        value={myEmail}
        required
        onChange={(e) => setMyEmail(e.target.value)}
        />
        <button onClick={() => alert("Submitted: "+ "\n" + myName + "\n"+ myEmail)}>Submit</button>
        </div>
    )

}
export default InputValueDisplay