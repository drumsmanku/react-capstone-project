import React from "react";
import './TestComponent.css';
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
const categories=['Action', 'Drama','Romance','Thriller','Western','Horror','Fantasy', 'Music','Fiction',];
const colors=['#FF5209', '#D7A4FF','#148A08','#84C2FF','#902500','#7358FF','#FF4ADE','#E61E32','#6CD061',];

function TestComponent() {
  return (
    <div className="container">
      <div className="first-container">
        <div className="first-first-container">
          <h1>Super App</h1>
          <h2>Choose your entertainment category</h2>
          <div style={{ width: "70%" }}></div>
        </div>
      </div>
      <div className="second-container">
        <div className="category-container">
        <button  style={{ background:'none',color:'white', backgroundColor:colors[0], height:'10rem', width:'10rem', margin:'0.6rem', borderRadius:'1rem', fontSize:'1.7rem', fontFamily:'DM Sans', textAlign:'left',verticalAlign:'top',paddingTop:0, }} >{categories[0]} <img src={imgs[0]} alt="not found" width={140} style={{marginLeft:'0.3rem', marginTop:'1rem'}} /></button>
        </div>
        <div style={{ display: "flex" }}></div>
      </div>
    </div>
  );
}

export default TestComponent;
