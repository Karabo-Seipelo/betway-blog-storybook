import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AuthorProfile = ({image, name, url, social, content}) => {
    const AuthorProfile = styled.div`
        position: relative;
        box-sizing: content-box;
        min-height: 100px;
    `;

    const AuthorName = styled.div`
        color: #81C341;
        font-size: 1.4em;
        font-weight: 900;
    `;

    const AuthorBio = styled.div``;

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
    

    return (
        <AuthorProfile>
            <AuthorImage {...image}/>
            {name && <AuthorName>{name}</AuthorName>}
            {content && <AuthorBio>{content}</AuthorBio>}
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
    social: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    })),
    content: PropTypes.string
};