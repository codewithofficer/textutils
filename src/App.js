// import logo from './logo.svg';
import './App.css';
import About from './component/about';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import ColorMode from './component/ColorMode';

function App() {


    const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null)

const showAlert = (message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
        setAlert(null); 
    }, 2000);
    
}
   const toggleMode= ()=>{
    if(mode === 'light'){
        setMode('dark');
        document.body.style.background='#5db19780';
        showAlert("Dark mode has been enebled","Success");
    }
    else{
        setMode('light');
        document.body.style.background='white';
        showAlert("Light mode has been enebled","Success");
    }
    
   }
    return(
<>
<Navbar title=" MY React app" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
{/* <Navbar/>  */}
<div className="container" my-3="true">
<Textform showAlert={showAlert} heading=" Enter here to Analyze " />
{/* <ColorMode/> */}
<About/>
</div>
</>
    )
}

export default App;