import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TrendingUp } from '@styled-icons/material';

export const Card = (props) => {
    const {backgroundColor, title, teaser, category, author, appearance, CardWrapper} = props;

    const APPEARANCES = {
        FEATURED: 'featured',
        DEFAULT: 'default',
        SMALL: 'small',
    };

    const Wrapper = styled.div`
        @media (min-width: 1024px) {
            position: relative;
            height: 320px;

            animation-duration: 600ms;
            animation-fill-mode: backwards;
            animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
            cursor: pointer;
            overflow: hidden;
            transition: box-shadow 800ms, -webkit-box-shadow 800ms;
            box-shadow: 0 2px 2px 0 rgba(77,77,79,0.08), 0 0 2px 0 rgba(77,77,79,0.16);

            ${props => props.appearance === APPEARANCES.FEATURED && 
                `
                    width: 1152px;
                    height: 320px;
                `
            }

            ${props => props.appearance === APPEARANCES.DEFAULT && 
                `
                    width: 215px;
                    height: 300px;
                `
            }
        }

        &:hover {
            @media (min-width: 1024px) {
                box-shadow: 0 6px 15px 0 rgba(0,0,0,0.1);
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
                float: left;
                width: calc(50% - 40px);
                height: calc(100% - 40px);
                padding: 20px;
            }
    `;

    const ContentHeader = styled.div``;

    const Title = styled.h1`
            font-size: 18px;
            line-height: 1.1em;
            vertical-align: baseline;
            display: inline;
        
            @media (min-width: 1024px) {
                font-size: 28px;
                font-weight: bold;
            }

    `;

    const Teaser = styled.h2`
            display: none;
        
            @media (min-width: 1024px) {
                display: block;
                font-size: 22px;
                margin-top: 20px;
            }
    `;

    const CreatedDate = styled.div`
            font-size: 18px;
            width: calc(64px - 20px);
            height: calc(64px - 20px);
            padding: 10px;
            position: absolute;
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
    `;

    const MediaIcon = styled.div`
            width: calc(64px - 20px);
            height: calc(64px - 20px);
            padding: 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(255, 255, 255, .9);
            z-index: 1;

            @media (min-width: 834px) {
                vertical-align: unset;
            }
            
            @media (min-width: 768px) {
                width: 64px;
                height: 64px;
                padding: 0;
                font-weight: 900;
                font-size: 1.25em;
                text-align: center;
                line-height: 57.6px;
                word-spacing: 64px;
            }
    `;

    const OddsIcon = styled(TrendingUp)`
        color: #81C341;
    `

    const New = styled.div`
            background-color: #81C341;
            font-weight: 900;
            color: #fff;
            display: inline-block;
            padding: 1px 15.38px 3px;
            font-size: 1.1em;
            line-height: 1.6em;
            margin-right: 5px;
    `;

    const MetaData = styled.div`
            position: absolute;
            bottom: 20px;
            left: 20px;
    `;

    const CategoryLink = styled.a`
            color: #81C341;
            display: inline-block;
            font-size: 16px;
            font-weight: 900;
            float: left;
            clear: right;
            z-index: 11;
    `;

    const AuthorLink = styled.a`
        font-size: 16px;
        z-index: 11;
        &:before {
            content: "|";
            padding: 0 5px;
        }
    `;

    const applyStyle = CardWrapper => {
        return (CardWrapper && Wrapper.withComponent(({...rest})=> (
            <CardWrapper {...rest} />
        )))
    }


    return (
        <Wrapper
            style={backgroundColor && {backgroundColor}} {...props}>
                <ThumbNail>
                    <CreatedDate>
                        <span>23</span>
                        <span>Oct</span>
                    </CreatedDate>
                    <MediaIcon>
                        <OddsIcon size="40" />
                    </MediaIcon>
                </ThumbNail>
                <Content>
                    {title && <ContentHeader>
                        <New>New</New>
                        <Title>{title}</Title>
                    </ContentHeader>}
                    {teaser && <Teaser>{teaser}</Teaser>}
                    <MetaData>
                        {category && <CategoryLink href={category.url}>{category.name}</CategoryLink>}
                        {author && <AuthorLink href={author.url}>{author.name}</AuthorLink>}
                    </MetaData>
                </Content>
        </Wrapper>
    )
}

Card.propTypes = {
    appearance: PropTypes.oneOf(['featured', 'default', 'small']),
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
    CardWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

Card.defaultProps = {
    backgroundColor: "white",
    appearance: "featured",
    CardWrapper: undefined
}
