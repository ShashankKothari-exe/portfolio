import React, {useState} from 'react'

export default function Form(props) {
    const counttxt=()=>{
        setText("")
        setChars("Characters: "+text.length);
        setWords("Words: "+text.split(" ").length+" and ");

    }

    const txtchange=(e)=>{
        setText(e.target.value);
    }

    const mailchange=(e)=>{
        setEmail(e.target.value.toUpperCase());
    }

    const [email, setEmail]=useState("");
    const [text, setText]=useState("");
    const [words, setWords]=useState("");
    const [chars, setChars]=useState("");
    return (
    <div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={mailchange} value={email}/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text here:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={txtchange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={counttxt}>Submit</button><br/>
        <p>{words}{chars}</p>
    </div>
  )
}
