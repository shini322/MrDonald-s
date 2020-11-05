import React from 'react';
import styled from 'styled-components';

import AddBtn from '../Style/AddBtn';
import CountItem from './CountItem';
import useCount from '../Hooks/useCount';
import Topping from './Toppings';
import Choices from './Choices';

import {totalPriceItems} from '../Functions/secondatyFuction';
import {formatCurrency} from '../Functions/secondatyFuction';
import useToppings from '../Hooks/useToppings';
import useChoices from '../Hooks/useChoices';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 20;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({img}) => img} );
    background-size: cover;
    background-repeat: no-repeat;
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const ModalInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

const ModalInfoItem = styled.div`
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    line-height: 28px;
`;

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const {name, price, img} = openItem;

    const counter = useCount();
    const toppings = useToppings(openItem);

    const choices = useChoices(openItem);

    const closeModal = (e) => {
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choices: choices.choices,
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }
    
    return(
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={img}/>
                <ModalWrapper>
                    <ModalInfo>
                        <ModalInfoItem>
                            {name}
                        </ModalInfoItem>
                        <ModalInfoItem>
                            {formatCurrency(price)}
                        </ModalInfoItem>                    
                    </ModalInfo>
                    <CountItem {...counter}/>                    
                    {openItem.toppings && <Topping {...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem} />}
                    <TotalPriceItem>
                        <span>Цена: </span>
                        <span>{formatCurrency(totalPriceItems(order))}
                        </span>
                    </TotalPriceItem>
                </ModalWrapper>
                <AddBtn 
                onClick={addToOrder}
                disabled={openItem.choices && !order.choices}>
                    Добавить
                </AddBtn>
            </Modal>
        </Overlay>
    )
    
}


// export default ModalItem;
