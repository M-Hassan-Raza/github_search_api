import React from 'react'

const User = (props) => {
    const username = props.user.html_url;
    var index = username.lastIndexOf('/');
    var newUsername = username.substring(index + 1);
    return (
        <div id="user-div" key={props.user.id}>
            <h1><a href={props.user.html_url}>{newUsername}</a></h1>
            <a href={props.user.html_url}>
                <img id="search-image" src={props.user.avatar_url} alt={`${props.user.login}'s avatar`} />
            </a>
        </div>
    )
}

export default User;