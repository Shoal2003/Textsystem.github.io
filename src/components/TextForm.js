import React,{ useState } from 'react'
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TextForm(props) {
    const [Text, setText] = useState("");
    const Upcase=()=>{
        // console.log("clicked");
        let newText=Text.toUpperCase();
        setText(newText);
    }
    const Lowcase=()=>{
      // console.log("clicked");
      let newText=Text.toLowerCase();
      setText(newText);
  }
  const clickRemovesp=()=>{
    // console.log("clicked");
    let newText=Text.split(/[ ]+/)     // rejex concept in javascript to remove extra spaces
    setText(newText.join(" "));
}
  const clickclear=()=>{
    // console.log("clicked");
    let newText='';
    setText(newText);
    toast("clear")
}


// for copy
const clickcopy=()=>{
  // console.log("clicked");
      copy(Text);
      toast("You copied");
      
}
    const ChangeUp=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
 <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}  value={Text} onChange={ChangeUp} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={Upcase}> uppercase</button>
<button className="btn btn-primary mx-4" onClick={Lowcase}> Lowercase</button>
<button className="btn btn-primary mx-4" onClick={clickclear}>Clear Text</button>
<button className="btn btn-primary mx-4" onClick={clickRemovesp}>Remove extra spaces</button>
<button className="btn btn-primary mx-4" onClick={clickcopy} id="copy">Copy clipboard</button>
<ToastContainer />
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <p>Word count is {Text.split(" ").length} charecter count {Text.length} </p>
      <h2>Reviwe Text</h2>
    <p>{Text}</p>
    </div>
    
    </>
  )
}

