import React from 'react'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <p className='greeting-prop'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer