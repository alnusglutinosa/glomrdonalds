import React from 'react';
import styled from 'styled-components';
import { CountItem } from './CountItem'; 
import { useCount } from '../Hooks/useCount';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    width: 500px;
    min-height: 400px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 1px 10px 8px rgb(0 0 0 / 41%);
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    background-color: #000;
    background-image: url(${({img}) => img});
    background-position: center;    
    background-repeat: no-repeat;
    background-size: cover;
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

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

export const totalPriseItems = order => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();
    
    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
        count: counter.count
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    // if (!openItem) {
    //     return null;
    // }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            
            <Modal>
                <Banner img={openItem.img}/>
                <p>{openItem.name}</p>
                <p>{openItem.price}</p>

                <CountItem {...counter}/>

                <TotalPriceItem>
                    <span>Цена</span>
                    <span>{totalPriseItems(order)}</span>
                </TotalPriceItem>

                <Button onClick={addToOrder}>
                    Купить
                </Button>
            </Modal>
        </Overlay>
    )
};