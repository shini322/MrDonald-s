import React from 'react';
import styled from 'styled-components';

import logoImg from '../images/logo.svg';
import loginImg from  '../images/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: #fff;
`;

const Logo = styled.a`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    line-height: 28px;
    margin-left: 16px;
`;

const ImgLogo = styled.img`

`;

const Login = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
`;

const LoginImg = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 3px;
`;

const NavBar = () => {
    return(
        <NavBarStyled>
            <Logo href='/'>
                <ImgLogo src={logoImg} alt="Logo"/> 
                <H1>MrDonald's</H1> 
            </Logo>
            <Login>
                <LoginImg src={loginImg} alt="Login Img"/>
                Войти
            </Login>
        </NavBarStyled>
    )
};

export default NavBar;