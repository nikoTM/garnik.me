import React from 'react';
import Layout from '../components/layout';

import SmallContainer from '../components/small-container';
import MainHeading from '../components/main-heading';
import DescriptionText from '../components/description-text';

const NotFoundPage = () => (
  <Layout>
    <SmallContainer>
      <MainHeading>NOT FOUND 🤔</MainHeading>
      <DescriptionText>
        You just hit a route that doesn&#39;t exist... the sadness.
      </DescriptionText>
    </SmallContainer>
  </Layout>
);

export default NotFoundPage;
