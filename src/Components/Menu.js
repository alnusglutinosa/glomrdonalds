import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import dbMenu from './DBMenu'
import { Banner } from './Banner'


const MenuStyled = styled.main`
    margin-top: 80px;
    backgrond-color: #ccc;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>  
            <ListItem
                itemList = { dbMenu.burger }
                setOpenItem={setOpenItem}
            />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / напитки</h2>  
            <ListItem
                itemList = { dbMenu.other }
                setOpenItem={setOpenItem}
            />
        </SectionMenu>

    </MenuStyled>
);