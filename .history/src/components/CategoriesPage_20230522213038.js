import React from 'react'
import './CategoriesPage.css'

function CategoriesPage(props) {
  const{categories, backgroundcolor}=props
  return (
    <div className='container'>
      <div className='first-container'>
        
      </div>
      <div className='second-container'>
        {categories.map((category, index)=>(
          <button style={{border:'none', background:'none',color:'white', backgroundColor:backgroundcolor, height:'9.3rem', width:'9.3rem'}} key={index}>{category}</button>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage