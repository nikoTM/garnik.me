import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import styled from 'styled-components';

import favicon from '../images/favicon.png';

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.0875rem 1.45rem;
  height: 100vh;
  display: flex;
`;

const Layout = ({ children }) => (
  <>
    <Helmet title="A spot for myself">
      <html lang="en" />
      <link key="icon" rel="icon" href={favicon} />
    </Helmet>
    <InnerContainer>{children}</InnerContainer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
