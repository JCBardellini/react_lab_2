import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import UserInformation from './components/Users'

function App() {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        // console.log(response);
        let usersData = response.data
        // console.log(usersData);
        setUsers(usersData)
      }
    )
  }, []);

  return (
    <>
      <Navbar / >
      <UserInformation users={users} />
      
    </>
  )
}

export default App
