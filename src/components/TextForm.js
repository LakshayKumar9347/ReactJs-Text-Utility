import React, { useState } from 'react'

export default function TextForm(f) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        // console.log(text);
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        // console.log(text);
    };
    const handleClearText = () => {
        setText('')
    }
    const handleOnclick = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container my-2'>
                <div className="mb-3">
                    <h1>Enter the Text to Analyze Below</h1>
                    <textarea className="form-control" value={text} onChange={handleOnclick} id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary m-3" onClick={handleLoClick}>Convert to Uppercase</button>
                    {/* //todo add clear text functionality */}
                    <button className="btn btn-primary m-3" onClick={handleClearText}>Clear Text</button>
                </div>
            </div>
            <div className="container my-2" >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words , {text.length} character</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview  </h2>
                <p>{text}</p>
            </div>
        </>
    )
}


