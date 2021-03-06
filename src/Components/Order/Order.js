import React from 'react';
import styled from 'styled-components';
import { OrderListItem } from './OrderListItem';
import { totalPriseItems } from '../Modal/ModalItem';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const OrderTitle = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;

const OrderContent = styled.div`
    width: 100%;
    flex-grow: 1;
`;

const OrderList = styled.div`
    
`;

const EmptyList = styled.div`
    text-align: center;
    color: #777;
`;

const Total = styled.div`
    text-align: center;
    display: flex;
`;

const Button = styled.button`
    background-color: #ffb632;
    border-radius: 4px;
    color: #030906;
    padding: 8px 28px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    outline: none;
    box-shadow: 1px 1px 6px rgb(51 51 51 / 56%);
`;

export const Order = ({orders}) => {

    const total = orders.reduce((result, order)=>
        totalPriseItems(order) + result, 0)
    

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                    <OrderList>
                        {orders.map(order => <OrderListItem key={order.name} order={order}/>)}
                        
                    </OrderList> : 
                <EmptyList>СписокЗаказов пуст</EmptyList>
            }
            </OrderContent>

            <Total>
                <span>Итого</span>
                <span>{total}</span>
                <span>P</span>
            </Total>
            <Button>Заказать</Button>
        </OrderStyled>
    )
}