import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
`;

const ButtonCount = styled.button`
    background-color: transparent;
`;


export function CountItem({ count, setCount,  onChange }) {

    return (
        <CountWrapper>
            <span>Количество</span>

            <div className="count-item__counter">
                <ButtonCount disabled={ count <=1 } onClick={() => setCount(count - 1)}>-</ButtonCount>
                    <CountInput onChange={onChange} value={count < 1 ? 1 : count} type='number' min='1' max='100' onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    )
}