import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Link = ({ children, ...props }) => <a {...props}>{children}</a>;

const StyledLink = styled(Link)`
  text-shadow: none;
`;

const SmallContainer = styled.div`
  margin: auto;
  max-width: 350px;
`;

const MainHeading = styled.h1`
  color: #ffffff;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  max-width: 305px;
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
