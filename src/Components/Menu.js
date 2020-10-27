import React from 'react';
import styled from 'styled-components';

import Banner from './Banner';
import ListItem from './ListItem';
import dbMenu from './DBMenu';

const MenuStyled = styled.main`
    margin-top: 80px;
    background-color: #ccc;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const Menu = () => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem item={dbMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem item={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
)


export default Menu;