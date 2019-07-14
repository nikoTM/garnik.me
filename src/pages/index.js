import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SmallContainer from '../components/small-container';
import MainHeading from '../components/main-heading';
import DescriptionText from '../components/description-text';

const Link = ({ children, ...props }) => <a {...props}>{children}</a>;

const StyledLink = styled(Link)`
  text-shadow: none;
`;

const IndexPage = () => (
  <Layout>
    <SmallContainer>
      <MainHeading>Hi, I am Garnik!</MainHeading>
      <DescriptionText>
        Site's currently under construction. But you can find me on{' '}
        <StyledLink href="https://twitter.com/nikoTM">twitter</StyledLink> and{' '}
        <StyledLink href="https://github.com/nikoTM">Github</StyledLink>.
      </DescriptionText>
    </SmallContainer>
  </Layout>
);

export default IndexPage;
