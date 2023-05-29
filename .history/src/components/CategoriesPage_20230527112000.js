import React from 'react'
import './CategoriesPage.css';
import { useState } from 'react';
import img1 from'../Assets/image2.png'
import img2 from'../Assets/image3.png'
import img3 from'../Assets/image4.png'
import img4 from'../Assets/image6.png'
import img5 from'../Assets/image7.png'
import img6 from'../Assets/image8.png'
import img7 from'../Assets/image9.png'
import img8 from'../Assets/image10.png'
import img9 from'../Assets/image11.png'

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9,];
const styling={
  backgroundColor: '#148A08',
  borderRadius:'1.5rem',
  border:'none',
  width:'9rem',
  height:'2.5rem',
  color:'white',
  fontSize:'1.5rem',
  letterSpacing:'0.2rem',
}

function CategoriesPage(props) {
  const{categories, backgroundcolor}=props
  const [additionalButtons, setAdditionalButtons] = useState([]);
  const [minCats, setMinCats]=useState(<p style={{color:'white'}}>Select minimum 3 categories</p>);
  
  const handleButtonState = (event) => {
    const buttonText = event.target.innerText;
    const isSelected = additionalButtons.some((button) => button.key === buttonText);
  
    if (isSelected) {
      setAdditionalButtons(additionalButtons.filter((button) => button.key !== buttonText));
      event.target.style.border = 'none';
    } else {
      const newButton = <button key={buttonText} style={styling}>{buttonText}</button>;
      setAdditionalButtons([...additionalButtons, newButton]);
      event.target.style.border = '4px solid green';
    }
    if(additionalButtons.length >=2|| additionalButtons.length===-1){
      setMinCats(null);
    }
    else{
      setMinCats(<p style={{color:'white'}}>Select minimum 3 categories</p>);
    }
    localStorage.setItem('categoryItems', event.target.innerText);
  };
  
  
  
  
  
  
  
  return (
    <div className='container'>
      <div className='first-container'>
        <div className="first-first-container">
          <h1>Super App</h1>
          <h2>Choose your entertainment category</h2>
          <div style={{width:'70%'}}>
            {additionalButtons}
          </div>
          {minCats}
         
        </div>
      </div>
      <div className='second-container'>
        <div className='category-container'>
          {categories.map((category, index)=>(
            <button onClick={handleButtonState} style={{ background:'none',color:'white', backgroundColor:backgroundcolor[index], height:'10rem', width:'10rem', margin:'0.6rem', borderRadius:'1rem', fontSize:'1.7rem', fontFamily:'DM Sans', textAlign:'left',verticalAlign:'top',paddingTop:0, }} key={index}>{category} <img src={imgs[index]} alt="not found" width={140} style={{marginLeft:'0.3rem', marginTop:'1rem',}} /></button>
          ))}
          
        </div>
        <div style={{display:'flex'}}>
          
        </div>
        
      </div>
    </div>
  )
}

export default CategoriesPage