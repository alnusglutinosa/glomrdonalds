import styled from 'styled-components';
import bannerImg from '../../images/banner.png';

export const Banner = styled.div`
    width: 100%;
    height:200px;
    background-image: url(${ bannerImg });
    background-position: center;    
    background-repeat: no-repeat;
    background-size: cover;
`;

// import React from 'react';
// import styled from 'styled-components';

// const DivBanner =  styled.div`
//     background-image:  ${({ img }) => `url(${ img })`};
//     background-position: center;    
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 100%;
//     height:210px
// `;

// export const Banner = () => (
//     <DivBanner img = '/banner.png'/>
// )