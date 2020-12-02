import React, { useState, useContext } from 'react'
import { UsersContext } from './usersContext'


export const FindUser = () => {

    const {findUser, allUsers} = useContext(UsersContext)
    const [form, setForm] = useState('')
    const changeHandler = event => {
        setForm({form: event.target.value})
    }  
    const handleSubmit = (e) => {
        e.preventDefault()
        findUser(form)
        setForm('')
    }
    const handleClick = (e) => {
        e.preventDefault()
        allUsers()
    }

    return (
        <>
            <div className=" col s3">
                <input onChange={changeHandler} value={form.form || ""} placeholder="find" id="find" type="text" className="validate" />
            </div>           
            <div className="col s3">
                <button type="button" onClick={handleSubmit} className="btn">Find</button>
            </div>
            <div className="col s3">
                <button type="button" onClick={handleClick} className="btn">AllUsers</button>
            </div>
        </>
    )
}
