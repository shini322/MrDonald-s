import React from 'react';
import styled from 'styled-components';

import AddBtn from '../Style/AddBtn';

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
    padding: 0 15px;
    margin-top: 15px;
`;

const ModalInfoItem = styled.div`
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    line-height: 28px;
`;



const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    
    const closeModal = (e) => {
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    const order = {...openItem};

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    const {name, price, img} = openItem;
    return(
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={img}/>
                <ModalInfo>
                    <ModalInfoItem>
                        {name}
                    </ModalInfoItem>
                    <ModalInfoItem>
                        {price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'})}
                    </ModalInfoItem>                    
                </ModalInfo>
                <AddBtn onClick={addToOrder}>
                    Добавить
                </AddBtn>
            </Modal>
        </Overlay>
    )
}

export default ModalItem;