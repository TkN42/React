import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    box-shadow: 0 13px 18px -14px #888888;
    background: linear-gradient(to right, #FF0000, #990000);
`;

export const HeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 60px;
    margin: 0 auto;
`;

export const LogoContainer = styled.div`
    font-size: 24px;
    a {
        color: #FFFFFF;
    }
`;

export const StyledLink = styled(Link)`
     text-decoration: none;
     font-weight: 600;
     color: #000000;
`;

export const HeaderLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
`;