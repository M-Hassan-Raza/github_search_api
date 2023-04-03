import React from 'react'
import axios from 'axios';
import User from './User';

const Form = (props) => {
    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await axios.get('https://api.github.com/search/users?q=${searchTerm}');
        props.setResultUsers(response.data.items);
    };

    const searchStateHandler = (e) => {
        e.preventDefault();
        props.setSearchUser(e.target.value);
    };
    return (
        <div>
            <form onSubmit={handleSearch}>
                <label>Search a GitHub Search:
                    <input type="text" value={props.searchUser} onChange={searchStateHandler}></input>
                </label>
                <button type="submit">Search</button>
            </form>
            {props.resultUsers.map((user) => (
                
                <User />

            ))}
        </div>
    )
}

export default Form