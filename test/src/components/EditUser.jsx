import React, { useState, useContext } from 'react'
import { UsersContext } from './usersContext'


export const EditUser = ({closeModal, id}) => {

    const { editUser, users } = useContext(UsersContext)
    const initial = users.find(item => item.id === id)
    const [form, setForm] = useState({email: initial.email , lastName: initial.lastName} )
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        editUser(form, id)
        setForm({ ...form, email: '', lastName: ''})
        closeModal()   
    }

    return (
        <form >
            <div className="input-field col s12">
                <input onChange={changeHandler} value={form.email} name="email" placeholder="email" id="email" type="email" className="validate" />
            </div>
            <div className="input-field col s12">
                <input onChange={changeHandler} value={form.lastName} name="lastName" placeholder="lastName" id="lastName" type="text" className="validate" />
            </div>
            <div className="col s6">
                <button type="submit" onClick={handleSubmit} className=" btn">Submit</button>
            </div>
        </form>
    )
}