import React from 'react'
import './styles/cardPurchase.css'

const CardPurchase = ({purchase}) => {

  const date = purchase.updatedAt.split('T')
  const arrDate = date[0]

  Object.hasOwnProperty()
  return (
    <article className='cardPurchase'>
      <header className='cardPurchase__date'>{arrDate}</header>
      <div className='cardPurchase__cart'>
        {
          purchase.cart.products.map(product => (
            <section className='cardPurchase__cart-products' key={product.id}>
              <h3>{product.title}</h3>
              <div>
                <div>{product.productsInCart.quantity}</div>
              </div>
              <div>${product.price}</div>
            </section>
          ))
        }
      </div>
    </article>
  )
}

export default CardPurchase