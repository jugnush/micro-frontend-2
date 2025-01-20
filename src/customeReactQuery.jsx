import React, { useEffect } from 'react';
import axios from 'axios';
function CustomeReactQuery(urlPath) {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
  
  // basic way of fetching data----------------------------------
  //  const fetchData =  async ()=>{
  //  try{
  //   const res = await fetch('https://fakestoreapi.com/products')
  //   setData(await res.json())
  //  } catch(err){
  //    console.log(err)
  //  }
  // }
  
  // useEffect(()=>{
  //   fetchData();
  // },[]);
  // end basic way of fetching data----------------------------------
  
  // covering edge  way of fetching data----------------------------------
  const fetchData =  async ()=>{
    try{  
      setLoading(true)
      setError(false)
     const res = await axios.get(urlPath)
     setData(res.data)
     setLoading(false)
    } catch(err){
      setError(true)
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchData()
  },[]);
  return [data, error, loading]
}

export default CustomeReactQuery