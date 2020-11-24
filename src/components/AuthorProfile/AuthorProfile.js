import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Icon, ICONS} from '../Icon/Icon';

export const AuthorProfile = ({image, name, url, social, content}) => {
    const author = {
        name, 
        url, 
        social, 
        content
    }
    const AuthorProfile = styled.div`
        position: relative;
        box-sizing: content-box;
        min-height: 100px;
    `;

    const AuthorImage = ({src, alt, caption}) => {
        const Wrapper = styled.div`
            width: 100px;
            height: 100px;
            float: left;
            border-radius: 50%;
            margin-right: 20px;
            overflow: hidden;
            img {
                max-width: 100%;
            }
        `;
    
        const ImageWrapper = styled.div`
            
        `;
    
        return src && <Wrapper>
            <img src={src} alt={alt} />
        </Wrapper>
    }

    const AuthorContent = ({name, url, social, content}) => {
        const Wrapper = styled.div`
            display: inline;

            @media (min-width: 800px) {
                display: block;
            }
        `;

        const AuthorName = styled.div`
            line-height: 100px;
            color: #81C341;
            font-size: 1.4em;
            font-weight: 900;

            @media (min-width: 800px) {
                line-height: inherit;
            }
        `;

        const AuthorBio = styled.div`
            margin: 1em 0;
            @media (min-width: 800px) {
                margin: 0;
                display: block;
                clear: none;
            }

        `;

        const Social = ({handle, type, url}) => {
            const Link = styled.a`
                font-size: .9em;
                line-height: 1.4em;
                border-bottom: 1px solid #222;
                display: inline-block;
                
                svg {
                    margin-right: 5px;
                }

                &, &:hover{
                    text-decoration: none;
                }
            `;

            console.log({type});
            //<Icon icon={ICONS[type]} size={18}/>

            return <Link href={url} target="_blank">
                
                {handle}
            </Link>
        };

        return (
            <Wrapper>
                {name && <AuthorName>{name}</AuthorName>}
                {content && <AuthorBio>{content}</AuthorBio>}
                {social && social.map((network, index) => <Social key={index} {...network}/>)}
            </Wrapper>
        )
    }
    

    return (
        <AuthorProfile>
            <AuthorImage {...image}/>
            <AuthorContent {...author}/>
        </AuthorProfile>
    )
};

AuthorProfile.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        caption: PropTypes.string
    }),
    name: PropTypes.string,
    url: PropTypes.string,
    social: PropTypes.arrayof(PropTypes.shape({
        handle: PropTypes.string,
        type: PropTypes.oneOf([
            'NEWSPAPER',
            'PLAY',
            'STATSDOTS',
            'STATSBARS',
            'STATSBARS2',
            'TROPHY',
            'FACEBOOK',
            'FACEBOOK2',
            'WHATSAPP',
            'TWITTER'
        ]).isRequired,
        url: PropTypes.string
    })),
    content: PropTypes.string
};