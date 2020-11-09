import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Tag = ({backgroundColor, fontColor, boxShadow, href, tagName, header, headerColor}) => {
    const Wrapper = styled.a`
        position: relative;
        text-transform: uppercase;
        font-size: 1.1em;
        line-height: 1.7em;
        font-weight: 900;
        display: inline-block;
        float: left;
        margin: 0 5px 5px 0;
        padding: 0 20px;
        background-color: ${header ? headerColor : backgroundColor};
        border: 2px solid ${header ? headerColor : backgroundColor};
        transition: all .3s ease-out;
        color: ${fontColor};

        ${boxShadow === true && 
            `
                &:after {
                    content: "";
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
        ${!header && 
            `
            &:hover {
                background-color: ${fontColor};
                color: ${backgroundColor};
                transition: all .2s ease-out;
                cursor: pointer;
            }
            `
        }
        
    `;

    return (
        <Wrapper href={href}>
            <span>{tagName}</span>
        </Wrapper>
    )
};

Tag.proptypes = {
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    boxShadow: PropTypes.bool,
    href: PropTypes.string,
    tagName: PropTypes.string,
    header: PropTypes.bool,
    headerColor: PropTypes.string,
}

Tag.defaultProps = {
    boxShadow: true,
    backgroundColor: "red",
    fontColor: "white",
    href: null,
    header: false,
    headerColor: "black"
}