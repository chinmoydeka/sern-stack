import React, {useState,useEffect} from 'react';
import sendAsync from './renderer.js'

export default function App(){
  const [Data, setData] = React.useState([])
  React.useEffect(()=>{
    sendAsync('sendData').then((res)=>{
      setData(res)
      console.log(Data)
    })
  },[])
  
  return (
    <div>
        <h1>Well come to sern stack</h1>
    </div>
  )
}
