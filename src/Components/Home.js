import React from 'react'
import AddStudent from "./AddStudent";
import ShowListOfStudent from "./ShowListOfStudent";
import Search from "./Search";
import '../Assets/Home.css'
import ReactSwitch from "react-switch";
const Home = () => {
  return (
    <div className='Home' >
      <AddStudent/>
      <Search/>
      <ShowListOfStudent/>
      <div  className='Switch'>
          <ReactSwitch/>
      </div>

    </div>
  )
}

export default Home
