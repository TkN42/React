import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { ShopContext } from '../../context/ShopContext';
import { HeaderContainer, HeaderBar, LogoContainer, HeaderLinksContainer, StyledLink } from './HeaderStyles';

const CartButton = {
  fontSize: '24px',
  filter: 'invert(100%)'
}

export const Header = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <HeaderContainer>
      <HeaderBar>
        <LogoContainer>
          <StyledLink to='/e-commerce-react/'>E-Shop</StyledLink>
        </LogoContainer>
        <HeaderLinksContainer>
          <Link to='/e-commerce-react/cart'>
            <GrCart style={CartButton} />
            {Object.values(cartItems).reduce((acc, count) => acc + count, 0)}
          </Link>
        </HeaderLinksContainer>
      </HeaderBar>
    </HeaderContainer>
  )
}
