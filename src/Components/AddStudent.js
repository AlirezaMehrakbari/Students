import React, {useContext, useRef, useState} from 'react'
import '../Assets/AddStudent.css'
import {DataStudentContext} from "../App";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const AddStudent = (props) => {
    const {student, setStudent} = useContext(DataStudentContext)
    const [fullName, setFullName] = useState('')
    const [tell, setTell] = useState('')
    const [email, setEmail] = useState('')
    const inputRef = useRef('')
    const buttonRef = useRef('')
    const [visible, setVisible] = useState(false)


    const handleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    window.addEventListener('scroll', handleVisible)
    const handleScroll = () => {
        window.scrollTo(0, 0)
        inputRef.current.focus()
    }
    const addStudent = (e, Name, Tell, Email) => {
        e.preventDefault()
        const students = {
            id: Math.floor(Math.random() * 1000),
            name: Name,
            tell: Tell,
            email: Email
        }

        setStudent(prevState => {
            return [...prevState, students]
        })
        setFullName('')
        setEmail('')
        setTell('')

    }


    return (
        <>
            <div className='AddStudent'>
                <form className='FormStudent' onSubmit={(e) => addStudent(e, fullName, tell, email)}>
                    <fieldset className='FieldsetStudent'>
                        <h1 style={{margin: '0'}}>افزودن هنرجو</h1>
                        <div className="Fullname">
                            <label>نام و نام خانوادگی : </label>
                            <input ref={inputRef} type='text' value={fullName}
                                   onChange={(e) => setFullName(e.target.value)}/>
                        </div>
                        <div className="Tel">
                            <label>شماره تلفن : </label>
                            <input type='number' value={tell} onChange={(e) => setTell(e.target.value)}/>
                        </div>
                        <div className="Email">
                            <label>ایمیل : </label>
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <button type='submit' className='Submit'>افزودن هنرجو</button>
                    </fieldset>

                </form>
            </div>
            <div onClick={handleScroll} ref={buttonRef} style={{display: visible ? 'flex' : 'none',cursor:'pointer'}}
                 className="IconScroll">
                <div className='Icon'><BsFillArrowUpCircleFill/></div>
                <div className='Scroll'> Add</div>
            </div>

        </>
    )
}


export default AddStudent
