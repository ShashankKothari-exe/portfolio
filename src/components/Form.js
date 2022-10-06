import React, {useState} from 'react'

export default function Form(props) {
    const sendtxt=()=>{
        if(emailFlag && textFlag)
        setWords(' Thank You.')
        else
        setWords(' Please enter correct data.')
    }

    const txtchange=(e)=>{
        setText(e.target.value);
        setTflag(true);
    }

    const mailchange=(e)=>{
        setEmail(e.target.value.toUpperCase());
        setEflag(true);
    }
    
    const [email, setEmail]=useState("");
    const [text, setText]=useState("");
    const [words, setWords]=useState("");
    const [textFlag, setTflag]=useState(false);
    const [emailFlag, setEflag]=useState(false);
    return (
    <div style={{marginLeft: '30%', backgroundColor:'black', marginRight: '30%', borderRadius:'5%'}}>
        <div className="mb-3" style={{backgroundColor:'black', width:'80%'}}>
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={mailchange} value={email}/>
            </div>
            <div className="mb-3" style={{backgroundColor:'black', width:'80%'}}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:'white'}}>Enter your message here:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={txtchange}></textarea>
        </div>
        {'\u00A0'}<button className='btn btn-primary' onClick={sendtxt}>Submit</button><br/><br/>
        <h1 style={{color:'white'}}>{words}</h1>
    </div>
  )
}
