import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Form from './components/form/Form';

const App = () => {
//   const [data, setData] = useState("")
//   const getData= async() => {
//     const res = await Axios.get("http://localhost:5000/getData");
//     setData(res.data)
//   }
//  useEffect(()=>{
//   getData()
//  },[]);
 
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App
