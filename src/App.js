import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Container } from "@material-ui/core";



const App = () => {
  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  );
};

export default App;
