import React, {useContext, useState} from 'react'
import {DataStudentContext} from "../App";
import '../Assets/ShowListOfStudent.css'

const ShowListOfStudent = () => {
    const {student, filtered} = useContext(DataStudentContext)
    const {search, setSearch} = useContext(DataStudentContext)
    const [row, setRow] = useState(false)
    const handleFilter = () => {
        setRow(prevRow=>!prevRow)

    }
    return (
        <>

            <div className='FilterRow'>
                <button className='ButtonFilter' onClick={handleFilter}>نمایش سطری/ستونی</button>
            </div>
            <div className='Students'>
                {student.filter((item) => {
                    if (search === "") {
                        return item
                    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item
                    }
                }).map((item) => {
                    return (
                        <div className='Student' style={{width: row ? '48%' : '100%'}} key={item.id}>
                            <div className="item Id">
                                شماره هنرجو :
                                <div className='Id'>{item.id}</div>
                            </div>
                            <div className="item">
                                نام و نام خانوادگی :
                                <div className='Name'>{item.name}</div>
                            </div>
                            <div className="item">
                                شماره تلفن :
                                <div className='Tell'>{item.tell}</div>
                            </div>
                            <div className="item">
                                ایمیل :
                                <div className='Email'>{item.email}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ShowListOfStudent
