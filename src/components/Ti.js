import React, { useRef,useState } from 'react'
import "./Timer.css"
import { useEffect } from 'react'

export const Timer = (props) => {
  const [roti, setRoti] = useState(0)
  const [button, setbutton] = useState(0)

  var timer
  
  useEffect(() => {
    if(roti==1)
    timer=setInterval(() => {
      props.setSec(props.sec-1)
 
      if(props.sec==0){
        props.setMinutes(props.minutes-1)
        props.setSec(59)
      }
      if(props.minutes==0&&props.sec==0){
        props.setMinutes(0)
        props.setSec(0)
        
        return
      }
      
    },1000);
  

   return ()=>clearInterval(timer)
  
    
    
  })

 
  const handleStart=()=>{

   if(button==0){
    setRoti(1)
    setbutton(1)
   }
   else if(button==1){
     clearInterval(timer)
     setRoti(0)
     setbutton(0)

   }
  

  }
  const handleReset=()=>{
    props.setMinutes(5)
    props.setSec(0)
    setRoti(0)

  }
  
  
  return (
    <div className='Timer'>

    <div>
      <div style={{padding:"20px"}}>
        <h1 style={{textAlign:"center"}}>Google Timer</h1>
        <h1 style={{marginTop:"10px",textAlign:"center",letterSpacing:"1.4px",fontSize:'40px'}}>{props.minutes<10?"0"+props.minutes:props.minutes}m:{props.sec<10?"0"+props.sec:props.sec}s</h1>
       
      </div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <button onClick={handleStart} style={{padding:"10px",width:"100px",border:"none",outline:"none",background:"blue",borderRadius:"10px",color:"white",fontSize:"18px"}}>{button==0?"Start":"Stop"}</button>
        <button onClick={handleReset}  style={{padding:"10px",width:"100px",border:"none",outline:"none",background:"blue",borderRadius:"10px",color:"white",fontSize:"18px"}}>Reset</button>
      </div>
    </div>

    </div>
  )
}
