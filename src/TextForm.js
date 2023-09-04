import { useState } from "react";

export default function Textform(props) {
    const [text,setText] = useState("Enter text here")
    
    
    const handonchange = (e)=>{
        setText(e.target.value);
    }
    
    const handleupclick = ()=> {
        setText(text.toUpperCase());
    }

    const handleloclick = ()=> {
        setText(text.toLowerCase());
    }

    const countWords = (text)=>{
        return text.split(" ").filter(word => word !== "").length
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">  
                <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handonchange}></textarea>
            </div>
            <div className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</div>
            <div className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</div>

            <div className="my-2">
                <h1>Your text summary</h1>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} Minutes read</p>
                <h1 >preview</h1>
                <p>{text}</p>
            </div>
        </>
    );
}