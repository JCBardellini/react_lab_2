import React from 'react'
import './index.css'

const UserInformation = ({users}) => {

    // console.log(users);

    const usersData = users.map( (person) => {
        console.log(person);
        return (
        <div className="user-info"> 
            <h2>{person.name}</h2>
            <h3>Email: {person.email}</h3>
            <h3>Website: {person.website}</h3>
        </div>
        )
    })
  return (
    <div>{usersData}</div>
  )
}

export default UserInformation