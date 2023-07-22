import { useState } from 'react'
import { Users } from './users'
import './App.css'

function App() {
    const [query, setQuery] = useState("");

    console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
  return (
    <>
    <div className="app">
      <input type="text" placeholder='Search...' className="search" onChange={(e) => setQuery(e.target.value)}/>
      <ul className="list">
        {Users.filter((User) => User.first_name.toLowerCase().includes(query)).map((user) => (
          <li key={user.id} className="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
