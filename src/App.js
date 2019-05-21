import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './List.js';
import './Card.js';


function App(props) {
  //NEEDS TO CALL LISTS WHICH WILL CALL CARDSK
console.log('GOT HERE');

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      
    </div>
    
    </main>


    
  );
}

export default App;
