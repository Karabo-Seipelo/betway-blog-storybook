import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Article = ({backgroundColor, dropshadow, children}) => {
    const Wrapper = styled.article`
        position: relative;
        background-color: #fff;
        padding: 20px 20px 0;

        @media (min-width: 1024px) {
            .article {
                margin-right: 20px;
                padding: 60px 160px 20px;
            }
        }

        ${dropshadow === true && 
            `
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                transform: translateZ(0);
                backface-visibility: hidden;
                box-shadow: 3px 3px 2px #000;
                box-shadow: 3px 3px 2px rgba(0,0,0,.1);
                transition: box-shadow .3s ease-out;
                display: block;
            }
            `
        }

    `;

    return (<Wrapper style={backgroundColor && {backgroundColor}} {...props}>{children}</Wrapper>)
};