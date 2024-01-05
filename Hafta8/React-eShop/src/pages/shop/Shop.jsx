import React from 'react'
import { ShopTitle, ShopProducts } from './ShopStyles'
import { ITEMS } from './../../data/items'
import { Item } from './Item'

export const Shop = () => {
  return (
    <div className='wrapper shop'>
      <ShopTitle>
        <h1>Kitaplar</h1>
      </ShopTitle>
      <ShopProducts>
        {ITEMS.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ShopProducts>
    </div>
  )
}