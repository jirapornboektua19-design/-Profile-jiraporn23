
import React from 'react'
import Profile from './Components/Profile';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Hobbies from './Components/Hobbies';

const App = () => {
  return (
    <div className="text-left w-full">
      <h2>ประวัติส่วนตัว</h2>
      <hr />
      <Profile />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Hobbies />
      <hr />
    </div>
  )
}

export default App
