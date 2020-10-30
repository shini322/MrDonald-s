import React from 'react';
import styled from 'styled-components';

import banner from '../../images/banner.jpg';

const BannerImg = styled.img`
    width: 100%;
`;

const BannerStyled = styled.div`
`;

const Banner = () => (
    <BannerStyled>
        <BannerImg src={banner} />
    </BannerStyled>
)

export default Banner;