import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        // console.log(text);
        props.alert("Text is Converted in UpperCase", "success")
        props.audio()
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        // console.log(text);
        props.alert("Text is Converted in LowerCase", "success")
        props.audio()
    };
    const handleClearText = () => {
        setText('')
        props.alert("Clear Text Successfully", "success")
        props.audio()
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        console.log('copy to CB')
        props.alert("Copied to Clipboard!", "success")
        props.audio()
    }
    const handleExtraSpaces = () => {
        setText(text.replace(/\s+/g, " "))
        props.alert("ExtraSpaces has been Removed", "success")
        props.audio()
    }
    const handleMischiefMelody = () => {
    props.audio()
    props.alert(" Ahhh Fuck Me Daddy Harder", "success")
    }
    const handleOnclick = (event) => {
        setText(event.target.value)
    }
    let BtsBg
    let BtsColor

    if (props.prop === 'light') {
        BtsBg = ' bg-light'
        BtsColor = 'text-dark'
    }
    if (props.prop === 'dark') {
        BtsBg = ' bg-dark'
        BtsColor = 'text-light'
    }
    return (
        <>
            <div className='container w-80'>
                <div className="mb-3">
                    <h1 className='text-center my-2'>Enter the Text Here to Analyze Below</h1>
                    <textarea className={`form-control${BtsBg} ${BtsColor} `} value={text} onChange={handleOnclick} id="exampleFormControlTextarea1" rows="5"></textarea>
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
                    <p>{text.split(" ").length} words , {text.length} character</p>
                    <p>{0.008 * text.split(" ").length + ' Minutes Take to Read'}</p>
                    <h1 className='text-center'>Preview  </h1>
                    <div className={`container form-control${BtsBg} ${BtsColor} `}> <p>{text}</p></div>
                </div>
            </div>
        </>
    )
}


