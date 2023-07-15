import { useState } from "react";

const Content = () => {
    const [displaytext, setText] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        const textAreaValue = document.getElementById('textarea').value;
        if(!textAreaValue) return;        
        setText(textAreaValue);  
        document.getElementById('textarea').value = "";
    }
    return (
        <div>            
            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
            <br />
            <button onClick={handleSubmit}>Submit</button> 
            <p>{displaytext}</p>          
        </div>
    );
};

export default Content;