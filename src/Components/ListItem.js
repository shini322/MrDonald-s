import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-around;
`;

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    font-size: 22px;
    line-height: 26px;
    margin: 25px;
    padding: 15px;
    overflow: hidden;
    color: #fff;
    z-index: 1;
    cursor: pointer;
    &::after{
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: #000;
        opacity: .3;
        z-index: -1;
        box-shadow: 0 0 50px 30px rgba(0,0,0, 0,3);
    }
    &:hover{
        img{
            transform: scale(1.2)
        }
    }
`;

const ItemImg = styled.img`
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    transition: .3s;
`;

const ListItem = ({item}) => {
    return(  
        <List>
            {item.map(item => {
                const {name, img, id, price, toppings} = item;
                return(
                    <Item key={id} img={img}>
                        <ItemImg src={img} alt="img"/>
                        <p>{name}</p>
                        <p>{price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'})}</p>
                    </Item>
                )
            })}
        </List>
    )
}


export default ListItem;