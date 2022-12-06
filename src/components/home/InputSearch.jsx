import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({inputText, setInputText}) => {

  const handleChange = e => {
    setInputText(e.target.value)
  }

  return (
    <div className='input-search'>
      <input placeholder='What are you looking for?' value={inputText} onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch