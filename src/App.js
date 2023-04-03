import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  //Only two states are needed 
  const [searchUser, setSearchUser] = useState("");
  const [resultUsers, setResultUsers] = useState([]);

  return (
    <div className="App">
      <Form
        searchUser={searchUser}
        setSearchUser={setSearchUser}
        resultUsers={resultUsers}
        setResultUsers={setResultUsers}
      />
    </div>
  );
}

export default App;
