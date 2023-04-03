import React from 'react'

const User = (props) => {
    return (
        <div key={props.user.id}>
            <h2>{props.user.login}</h2>
            <p><a href={props.user.html_url}>{props.user.html_url}</a></p>
            <img src={props.user.avatar_url} alt={`${props.user.login}'s avatar`} />
        </div>
    )
}

export default User;