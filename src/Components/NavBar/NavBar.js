import React from 'react';
import styled from 'styled-components';
import logoImg from '../../images/logo.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: #fff;
`;

const Logo = styled.div`
    display: flex;
`;

const H1 = styled.h1`
    display: block;
    padding-right: 10px;
    padding-left: 10px;
`;

const ImgLogo = styled.img`
    display: block;
    width: 50px;
`;

const Button = styled.button`
    background-color: #ffb632;
    border-radius: 4px;
    color: #030906;
    padding: 8px 28px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    outline: none;
    box-shadow: 1px 1px 6px rgb(51 51 51 / 56%);
`;


export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>MrDonald's</H1>
        </Logo>

        <Button>Войти</Button>
    </NavBarStyled>  
)