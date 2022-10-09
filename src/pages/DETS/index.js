import React from 'react';
import PageWrap from '../../components/PageWrap';
import HeroBanner from '../../components/HeroBanner';
import ContentWrap from '../../components/ContentWrap';
import FormWrap from './components/FormWrap';
import Form from './components/Form';

import Header from './components/Header';

function Home() {
  return (
    <PageWrap>
      <HeroBanner />
      <ContentWrap>
        <Header />
        <FormWrap>
          <Form />
        </FormWrap>
      </ContentWrap>
    </PageWrap>
  );
}

export default Home;
