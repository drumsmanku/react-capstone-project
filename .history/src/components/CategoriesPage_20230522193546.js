import React from 'react'
import './CategoriesPage.css'

function CategoriesPage(props) {
  const{categories}=props
  return (
    <div className='container'>
      <div className='first-container'>
        
      </div>
      <div className='second-container'>
        {props.categories.map((category, index)=>(
          <button key={index}>{category}</button>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage