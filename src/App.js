import React from 'react';
import './App.css';

// COMPONENTS
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
