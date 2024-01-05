import React, { useContext } from 'react'
import { ItemContainer, ImageContainer, TextContainer, IDContainer, NameContainer, PriceContainer, AddToCartBtn,RemoveToCartBtn, ItemsCounter } from './ItemStyles'
import { ShopContext } from '../../context/ShopContext'

export const Item = ({ id, itemName, price, itemImage }) => {
  const { addItemToCart, removeItemFromCart, updateCartItemCount, cartItems } = useContext(ShopContext);

  const handleRemoveFromCart = () => {
    removeItemFromCart(id);
  }

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={itemImage} alt={itemName} width="200" height="280" />
      </ImageContainer>
      <IDContainer>ID: {id}</IDContainer>
      <TextContainer>
        <NameContainer>{itemName}</NameContainer>
        <PriceContainer>Cena: <strong>${price.toFixed(2)}</strong></PriceContainer>
        <ItemsCounter onChange={e => updateCartItemCount(Number(e.target.value), id)}>{cartItems[id]}</ItemsCounter>
      </TextContainer>
      <div>
        <AddToCartBtn onClick={() => addItemToCart(id)}>Sepete Ekle</AddToCartBtn>
        {/* {cartItems[id] > 0 && (
          <RemoveToCartBtn onClick={() => handleRemoveFromCart(id)}>Sepetten Çıkar</RemoveToCartBtn>
          // <button onClick={handleRemoveFromCart}>Sepetten Çıkar</button>
        )} */}
      </div>
    </ItemContainer>
  )
}
