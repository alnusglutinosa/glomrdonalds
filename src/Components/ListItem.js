import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 150px;
    background-image: ${({ img }) => `url(${ img })`};
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    color: white;
    z-index: 1;
    &:after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        opacity: 30%;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 50px 30px black;
        &:after{
            opacity: 0;
        }
    }
`;

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;


export const ListItem = ({ itemList }) => (
    <List>
        {itemList.map(item => (
            <Item
                key = {item.id}
                img = {item.img}>
                <p>{item.name}</p>
                <p>{item.price.toLocaleString('ru-Ru',
                    {style: 'currency', currency: 'RUB'})}</p>
                     <img src={`../../images${item.img}`} alt="logo" />
            </Item>
            )
        )}
    </List>
);