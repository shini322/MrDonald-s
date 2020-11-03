import React from 'react';
import styled from 'styled-components';

import AddBtn from '../Style/AddBtn';
import OrderListItem from './OrderListItem';

import {totalPriceItems} from '../Functions/secondatyFuction';
import {formatCurrency} from '../Functions/secondatyFuction';
import useToppings from '../Hooks/useToppings';

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
    margin-top: 20px;
    span{
        &:first-child{
            flex-grow: 1;
        }
    }
`;

const TotalPrice = styled.span`
    min-width: 65px;
    text-align: right;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

const Order = ({orders}) => {

    const total = orders.reduce((res, order)=>{
        return totalPriceItems(order) + res;
    }, 0);

    const totalCounter = orders.reduce((res, order)=>{
        return order.count + res;
    }, 0);

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
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <AddBtn>Оформить</AddBtn>
        </OrderStyled>
    )
}

export default Order;