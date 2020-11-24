import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AuthorProfile } from '../AuthorProfile/AuthorProfile';

const ArticleFeaturedImage = ({src, alt, caption}) => {
  const ThumbNail = styled.div`
    margin: 10px -20px;

    @media (min-width: 1024px) {
      margin: 10px 0px;
    }
  `;

  const ImageWrapper = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;
    min-height: 50px;
    min-width: 100px;
    img {
      display: inline-block;
      min-width: 100%;
      transform: translateZ(0);
    }
  `;

  const Caption = styled.span`
    font-size: 1em;
    font-weight: 900;
    line-height: 1.2em;
    padding: 20px;
    margin-bottom: 20px;
    display: block;
    background-color: #eee;
    color: #555;
  `;

  return src && <ThumbNail>
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
    {caption && <Caption>{caption}</Caption>}
  </ThumbNail>
};

const ArticleMetaData = ({category, author, publishDate}) => {
  const MetaData = styled.div`
      display: block;

      & > *:nth-child(n + 2):after {
        content: "|";
        padding: 0 5px;
        color: #222;
        font-weight: 100;
        float: left;
      }
  `;

  const CreatedDate = styled.div`
      display: inline-block;
  `;

  const CategoryLink = styled.a`
      display: inline-block;
  `;

  const AuthorLink = styled.a`
      display: inline-block;
  `;

  return (
    <MetaData>
          {publishDate && <CreatedDate>{publishDate}</CreatedDate>}
          {category.url && category.name && <CategoryLink href={category.url}>{category.name}</CategoryLink>}
          {author.name && author.url && <AuthorLink href={author.url}>{author.name}</AuthorLink>}
    </MetaData>
  )
}

export const Page = ({publishDate, backgroundColor, boxshadow, title, teaser, content, category, author, featuredImage}) => {
  const metaData = {
    publishDate,
    category,
    author,
  }
  const Article = styled.article`
    background-color: ${backgroundColor};
    padding: 20px 20px 0;
    
    @media (min-width: 1024px) {
        position: relative;
        padding: 60px 160px 20px;

        ${boxshadow === true && `
          &::after {
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
        `}
    }
  `;

  const ArticleContent = styled.div``;

  const ArticleTitle = styled.h1`
    font-size: 1.6em;
    font-weight: 900;
    line-height: 1.1em;
    margin-bottom: 10px;
    word-break: break-word;

    @media (min-width: 1024px) {
        font-size: 2.4em;
        margin: 0 0 20px;
    }
  `;

  const ArticleTeaser = styled.h2`
    display: block;
    font-weight: 900;
    font-size: 1.3em;
    line-height: 1.1em;
    margin-bottom: 10px;
    
    @media (min-width: 1024px) { 
      font-size: 1.6em;
      margin-bottom: 20px
    }
  `;

  const ArticleBody = styled.div``;

  return (
    <Article>
      <ArticleContent>
        {title && <ArticleTitle>{title}</ArticleTitle>}
        <ArticleMetaData {...metaData} />
        <ArticleFeaturedImage {...featuredImage}/>
        {teaser && <ArticleTeaser>{teaser}</ArticleTeaser>}
        {content && <ArticleBody dangerouslySetInnerHTML={{__html: content}}></ArticleBody>}
      </ArticleContent>
      <AuthorProfile {...author} />
    </Article>
  )
}

Page.propTypes = {
  publishDate: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxshadow: PropTypes.bool,
  title: PropTypes.string,
  teaser: PropTypes.string,
  content: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }),
  author: PropTypes.shape({
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
  }),
  featuredImage: {
    src: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string
  }
}

Page.defaultProps = {
  backgroundColor: "white",
  boxshadow: true,
}