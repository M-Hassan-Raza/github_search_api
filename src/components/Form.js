import React from 'react'
import axios from 'axios';
import User from './User'

const Form = (props) => {
    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.github.com/search/users?q=${props.searchUser}`);
        props.setResultUsers(response.data.items);
    };

    const searchStateHandler = (e) => {
        e.preventDefault();
        props.setSearchUser(e.target.value);
    };
    return (
        <div>
            <form id="myForm" onSubmit={handleSearch}>
                <input type="text" placeholder='Enter any Username' value={props.searchUser} onChange={searchStateHandler}></input>
                <button id="submit-btn" type="submit">Search</button>
            </form>
            <div class="result-users">
                {props.resultUsers.map((user) => (
                    <User user={user} />
                ))}
            </div>
        </div>
    )
}

export default Form