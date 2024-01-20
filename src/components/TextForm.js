import { useState } from "react"
import React from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleOnchange = (event) => {
        // console.log("Text area");   
        // Enables the further typing of the text in text area
        setText(event.target.value);

    }
    const convertToUppercase = () => {
        // console.log("Button was clicked");

        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("Characters are coverted into uppercase", "Success");

    }

    const convertToLowercase = () => {
        // console.log("Button was clicked");

        let newText = text.toLowerCase();
        setText(newText);

        props.showAlert("Characters are coverted into lowercase", "Success");

    }

    const clearText = () => {
        setText('');
        props.showAlert("Text is cleared", "Success");

    }

    const handleCpoyText = () => {
        // let text = document.querySelector('#box')
        // // console.log(textValue.value);
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();  // disselect the text after copying
        props.showAlert("Text is copied to clipboard", "Success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);   // returns array of only the words used in the text so extra spaces won't be considered
        // console.log(newText); 
        setText(newText.join(" "));

        props.showAlert("Extra spaces from the text removed", "Success");

    }

    const [text, setText] = useState("")
    // setText("Enter here");  Correct way to change the value text
    return (
        <>
            <div className="container my-3 col-sm-8">

                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3 mt-3" >
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="box" rows="6" ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 hover-bg" onClick={convertToUppercase}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 hover-bg" onClick={convertToLowercase}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 hover-bg" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 hover-bg" onClick={handleCpoyText}>CopyText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 hover-bg" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


            </div>

            <div className="container col-sm-8">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} words, {text.length} charecters</p>
                <p>{0.008 * text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
