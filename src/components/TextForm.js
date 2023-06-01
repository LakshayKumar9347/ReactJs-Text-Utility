import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        // console.log(text);
        props.alert("Text is Converted in UpperCase", "success")
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        // console.log(text);
        props.alert("Text is Converted in LowerCase", "success")
    };
    const handleClearText = () => {
        setText('')
        props.alert("Clear Text Successfully", "success")
    }
    const handleCopyText=()=>{
        navigator.clipboard.writeText(text)
        console.log('copy to CB')
        props.alert("Copied to Clipboard!", "success")
    }
    const handleExtraSpaces=()=>{
        setText(text.replace(/\s+/g," "))
        props.alert("ExtraSpaces has been Removed", "success")
    }
    const playAudio=()=>{
      let audio = new Audio(`${props.audio}`)
      audio.loop = true;
      audio.play()
     
    }
    const handleOnclick = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container w-80'>
                <div className="mb-3">
                    <h1 className='text-center my-2'>Enter the Text to Analyze Below</h1>
                    <textarea className="form-control" value={text} onChange={handleOnclick} id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button className="btn btn-warning m-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-warning m-1 my-2" onClick={handleLoClick}>Convert to Uppercase</button>
                    {/* //todo add clear text functionality */}
                    {/* //todo add copy text functionality */}
                    {/* //todo add remove exptra space functionality */}
                    <button className="btn btn-warning m-1 my-2" onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-warning m-1 my-2" onClick={handleCopyText} >Copy Text</button>
                    <button className="btn btn-warning m-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-danger m-1 my-2" onClick={playAudio}>Mischief Melodies</button>
                </div>

                <div className="container my-2" >
                    <h2>Your Text Summary</h2>
                    <p>{text.split(" ").length} words , {text.length} character</p>
                    <p>{0.008 * text.split(" ").length + ' Minutes Take to Read'}</p>
                    <h1 className='text-center'>Preview  </h1>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}


