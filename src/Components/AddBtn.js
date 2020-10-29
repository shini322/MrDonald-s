import React from 'react';
import styled from 'styled-components';

const AddBtn = styled.button`
    position: relative;
    display: block;
    margin: auto auto 30px;
    padding: 20px 15px;
    max-width:  250px;
    width: 100%;
    font-size: 21px;
    line-height: 25px;
    color: #fff;
    transition: .3s;
    border: 2px solid rgba(41,155,1, 1);
    z-index: 100;
    &::after{
        content: '';
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        transition: .3s;
    }
    &::after{
        background-color: rgba(41,155,1, 1);
        width: 100%;
        z-index: -1;
    }
    &:hover{
        color: rgba(41,155,1, 1);
        &::after{
            width: 0;
        }
    }
`;

export default AddBtn;