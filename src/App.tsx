import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBar/SearchBox';
import Grid from './components/Grid/Grid';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Container style={{marginTop: '1.5rem'}}>
          <SearchBox/>
          <Grid/>
        </Container>
      </header>
    </div>
  );
}

export default App;
