import { useState } from 'react'
import Profile from './components/Profile'
import userData from "./userData.json";

import FriendList from  './components/FriendList'
import friends from "./friends.json"

import './App.css'


function App() {

  return (
    <div>
   <Profile name={userData.username} tag={userData.tag} location={userData.location} image={userData.avatar} stats={userData.stats}/>  
   <FriendList friends={friends}/>
    </div>
  )
}

export default App
 