import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { ITEMS } from '../../data/items';
import { Item } from '../shop/Item';
import { CartContainer,RemoveToCartBtn,PayToCartBtn, Title } from './CartStyles';

export const Cart = () => {
  const { cartItems, removeItemFromCart } = useContext(ShopContext);

  const handleClearCart = () => {
    // Sepeti temizle
    Object.keys(cartItems).forEach((itemid) => {
      removeItemFromCart(itemid);
    });
    alert("Sepet temizlendi!");
  };  

  const handlePayCart = () => {
    // Ödeme yapıldı
    Object.keys(cartItems).forEach((itemid) => {
      removeItemFromCart(itemid);
    });
    alert("Ödeme Onaylandı!");
  };  

  return (
    <div className='wrapper cart'>
      <Title>Sepet</Title>
      <CartContainer>
        {Object.keys(cartItems).map((itemid) => (
          <div key={itemid}>
            <Item {...ITEMS.find(item => item.id === Number(itemid))} />
          </div>
        ))}
      </CartContainer>
      {Object.keys(cartItems).length > 0 && (
        <>
          <RemoveToCartBtn onClick={handleClearCart}>Sepeti Temizle</RemoveToCartBtn>
          <PayToCartBtn onClick={handlePayCart}>Ödeme Yap</PayToCartBtn>
        </>
        
      )}
    </div>
  )
}
