import React from 'react';
import styled from 'styled-components';

const ToppingWrapper = styled.div`
    margin: 20px 0;
    padding: 0 15px;
    column-count: 2;
    column-gap: 5px;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
    &+&{
        margin-top: 10px;
    }
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const Topping = ({toppings, checkToppings}) => {
    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrapper>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox 
                        type='checkbox' 
                        checked={item.checked}
                        onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </ToppingLabel>  
                ))}
                          
            </ToppingWrapper>
        </>
    )
}

export default Topping;