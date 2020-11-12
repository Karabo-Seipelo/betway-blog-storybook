import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const HeadLine = ({children}) => {
    const Text = styled.h1`
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        margin: 0 0 20px;   
    `;

    return (
        <Text>{children}</Text>
    )
};

export const TeaserText = ({children}) => {
    const Text = styled.h1`
        font-weight: 900;
        font-size: 22px;
        line-height: 24px;
        margin: 0;   
    `;

    return (
        <Text>{children}</Text>
    )
};

export const BodyText = ({children}) => {
    const Text = styled.div`
        font-size: 18px;
        line-height: 26px;
        margin: 0;   
    `;

    return (
        <Text>{children}</Text>
    )
};