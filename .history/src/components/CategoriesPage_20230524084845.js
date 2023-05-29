import React from 'react'
import './CategoriesPage.css'

function CategoriesPage(props) {
  const{categories, backgroundcolor}=props
  return (
    <div className='container'>
      <div className='first-container'>
        
      </div>
      <div className='second-container'>
        <div className='category-container'>
          {categories.map((category, index)=>(
            <button style={{border:'none', background:'none',color:'white', backgroundColor:backgroundcolor[index], height:'9.3rem', width:'9.3rem', margin:'0.6rem', borderRadius:'1rem'}} key={index}>{category}</button>
          ))}
        </div>
        <div>
          {/* next page button */}
        </div>
        
      </div>
    </div>
  )
}

export default CategoriesPage