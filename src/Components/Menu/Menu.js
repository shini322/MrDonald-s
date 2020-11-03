import React from 'react';
import styled from 'styled-components';

import Banner from '../Menu/Banner';
import ListItem from './ListItem';
import dbMenu from '../DBMenu';

const MenuStyled = styled.main`
    margin-top: 80px;
    background-color: #ccc;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem item={dbMenu.burger} setOpenItem={setOpenItem}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem item={dbMenu.other} setOpenItem={setOpenItem}/>
        </SectionMenu>
    </MenuStyled>
)


export default Menu;