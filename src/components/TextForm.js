import React, {useState} from 'react'

export default function TextForm(props){

    const [text, setText] = useState(""); // default value of text variable i.e. ""
    // text = "Some new Text";  // Wrong way to update state variable
    // setText("some new Text");  // Correct way to update state variable
    const ConvertToUppercase = ()=>{
        if(text)
        {
            // console.log("Converted to Upper case!")
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("success","Converted to Uppercase!")
        }
        else{
            props.showAlert("warning", "Please enter the Text first!")
        }
    }
    const ConvertToLowercase = ()=>{
        if(text)
        {
            // console.log("Converted to Lower case!")
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("success","Converted to Lowercase!")
        }
        
        else{
            props.showAlert("warning", "Please enter the Text first!")
        }

    }
    const clearText = ()=>{
        // console.log("Text cleared")
        let newText = '';
        setText(newText)
        props.showAlert("success","Text is cleared!")

    }
    const Copy_Text = ()=> {
        let text1 = document.getElementById("TextBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("success","Text is copied to Clipboard!")

    }

    const RemoveExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        // console.log(newText);
        setText(newText.join(" "))
        props.showAlert("success","Extra Spaces are removed!")

    }


    const updateText = (event)=>{
        // console.log("Text updated")
        setText(event.target.value);
    }

    
    return(
        <>
            <div className="container my-3">
                <div className="mb-3">
                <h5>{props.heading}</h5>
                    <textarea className="form-control" value = {text} placeholder="Enter your text here!" style={{backgroundColor:props.theme==='dark'?'#1B2631':'white', color:props.theme==='dark'?'white':'black'}} onChange={updateText} id="TextBox" rows="10"></textarea>
                </div>
                <button className={`btn btn-${props.btnClr} mx-1 my-1`} onClick={ConvertToUppercase}>Convert to Uppercase</button>
                <button className={`btn btn-${props.btnClr} mx-1 my-1`} onClick={ConvertToLowercase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnClr} mx-1 my-1`} onClick={Copy_Text}>Copy Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnClr} mx-1 my-1`} onClick={RemoveExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnClr} mx-1 my-1`} onClick={clearText}>Clear Text</button>
            </div>
            <div className="container">
                <h5>Text Summary</h5>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}s to read the full text</p>
            </div>
        </>
    )
}