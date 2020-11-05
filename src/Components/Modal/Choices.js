import React from 'react';
import styled from 'styled-components';

const ChoicesWrapper = styled.div`
    margin: 20px 0;
    padding: 0 15px;
    column-count: 2;
    column-gap: 5px;
`;
const ChoicesRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;
const ChoicesLabel = styled.label`
    cursor: pointer;
    display: block;
    &+&{
        margin-top: 10px;
    }
`;

const Choices = ({choices, changeChoices, openItem}) => {
    return(
        <ChoicesWrapper>
                {openItem.choices.map((item, i) => (
                    <ChoicesLabel key={i}>
                        <ChoicesRadio 
                        type='radio'
                        name='choices'
                        checked={choices === item}
                        value={item}
                        onChange={changeChoices}
                        />
                        {item}
                    </ChoicesLabel>  
                ))}
                          
            </ChoicesWrapper>
    )
}

export default Choices;