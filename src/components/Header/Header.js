import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = ({href, imgSrc}) => {
  const Wrapper = styled.a``;

  return (
    <Wrapper href={href}>
      <span>
        <img src={imgSrc} />
      </span>
    </Wrapper>
  )
}

export const Header = ({ logo, social}) => {

  const Wrapper = styled.header``;

  return (
    <Wrapper>
      <Logo logo={logo} />
    </Wrapper>
  )
};

Header.propTypes = {
  logo: {
    href: PropTypes.string,
    imgSrc: PropTypes.string,
    name: PropTypes.string
  },
  social: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    type: PropTypes.oneOf(['twitter', 'facebook', 'instagram', 'youtube', 'soundcloud'])
  }))
}