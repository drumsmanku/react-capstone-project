import React from 'react';
import './BrowseCategories.css';
import avatar from '../Assets/image14.png'
import { useState,useEffect } from 'react';

function BrowseCategories() {
  
  const[catState, setCatState]=useState(null)

  
  useEffect(()=>{
    const categoryData = localStorage.getItem("categoryItems");
    if(categoryData){
      const finalCatData=JSON.parse(categoryData);
      setCatState(finalCatData);
      console.log(catState)
    }
  },[])
  

  return (
    <div className='container-b'>
      <div className="header">
        <h1>Super App</h1>
        <div className="avatar" style={{backgroundImage:`url:${avatar}`,backgroundRepeat: "no-repeat",backgroundSize: "40rem",}}>
          hey
        </div>
      </div>
      <div className="body-container">
        <div className="main-elements">
          <h1>Entertainment according to your choice</h1>
          <div className="category-elements-b">
            wow
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseCategories