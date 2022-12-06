import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const from = +e.target.from.value
    const to = +e.target.to.value
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity
    }
    setFilterByPrice(obj)
  }

  return (
    <form className='filterPrice' onSubmit={handleSubmit}>
      <h3 className='filterPrice__title'>Price</h3>
      <div className='filterPrice__div'>
        <label htmlFor="from">From</label>
        <input type="number" id='from' />
      </div>
      <div className='filterPrice__div'>
        <label htmlFor="to">To</label>
        <input type="number" id='to' />
      </div>
      <button className='filter-price__btn'>Filter price</button>
    </form>
  )
}

export default FilterPrice