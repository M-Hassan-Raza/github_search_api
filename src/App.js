import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'
import axios from 'axios';

function App() {
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
