import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './jsx/users';

function App() {
let dataUrl = './real-user-data.json'
return (
    <Users data-url={dataUrl}/>
  );
}

export default App;
