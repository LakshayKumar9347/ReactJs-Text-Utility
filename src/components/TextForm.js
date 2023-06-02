import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        // console.log(text);
        props.alert("Text is Converted in UpperCase", "success")
        props.audio(true)
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        // console.log(text);
        props.alert("Text is Converted in LowerCase", "success")
        props.audio(true)
    };
    const handleClearText = () => {
        setText('')
        props.alert("Clear Text Successfully", "success")
        props.audio(true)
    }
    const handleCopyText = () => {
     text===""?props.alert(" Kindly add some text Above", "danger") || props.audio(false):  navigator.clipboard.writeText(text) &&  props.alert("Copied to Clipboard!", "success")
        props.audio()
    }
    const handleExtraSpaces = () => {
        setText(text.replace(/\s+/g, " "))
        props.alert("ExtraSpaces has been Removed", "success")
        props.audio(true)
    }
    const handleMischiefMelody = () => {
    props.alert("Mischief Audio", "success")
    props.audio(true)
    }
    const handleOnclick = (event) => {
        setText(event.target.value)
    }
    let bgColorTA
    let textColorTA

    if (props.prop === 'light') {
        bgColorTA = ' bg-light'
        textColorTA = 'text-dark'
    }
    if (props.prop === 'dark') {
        bgColorTA = ' bg-dark'
        textColorTA = 'text-light'
    }
    //! word count login
  const trimSentence = text.trim()
  const words = trimSentence.split(/\s+/)
  const wordCount = trimSentence.length===0?0:words.length
    return (
<>
<div className='container w-80'>
    <div className="mb-3">
        <h1 className='text-center my-2'>Enter the Text Here to Analyze Below</h1>
        <textarea className={`form-control${bgColorTA} ${textColorTA} `} value={text} onChange={handleOnclick} id="exampleFormControlTextarea1" rows="5"></textarea>
        <button className="btn btn-warning m-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning m-1 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        {/* //todo add clear text functionality */}
        {/* //todo add copy text functionality */}
        {/* //todo add remove exptra space functionality */}
        <button className="btn btn-warning m-1 my-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-warning m-1 my-2" onClick={handleCopyText} >Copy Text</button>
        <button className="btn btn-warning m-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger m-1 my-2" onClick={handleMischiefMelody}>Mischief Melodies</button>
    </div>
    
    <div className="container my-2" >
        <h2>Your Text Summary</h2>
        {/* text===""?"0":text.split(" ").length-1 */}
        <p>{wordCount} words , {text.length} character</p>
        <p>{0.008 * text.split(" ").length + ' Minutes Take to Read'}</p>
        <h1 className='text-center'>Preview  </h1>
        <div className={`container form-control${bgColorTA} ${textColorTA} `}> <p>{text}</p></div>
    </div>
</div>
</>
    )
}


