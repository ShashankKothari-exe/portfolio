import React from 'react'
import gitimg from "./githubimg.jpg";
import linkimg from "./linkedinimg.png";
import discordimg from "./waterdiscord.png";

export default function Contact() {
  return (
    <div>
     <h1 className='img' style={{color: 'white', marginLeft: '42%', backgroundColor: '#181818', width: '18%', borderRadius: '6%', textAlign: 'center'}}>Contact Me.</h1><br/><hr/><br/>
     <a href='https://github.com/ShashankKothari-exe' target="_blank" without rel="noreferrer"><img  className="img" alt='GitHub' src={gitimg}/></a><br/><br/><hr/><br/>
     <a href='https://linkedin.com/in/shashank-kothari-163180194' target="_blank" without rel="noreferrer"><img  className="img" alt='GitHub' src={linkimg}/></a><br/><br/><hr/><br/>
     <a href='https://discordapp.com/users/734869380655087657/' target="_blank" without rel="noreferrer"><img  className="img" alt='GitHub' src={discordimg}/></a><br/><br/><hr/><br/>
    </div>
  )
}
