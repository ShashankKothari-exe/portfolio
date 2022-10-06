import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Form';
import Projects from './components/Projects';
import Hey from './components/Hey';
import Knowme from './components/Knowme';
import Contact from './components/Contact';

function App() {

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  

  document.getElementById('root').style.display='none';
  document.getElementById('loading').style.display='block';
  sleep(1000);
  document.getElementById('root').style.display='block';
  document.getElementById('loading').style.display='none';
  return (
    <>
<Navbar title="SHASHANK KOTHARI"/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Hey/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Projects/><br/><div id='about'><br/></div><br/><br/><br/><br/><br/><br/><br/><br/>
<Knowme/><br/><div id='contact'><br/></div><br/><br/><br/><br/><br/><br/><br/><br/>
<Contact/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<TextForm/><br/>  
    </>
  );
}

export default App;
