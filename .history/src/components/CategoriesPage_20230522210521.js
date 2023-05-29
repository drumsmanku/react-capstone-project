import React from 'react'
import './CategoriesPage.css'

function CategoriesPage(props) {
  const{categories}=props
  return (
    <div className='container'>
      <div className='first-container'>
        
      </div>
      <div className='second-container'>
        {categories.map((category, index)=>(
          <button style={{border:'none', background:'none', backgroundColor:categories.color}} key={index}>{category}</button>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage