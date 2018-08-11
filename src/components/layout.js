import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import styled from 'styled-components';

import './layout.css';

import favicon from '../images/favicon.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333333;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  paddingtop: 0;
`;

const Layout = ({ children }) => (
  <>
    <Helmet title="A spot for myself">
      <html lang="en" />
      <link key="icon" rel="icon" href={favicon} />
    </Helmet>
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
