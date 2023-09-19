import React, {useContext, useEffect, useState} from 'react'
import {DataStudentContext} from "../App";
import '../Assets/Search.css'
const Search = () => {
    const{search,setSearch} = useContext(DataStudentContext)
  return (
    <div className="Search">
      <input placeholder='جست و جو هنرجو' className='SearchInput' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search
