import React, { useState, useContext } from 'react'
import { UsersContext } from './usersContext'


export const AddUser = ({closeModal}) => {

    const { addUser } = useContext(UsersContext)
    const [form, setForm] = useState({ email: '', lastName: '' })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addUser(form)
        setForm({ ...form, email: '', lastName: '' })
        closeModal()
    }

    return (
        <form>
            <div className="input-field col s12">
                <input onChange={changeHandler} name="email" placeholder="email" id="email" type="email" className="validate" />
            </div>
            <div className="input-field col s12">
                <input onChange={changeHandler} name="lastName" placeholder="lastName" id="lastName" type="text" className="validate" />
            </div>
            <div className="col s6">
                <button type="submit" onClick={handleSubmit} className="btn">Submit</button>
            </div>
        </form>
    )
}
