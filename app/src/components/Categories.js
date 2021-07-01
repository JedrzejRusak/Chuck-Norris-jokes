import React from 'react'

const Categories = props => (
	<div className='categories-container'>
      <div className='categories'>
        <div className={`categories__category categories__select  ${props.category !== 'select' ? 'categories__category--dark' : ''}`} onClick={props.handleClickCategoriesActive}>{props.category === 'select' ? 'Categories' : props.category} <i className="fas fa-chevron-down"></i></div>  
            <div className='categories__select categories__option' onClick={props.handleClickCategoriesActive}>
            <div className='categories__category' id="select" onClick={props.handleClickCategories} >Select Categories <i className="fas fa-chevron-up"></i></div>
            <div className='categories__category categories__category--dark' id="explicit" onClick={props.handleClickCategories} >Explicit</div>
            <div className='categories__category categories__category--dark' id= "nerdy" onClick={props.handleClickCategories} >Nerdy</div>
        </div>
      </div>
    </div>
)

export default Categories;