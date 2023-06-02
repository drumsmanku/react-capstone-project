import React from 'react'
import './CategoriesPage.css';
import {useNavigate} from 'react-router-dom';
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
  backgroundColor: '#148A08', borderRadius:'1.5rem', border:'none', width:'9rem', height:'2.5rem',color:'white',
  fontSize:'1.2rem', letterSpacing:'0.1rem', fontFamily:'DM Sans', display:'flex', alignItems:'center',
  justifyContent: 'space-around',marginLeft:0
  
}
const crossButtonStyling={
  background:'none', padding:'0', margin:'0', border:'none', fontSize:'1.5rem', width:'1rem', color:'#085C00',
}

function CategoriesPage(props) {
  const {categories, backgroundcolor}=props
  const navigate = useNavigate();
  const [additionalButtons, setAdditionalButtons] = useState([]);
  const [minCats, setMinCats]=useState(<p style={{color:'#FF0000', fontFamily:'DM Sans', fontSize:'1.3rem'}}>Minimum 3 categories required</p>);
  
  const handleButtonState = (event) => {
    const buttonText = event.target.dataset.category;
    const isSelected = additionalButtons.includes(buttonText);
  
    if (isSelected) {
      setAdditionalButtons(additionalButtons.filter((button) => button !== buttonText));
      event.target.style.border = 'none';
    } else {
      setAdditionalButtons([...additionalButtons, buttonText]);
      event.target.style.border = '4px solid green';
    }
  
    if (additionalButtons.length >= 2) {
      setMinCats(null);
    } else {
      setMinCats(
        <p style={{ color: '#FF0000', fontFamily: 'DM Sans', fontSize: '1.3rem' }}>
          Minimum 3 categories required
        </p>
      );
    }
  
    localStorage.setItem('categoryItems', event.target.innerText);
  };
  
  
  const removeButton = (event, buttonText) => {
    setAdditionalButtons(additionalButtons.filter((button) => button !== buttonText));
    const categoryButton = document.querySelector(`button[data-category="${buttonText}"]`);
    if (categoryButton) {
      categoryButton.style.border = 'none';
    }
    localStorage.removeItem('categoryItems');
  };
  
  const routeFunc=(event)=>{
    if(additionalButtons.length<3){
      event.preventDefault();
    }
    else{
      navigate('/weather')
    }
  }
  
  
  
  
  return (
    <div className="container">
      <div className="first-container">
        <div className="first-first-container">
          <h1>Super App</h1>
          <h2>Choose your entertainment category</h2>
          <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            {additionalButtons.map((buttonText) => (
              <button key={buttonText} style={styling}>
                {buttonText}
                <button
                  onClick={(event) => removeButton(event, buttonText)}
                  style={crossButtonStyling}
                >
                  x
                </button>
              </button>
            ))}
          </div>

          {minCats}
        </div>
      </div>
      <div className="second-container">
        <div className="category-container">
          {categories.map((category, index) => (
            <button
              onClick={handleButtonState}
              data-category={category}
              style={{
                background: "none",
                color: "white",
                backgroundColor: backgroundcolor[index],
                height: "10rem",
                width: "10rem",
                margin: "0.6rem",
                borderRadius: "1rem",
                fontSize: "1.7rem",
                fontFamily: "DM Sans",
                textAlign: "left",
                paddingBottom: "7rem",
                verticalAlign: "top",
                paddingTop: 0,
                backgroundImage: `url(${imgs[index]})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 80%",
                backgroundSize: "90%",
                border:'none'
              }}
              key={index}
            >
              {category}{" "}
            </button>
          ))}
          <div style={{ display: "flex"}}>
          <button onClick={routeFunc} style={{backgroundColor:'#148A08', borderRadius:'1.5rem', border:'none', width:'9rem',height:'2.5rem',color:'white', fontSize:'1.2rem', letterSpacing:'0.1rem', fontFamily:'DM Sans', zIndex:999, position:'absolute', right:'7.4rem', marginTop:'1rem'}}>Next</button>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage