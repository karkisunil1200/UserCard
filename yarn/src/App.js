import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCardList from './components/components/users/UserCardList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <UserCardList />
      </header>
    </div>
  );
}

export default App;
