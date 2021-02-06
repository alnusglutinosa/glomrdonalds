import React from 'react';
import styled from 'styled-components';


const OrderItemStyled = styled.li`
    display: flex;
    justify-content: space-between;
`;

const TrashButton = styled.button`
    background-color: #ffb632;
    border-radius: 4px;
    color: #030906;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 400;
    border: none;
    outline: none;
    box-shadow: 1px 1px 6px rgb(51 51 51 / 56%);
    cursor: pointer;
`;

export const OrderListItem = ({order}) => {
    return (
        <OrderItemStyled>
            <span>{order.name}</span>
            <span>{order.price}</span>
            <span>750 P</span>
            <TrashButton>bue</TrashButton>
        </OrderItemStyled>
    )
}