import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import { TrendingUp } from '@styled-icons/material';

export const Card = ({backgroundColor, title, teaser, category, author, appearance, boxshadow, icon}) => {

    const APPEARANCES = {
        FEATURED: 'featured',
        DEFAULT: 'default',
        THUMB: 'thumb',
        STRIP: 'strip',
        MINI: 'mini',
    };

    const Wrapper = styled.div`
        @media (min-width: 1024px) {
            position: relative;
            height: 320px;
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
                    background: ${backgroundColor};
                    width: 1152px;
                    height: 320px;
                `
            }

            ${appearance === APPEARANCES.THUMB && 
                `
                    background: ${backgroundColor};
                    width: 215px;
                    height: 300px;
                `
            }


            ${appearance === APPEARANCES.DEFAULT && 
                `
                    background: ${backgroundColor};
                    width: 270px;
                    height: 300px;
                `
            }

            ${appearance === APPEARANCES.STRIP && 
                `
                    background: ${backgroundColor};
                    width: 360px;
                    height: 100px;
                `
            }

            ${appearance === APPEARANCES.MINI && 
                `
                    width: calc(100% - 40px);
                    height: 100px;
                    padding: 10px 20px;
                `
            }
        }


        

        &:hover {
            ${boxshadow === true &&    
                `
                @media (min-width: 1024px) {
                    ${appearance !== APPEARANCES.STRIP && 
                        `
                        box-shadow: 0 6px 15px 0 rgba(0,0,0,0.1);
                        `
                    }

                    ${appearance !== APPEARANCES.MINI && 
                        `
                        box-shadow: 0 6px 15px 0 rgba(0,0,0,0.1);
                        `
                    }
                }
                `
            }

            ${appearance == APPEARANCES.MINI && 
                `
                background: ${backgroundColor};
                `
            }
        }
    `;

    const ThumbNail = styled.div`
        background: rgba(0,0,0,.1);

            position: relative;
            height: 300px;
        
            @media (min-width: 1024px) {
                display: inline-block;
                float: left;
                width: 50%;
                height: 100%;

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
    
                ${appearance === APPEARANCES.STRIP && 
                    `
                        width: 40%;
                        height: 100%;
                    `
                }

                ${appearance === APPEARANCES.MINI && 
                    `
                        width: 40%;
                        height: 100%;
                    `
                }
            }

    `;

    const Content = styled.div`
            width: clac(100% - 20px);
            height: auto;
            position: relative;
            padding: 20px 20px 50px;
            
            @media (min-width: 1024px) {
                position: relative;
                display: inline-block;
                
                ${appearance === APPEARANCES.FEATURED && 
                    `
                        float: left;
                        width: calc(50% - 40px);
                        height: calc(100% - 40px);
                        padding: 20px;
                    `
                }

                ${appearance === APPEARANCES.THUMB && 
                    `
                        width: calc(100% - 40px);
                        height: calc(50% - 40px);
                        padding: 20px;
                    `
                }
    
                ${appearance === APPEARANCES.DEFAULT && 
                    `
                        width: calc(100% - 40px);
                        height: calc(50% - 40px);
                        padding: 20px;
                    `
                }
    
                ${appearance === APPEARANCES.STRIP && 
                    `
                    display: inline-block;
                    width: calc(60% - 20px);
                    height: calc(100% - (14px * 4));
                    padding: 10px;
                    padding-top: calc(14px * 3);
                    `
                }

                ${appearance === APPEARANCES.MINI && 
                    `
                    display: inline-block;
                    width: calc(60% - 20px);
                    height: calc(100% - (14px * 4));
                    padding: 10px;
                    padding-top: calc(14px * 3);
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

                ${appearance === APPEARANCES.STRIP && 
                    `
                    font-size: 14px;
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
            width: calc(64px - 20px);
            height: calc(64px - 20px);
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

        ${appearance === APPEARANCES.STRIP && 
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
                width: calc(64px - 20px);
                height: calc(64px - 20px);
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

                ${appearance === APPEARANCES.THUMB && 
                    `
                    `
                }

                ${appearance === APPEARANCES.DEFAULT && 
                    `
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

            ${appearance === APPEARANCES.STRIP && 
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

        ${appearance === APPEARANCES.STRIP && 
            `
            top: 10px;
            font-size: 14px;
            `
        }

        ${appearance === APPEARANCES.MINI && 
            `
            top: 10px;
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

            ${appearance === APPEARANCES.STRIP && 
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
                    {(appearance !== APPEARANCES.STRIP || appearance !== APPEARANCES.MINI)&& icon && 
                        <MediaIcon>
                            <Icon type={icon} size={appearance === APPEARANCES.FEATURED ?  "40" : appearance === APPEARANCES.DEFAULT ||  appearance === APPEARANCES.THUMB ? "30" : "20"} />
                        </MediaIcon>
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
    appearance: PropTypes.oneOf(['featured', 'thumb', 'default', 'strip', 'mini']),
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    teaser: PropTypes.string,
    category: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    }),
    author: {
        name: PropTypes.string,
        url: PropTypes.string
    },
    icon: PropTypes.oneOf(['tipster', 'quiz']),
    boxshadow: PropTypes.bool
}

Card.defaultProps = {
    backgroundColor: "white",
    appearance: "featured",
    boxshadow: false,
    icon: null
}
