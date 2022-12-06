import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import './styles/filterCategory.css'

const FilterCategory = () => {

  const [categories, setCategories] = useState()

  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])

  const dispatch = useDispatch()

  const handleFetchCategory = id => {
    if (id) {
      dispatch(getProductsByCategory(id))
    } else {
      dispatch(getAllProducts())
    }
  }

  return (
    <article className='filterCategory'>
      <h3>Category</h3>
      <ul>
        <li onClick={() => handleFetchCategory()}>All Products</li>
        {
          categories?.map(category => (
            <li key={category.id} onClick={() => handleFetchCategory(category.id)}>{category.name}</li>
          ))
        }
      </ul>
    </article>
  )
}

export default FilterCategory