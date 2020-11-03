import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SideBar = ({title, boxshadow, children, width, backgroundColor}) => {

    const Wrapper = styled.aside`
        position: relative;
        width: ${width};
        background: ${backgroundColor};

        ${boxshadow === true && 
            `
            &:after{
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
    `;
    
    const Header = styled.header`
        padding: 20px;
        background-color: #222;
        color: #eee;
        font-weight: 900;
        font-size: 1.2em;
        text-transform: lowercase;
    `;

    const Section = styled.div`
        padding: 10px 0;
    `;

    return (
        <Wrapper>
            {title && <Header>{title}</Header>}
            <Section>{children}</Section>
        </Wrapper>
    )
};

SideBar.propTypes = {
    title: PropTypes.string,
    boxshadow: PropTypes.bool,
    children: PropTypes.element,
    width: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    hoverColor: PropTypes.string
};

SideBar.defaultProps = {
    boxshadow: true,
    width: "350px",
    backgroundColor: "white",
}