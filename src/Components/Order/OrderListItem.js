import React from 'react';
import styled from 'styled-components';
import trashImg from '../../images/trash.svg';

const OrderItemStyled = styled.li`
    display: flex;
    align-items: center;
    margin: 15px 0;
`;

const TrashBtn = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin: 0 20px;
    text-align: right;
    min-width: 65px;
`;

const ItemTotal = styled.span`
    
`;

const OrderListItem = ({order}) => {
    return(
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <ItemTotal>1</ItemTotal>
            <ItemPrice>{order.price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'})}</ItemPrice>
            <TrashBtn/>
        </OrderItemStyled>
    )
}

export default OrderListItem;