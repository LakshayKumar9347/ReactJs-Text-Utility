import React,{useState} from 'react'

export default function About() {
  const  containerStyle ={
    backgroundColor:'rgb(24, 28, 32)',
    borderRadius:'10px'
  }
  const [btnDesc, setBtn] = useState("Enable Dark Mode")
  const [theme, setTheme] = useState({color:"black",backgroundColor:"white"})

  const changeColor=()=>{
    if (theme.backgroundColor=='white') {
      setTheme({color:"white",backgroundColor:"rgb(32, 38, 43)"})
      setBtn('Enable LIght Mode')
    }
   if (theme.backgroundColor=='rgb(32, 38, 43)') {
    setTheme({color:"#343a40",backgroundColor:"white"})
      setBtn('Enable Dark Mode')
   }
  }
    return (
 <>
     <div className='container my-3 py-3' style={containerStyle}>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item"  style={theme}>
          <h2 className="accordion-header " >
            <button className="accordion-button"  style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1 & About us
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={theme} >
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={theme}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item"style={theme} >
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <button className="btn btn-warning my-3"onClick={changeColor}>{btnDesc}</button>
      </div>
    </div>
 </>

  )
}
