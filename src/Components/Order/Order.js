import React from 'react';
import styled from 'styled-components';

import AddBtn from '../Style/AddBtn';
import OrderListItem from './OrderListItem';

const OrderStyled = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 380px;
    width: 100%;
    height: calc(100% - 80px);
    top: 80px;
    /* right: calc(100%); */
    background-color: #fff;
    z-index: 100;
`;

const OrderTitle = styled.h2`
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
    display: flex;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
    span{
        &:first-child{
            flex-grow: 1;
        }
    }
`;

const TotalPrice = styled.span`
    min-width: 65px;
    text-align: right;
`;

const EmptyList = styled.p`
    text-align: center;
`;

const Order = ({orders}) => {
    return(
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                <OrderList>
                    {orders.map((order) => <OrderListItem key={order.id} order={order}/>)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850</TotalPrice>
            </Total>
            <AddBtn>Оформить</AddBtn>
        </OrderStyled>
    )
}

export default Order;