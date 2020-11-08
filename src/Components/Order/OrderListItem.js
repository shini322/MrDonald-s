import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImg from '../../images/trash.svg';

import {totalPriceItems} from '../Functions/secondatyFuction';
import {formatCurrency} from '../Functions/secondatyFuction';

const OrderItemStyled = styled.li`
    display: flex;
    align-items: center;
    margin: 15px 0 0;
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
    cursor: pointer;
`;

const ItemPrice = styled.span`
    margin: 0 20px;
    text-align: right;
    min-width: 65px;
`;

const OrderToppings = styled.div`
    font-size: 10px;
    line-height: 14px;
    color: green;
`;

const OrderListItem = ({order, deleteOrderItem, index, setOpenItem}) => {
    const toppings = order.topping.filter(item => item.checked).map(item => item.name).join(', ');
    
    const refDeleteBtn = useRef(null);
    return(
        <>
            <OrderItemStyled onClick={(e) => {
                e.target !== refDeleteBtn.current && setOpenItem({...order, index});
            }}>
                <ItemName>
                    {order.name} {order.choices}
                </ItemName>
                <span>{order.count}</span>
                <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
                <TrashBtn ref={refDeleteBtn} onClick={() => deleteOrderItem(index)}/>
            </OrderItemStyled>
            <OrderToppings>
                {toppings}
            </OrderToppings>
        </>
    )
}

export default OrderListItem;