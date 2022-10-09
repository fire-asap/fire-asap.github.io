import React from 'react';
import PageWrap from '../../components/PageWrap';
import NavBar from '../../components/NavBar';
import ContentWrap from '../../components/ContentWrap';
import FormWrap from './components/FormWrap';
import Form from './components/Form';
import Header from './components/Header';

function Home() {
  return (
    <PageWrap>
      <NavBar />
      <Header />
      <ContentWrap>
        <FormWrap>
          <Form />
        </FormWrap>
      </ContentWrap>
    </PageWrap>
  );
}

export default Home;
