import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    border-width: 1px;
    padding: 0 5px;
`;

const BtnCount = styled.button`
    background-color: transparent;
    font-size: 20px;
    width: 26px;
    height: 26px;
    border: 1px solid #000;
`;

const CountItem = ({count, setCount, onChange}) => {
    return(
        <CountWrapper>
            <span>Количество</span>
            <div>
                <BtnCount disabled={count <= 1} onClick={() => setCount(+count - 1)}>-</BtnCount>
                <CountInput type='number' min='1' max='10' value={count < 1 ? 1 : count > 10 ? 10 : count} onChange={onChange}/>
                <BtnCount disabled={10 <= count} onClick={() => setCount(+count + 1)}>+</BtnCount>
            </div>
        </CountWrapper>
    )
}

export default CountItem;