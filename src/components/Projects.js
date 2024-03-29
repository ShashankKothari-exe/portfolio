import React from 'react'

export default function Projects() {
let myStyle={
    color: 'white',
    backgroundColor: "black"
}

  return (
    <div id='myDIV' className='container' style={{color:'#FFE5B4',backgroundColor:'#3B3C36'}}>
        <h1 className='my-1'>My Projects</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        BookMyRide(car rental)
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong><a href='https://bookmyride247.000webhostapp.com/' rel='noreferrer' target='_blank'>BookMyRide</a></strong> is a fullstack project. This project was created without using any <code>CSS/JS</code> framework.
      <hr/>
        <strong>Technologies used:</strong>
        <ul>
        <li>
          HTML
        </li>
        <li>
          CSS
        </li>
        <li>
          JavaScript
        </li>
        <li>
          PHP
        </li>
        <li>
          SQL
        </li>
      </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Bank Of Rishikesh(online bank management system)
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong><a href='https://borishikesh.000webhostapp.com/' rel='noreferrer' target='_blank'>This</a></strong> is a fullstack project. This project was created without using any <code>CSS/JS</code> framework.
      <hr/>
        <strong>Technologies used:</strong>
        <ul>
        <li>
          HTML
        </li>
        <li>
          CSS
        </li>
        <li>
          JavaScript
        </li>
        <li>
          PHP
        </li>
        <li>
          SQL
        </li>
      </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Learn C++ the right way (Android app)
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is an ongoing project</strong> Will be on Playstore soon. <code>Android studio</code>.
      </div>
    </div>
  </div>
</div><br/>
    </div>
  )
}
