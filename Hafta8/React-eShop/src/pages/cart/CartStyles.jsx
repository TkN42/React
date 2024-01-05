import styled from "styled-components"

export const Title = styled.h1`
    display: flex;
    justify-content: center;
`;

export const CartContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const RemoveToCartBtn = styled.button`
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    width: calc(50% - 5px); 
    height: 40px;
    z-index: 1;
    border: none;
    background-color: #1e90ff;
    color: #FFFFFF;
    font-weight: 600;
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    margin-right: 10px; 
    display: inline-block;
`;

export const PayToCartBtn = styled.button`
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    width: calc(50% - 5px); 
    height: 40px;
    z-index: 1;
    border: none;
    background-color: #3cb371;
    display: inline-block;
    color: #FFFFFF;
    font-weight: 600;
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
`;

