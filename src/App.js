

import { useState } from 'react';
import { Stop } from './components/Stop.js';
import { Timer } from './components/Ti.js';

import './App.css';

function App() {
  const [sec,setSec]=useState(0)
  const [minutes,setMinutes]=useState(1)
  return (
    <>
   <div className="Name">
     <Timer sec={sec} setSec={setSec} minutes={minutes} setMinutes={setMinutes}/>
     <Stop/>
    
   </div>
  

   
   </>
  );
}

export default App;
