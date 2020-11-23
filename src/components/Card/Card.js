import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, ICONS } from '../Icon/Icon';

export const APPEARANCES = {
    FEATURED: 'featured',
    DEFAULT: 'default',
    THUMB: 'thumb',
    MINI: 'mini',
};

export const Card = ({backgroundColor, title, teaser, category, author, appearance, boxshadow, icon, width}) => {

    const Wrapper = styled.div`
        background-color: ${backgroundColor};
        position: relative;

        ${appearance === APPEARANCES.MINI && 
            `
                width: 100%;
                height: 100px;
            `
        }

        @media (min-width: 1024px) {
            cursor: pointer;
            overflow: hidden;

            ${boxshadow === true && 
                `
                animation-duration: 600ms;
                animation-fill-mode: backwards;
                animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                transition: box-shadow 800ms, -webkit-box-shadow 800ms;
                box-shadow: 0 2px 2px 0 rgba(77,77,79,0.08), 0 0 2px 0 rgba(77,77,79,0.16);
                `
            }

            

            ${appearance === APPEARANCES.FEATURED && 
                `
                    width: ${width ? width : `1152px`};
                    height: 320px;
                `
            }

            ${appearance === APPEARANCES.THUMB && 
                `
                    background: ${backgroundColor};
                    width: ${width ? width : `215px`};
                    height: 300px;
                `
            }


            ${appearance === APPEARANCES.DEFAULT && 
                `
                    background: ${backgroundColor};
                    width: ${width ? width : `270px`};
                    height: 300px;
                `
            }

            ${appearance === APPEARANCES.MINI && 
                `
                    width: ${width ? width : `100%)`};
                    padding: 10px 20px;
                `
            }
        }
        

        &:hover {
            ${boxshadow === true &&    
                `
                @media (min-width: 1024px) {

                    ${appearance !== APPEARANCES.MINI && 
                        `
                        box-shadow: 0 6px 15px 0 rgba(0,0,0,0.1);
                        `
                    }
                }
                `
            }
        }
    `;

    const ThumbNail = styled.div`
            background: rgba(0,0,0,.1);
            display: inline-block;
            position: relative;
            float: left;

            ${appearance === APPEARANCES.MINI && 
                `
                    width: 40%;
                    height: 100%;
                `
            }
        
            @media (min-width: 1024px) {
                ${appearance === APPEARANCES.FEATURED && 
                    `
                        width: 50%;
                        height: 100%;
                    `
                }

                ${appearance === APPEARANCES.THUMB && 
                    `
                        width: 100%;
                        height: 50%;
                        float: none;
                        margin-right: 0;
                    `
                }
    
                ${appearance === APPEARANCES.DEFAULT && 
                    `
                        width: 100%;
                        height: 50%;
                        float: none;
                        margin-right: 0;
                    `
                }
            }

    `;

    const Content = styled.div`
            position: relative;
            display: inline-block;

            ${appearance === APPEARANCES.MINI && 
                `
                width: 60%;
                height: 100%;
                padding: 25px 5px 5px 5px;
                `
            }

            @media (min-width: 1024px) {
                position: relative;
                
                
                ${appearance === APPEARANCES.FEATURED && 
                    `
                        float: left;
                        width: 50%;
                        height: 100%;
                        padding: 20px;
                    `
                }

                ${appearance === APPEARANCES.THUMB && 
                    `
                        width: 100%;
                        height: 50%;
                        padding: 20px;
                    `
                }
    
                ${appearance === APPEARANCES.DEFAULT && 
                    `
                        width: 100%;
                        height: 50%;
                        padding: 20px;
                    `
                }

                ${appearance === APPEARANCES.MINI && 
                    `
                    padding: 20px 20px 50px;
                    `
                }
            }
    `;

    const ContentHeader = styled.div``;

    const Title = styled.h1`
            font-size: 18px;
            line-height: 1.1em;
            vertical-align: baseline;
            display: inline;
        
            @media (min-width: 1024px) {
                
                font-weight: bold;

                ${appearance === APPEARANCES.FEATURED && 
                    `
                    font-size: 28px;
                    display: inline;
                    `
                }

                ${appearance === APPEARANCES.THUMB && 
                    `
                    font-size: 16px;
                    display: inline-block;
                    margin: 0;
                    `
                }

                ${appearance === APPEARANCES.DEFAULT && 
                    `
                    font-size: 16px;
                    display: inline-block;
                    margin: 0;
                    `
                }

                ${appearance === APPEARANCES.MINI && 
                    `
                    font-size: 14px;
                    display: inline-block;
                    margin: 0;
                    `
                }
            }

    `;

    const Teaser = styled.h2`
            display: none;
        
            @media (min-width: 1024px) {
                font-size: 22px;
                margin-top: 20px;

                ${appearance === APPEARANCES.FEATURED && 
                    `
                        display: block;
                    `
                }
            }
    `;

    const CreatedDate = styled.div`

        ${appearance === APPEARANCES.FEATURED && 
            `
            position: absolute;
            font-size: 18px;
            width: 70px;
            height: 70px;
            padding: 10px;
            top: 0;
            left: 0;
            background-color: #81C341;
            z-index: 1;
            font-weight: 900;
            color: #fff;
            text-align: center;

            span {
                display: block;
            }
            `
        }

        ${appearance === APPEARANCES.THUMB && 
            `
            display: inline-block;
            `
        }

        ${appearance === APPEARANCES.DEFAULT && 
            `
            display: inline-block;
            `
        }

        ${appearance === APPEARANCES.MINI && 
            `
            display: inline-block;
            `
        }
    `;

    const MediaIcon = styled.div`
            
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(255, 255, 255, .9);
            z-index: 1;

            ${appearance === APPEARANCES.FEATURED && 
                `
                width: 64px;
                height: 64px;
                padding: 10px;
                `
            }

            ${appearance === APPEARANCES.THUMB && 
                `
                width: calc(50px - 20px);
                height: calc(50px - 20px);
                padding: 10px;
                `
            }

            ${appearance === APPEARANCES.DEFAULT && 
                `
                width: calc(50px - 20px);
                height: calc(50px - 20px);
                padding: 10px;
                `
            }

            @media (min-width: 834px) {
                ${appearance === APPEARANCES.FEATURED && 
                    `
                    vertical-align: unset;
                    `
                }
            }
            
            @media (min-width: 768px) {
                ${appearance === APPEARANCES.FEATURED && 
                    `
                    width: calc(64px - 20px);
                    height: calc(64px - 20px);
                    `
                }
                text-align: center;
            }
    `;

    const New = styled.div`
            background-color: #81C341;
            font-weight: 900;
            color: #fff;
            display: inline-block;
            padding: 1px 15.38px 3px;
            font-size: 1.1em;
            line-height: 1.6em;
            margin-right: 5px;

            ${appearance === APPEARANCES.THUMB && 
                `
                    display: none;
                `
            }

            ${appearance === APPEARANCES.DEFAULT && 
                `
                    display: none;
                `
            }

            ${appearance === APPEARANCES.MINI && 
                `
                display: none;
                `
            }
    `;

    const MetaData = styled.div`
        position: absolute;
        
        
        ${appearance === APPEARANCES.FEATURED && 
            `
            bottom: 20px;
            left: 20px;
            `
        }

        ${appearance === APPEARANCES.THUMB && 
            `
            bottom: 20px;
            left: 20px;
            `
        }

        ${appearance === APPEARANCES.DEFAULT && 
            `
            bottom: 20px;
            left: 20px;
            `
        }

        ${appearance === APPEARANCES.MINI && 
            `
            top: 0px;
            font-size: 14px;
            `
        }
    `;

    const CategoryLink = styled.a`
            color: #81C341;
            display: inline-block;
            font-size: 16px;
            font-weight: 900;
            float: left;
            clear: right;
            z-index: 11;

            ${appearance === APPEARANCES.THUMB && 
                `
                display: none;
                `
            }

            ${appearance === APPEARANCES.DEFAULT && 
                `
                display: none;
                `
            }

            ${appearance === APPEARANCES.MINI && 
                `
                display: none;
                `
            }
    `;

    const AuthorLink = styled.a`
        font-size: 16px;
        z-index: 11;

        &:before {
            content: "|";
            padding: 0 5px;
        }
    `;

    return (
        <Wrapper>
                <ThumbNail>
                    {appearance === APPEARANCES.FEATURED && 
                        <CreatedDate>
                            <span>23</span>
                            <span>Oct</span>
                        </CreatedDate>
                    } 
                </ThumbNail>
                <Content>
                    {title && <ContentHeader>
                        <New>New</New>
                        <Title>{title}</Title>
                    </ContentHeader>}
                    {teaser && <Teaser>{teaser}</Teaser>}
                    <MetaData>
                        {appearance !== APPEARANCES.FEATURED && 
                            <CreatedDate>23 Oct</CreatedDate>
                        }
                        {category && <CategoryLink href={category.url}>{category.name}</CategoryLink>}
                        {author && <AuthorLink href={author.url}>{author.name}</AuthorLink>}
                    </MetaData>
                </Content>
        </Wrapper>
    )
}

Card.propTypes = {
    /*
        The card component takes up five types of layout format.
    */
    appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
    /*
        The background colour of the card a fallback has been catered for.
    */
    backgroundColor: PropTypes.string,
    /*
        Title of the card.
    */
    title: PropTypes.string,
    /*
        Teaser content of the card.
    */
    teaser: PropTypes.string,
    category: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    }),
    author: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    }),
    icon: PropTypes.oneOf(Object.keys(ICONS)),
    boxshadow: PropTypes.bool,
    width: PropTypes.string
}

Card.defaultProps = {
    backgroundColor: "white",
    appearance: "featured",
    boxshadow: false,
    icon: null,
    width: null,
}
