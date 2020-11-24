import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Tag = ({backgroundColor, fontColor, boxShadow, title, headerColor, tags}) => {
    const Button = styled.a`
        position: relative;
        text-transform: uppercase;
        font-size: 1.1em;
        line-height: 1.7em;
        font-weight: 900;
        display: inline-block;
        float: left;
        margin: 0 5px 5px 0;
        padding: 0 20px;
        transition: all .3s ease-out;
        color: ${fontColor};

        &:hover {
            text-decoration: none;
        }

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
    `;

    const Link = styled(Button)`
        background-color: ${backgroundColor};
        border: 2px solid ${backgroundColor};

        &:hover {
            background-color: ${fontColor};
            color: ${backgroundColor};
            transition: all .2s ease-out;
            cursor: pointer;
        }
    `;

    const Header = styled(Button)`
        background-color: ${headerColor};
        border: 2px solid ${headerColor}; 

        &:hover {
            cursor: inherit;
            color: ${fontColor};
        }
    `;

    const Wrapper = styled.ul`
        display: block;
        list-style: none;
        padding: 0;
        margin: 1em 0;
        li {
            display: inline-block;
        }
    `;

    return (
        <Wrapper>
            <li>
                <Header href="#">
                    <span>{title}</span>
                </Header>
            </li>
            {tags && tags.map(({name, url}, index) => {
                return (
                    <li key={index}>
                        <Link href={url}>
                            <span>{name}</span>
                        </Link>
                    </li>
                )
            })}
        </Wrapper>
    )
};

Tag.proptypes = {
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    boxShadow: PropTypes.bool,
    title: PropTypes.string.isRequired,
    headerColor: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    }))
}

Tag.defaultProps = {
    boxShadow: true,
    backgroundColor: "#81C341",
    fontColor: "white",
    title: "tags",
    headerColor: "black"
}