import React, { useState, useEffect, useContext } from 'react'
import { useApi } from './api'
import { useMessage } from './message'
import { AuthContext } from './authContext'


export const Login = () => {
    
    const auth = useContext(AuthContext)
    const { loading, request, error, clearError } = useApi()
    const message = useMessage()
    const [form, setForm] = useState({ email: '', password: '' })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const loginHandler = async (e) => {
        try {
            e.preventDefault()
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.accessToken, data.userId)
        } catch (e) { }
    }
    useEffect(() => {
        message(error)
        clearError(null)
    }, [error, message, clearError])

    return (
        <div className="container">
            <div className="row">
                <h1>Login</h1>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={changeHandler} name="email" placeholder="admin@email.com" id="email" type="email" className="validate" />
                        </div>
                        <div className="input-field col s12">
                            <input onChange={changeHandler} name="password" placeholder="admin" id="password" type="password" className="validate" />
                        </div>
                    </div>
                    <button onClick={loginHandler} disabled={loading} className="btn">Login</button>
                </form>
            </div>
        </div>
    )
}
