import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'
import './styles/orderByPrice.css'

const OrderByPrice = () => {

  const dispatch = useDispatch()

  const handleAscending = () => {
    dispatch(ascendingProducts())
  }

  const handleDescending = () => {
    dispatch(descendingProducts())
  }

  return (
    <div className='orderByPrice'>
      <h3 className='orderByPrice__title'>Order</h3>
      <div className='orderByPrice__btn'>
        <button onClick={handleAscending} className='order__btn'>Ascending ⇧</button>
        <button onClick={handleDescending} className='order__btn'>Descending ⇩</button>
      </div>
    </div>
  )
}

export default OrderByPrice