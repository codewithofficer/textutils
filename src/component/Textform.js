import React, {useState} from 'react'


export default function Textform(props) {
    const upclick= ()=>{
        console.log("upper case was clicked"+text);
        let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("DONE","converted to upper case")
}
const downclick= ()=>{
  console.log("lower cas was clicked")
  let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("DONE","converted to lower case");
    
}
const cleanclick= ()=>{
  console.log("text cleared")
  let newtext="";
  setText(newtext); 
  props.showAlert("DONE","Text cleared");
}
const copyho = ()=>{
   let text = document.getElementById("text box");
   text.select();
   navigator.clipboard.writeText(text.value);
   alert("Copied the text: " + text.value);
   props.showAlert("Text copied","DONE");
  
} 
 const handleonchange= (event)=>{
  console.log("on change");
  setText(event.target.value)}

        const [text, setText] = useState('Enter text here');
    // text="please write here"; // wrong way to change the state
    // seText("please write here"); // correct way
  return (
    <>
<div>
<div className="mb-3">
<h1>{props.heading}</h1>

<label htmlFor =" text box" className="form-label ">Example Write here </label>

<textarea className="form-control" id="text box" rows="8" value={text} onChange={handleonchange} ></textarea></div>

<button type="button" className="btn btn-primary mx-2" onClick={upclick}>convert to upper case</button>
<button type="button" className="btn btn-secondary mx-2"onClick={downclick}>convert to lower case</button>
<button type="button" className="btn btn-danger mx-2" onClick={cleanclick}>Clear text</button>
<button type="button" className="btn btn-dark"onClick={copyho}>copy</button>


</div>
<div className="container">
<h2>Your text summary</h2>
<p>{text.split(" ").length-1 } words and {text.length} Characters</p>
<p><button type="button" className="btn btn-primary">
  Preview <span className="badge text-bg-secondary"></span>
</button></p>
<p>{text}</p>
</div>
</>
  )
}
