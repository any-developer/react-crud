import React, { useState, useEffect } from 'react'
import { useApi } from './api'
import { User } from './User'
import { UsersContext } from './usersContext'
import Modal from 'react-modal'
import { AddUser } from './AddUsers'
import { FindUser } from './FindUser'


Modal.setAppElement('#root')

export const Users = () => {

    const { request } = useApi()
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            const data = await request('/api/users', 'GET')
            setUsers(data)
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const addUser = async (form) => {
        const data = await request('/api/users', 'POST', { ...form })
        setUsers(
            [...users, data]
        )
    }
    const removeUser = async (id) => {
        await request(`/api/users/${id}`, 'DELETE')
        setUsers(
            users.filter(user => user.id !== id)
        )
    }
    const editUser = async (form, id) => {
        const data = await request(`/api/users/${id}`, 'PATCH', { ...form })
        setUsers(
            users.map(item => item.id === data.id ? data : item)
        )
    }
    const findUser = async (form) => {
        const data = await request(`/api/users?q=${form.form}`, 'GET')
        setUsers(data)
    }
    const allUsers = async () => {
        const data = await request('/api/users', 'GET')
        setUsers(data)
    }
    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <UsersContext.Provider value={{ addUser, removeUser, editUser, findUser, allUsers, users }}>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3>Users</h3>
                        <hr></hr>
                    </div>
                    <div className="col s3">
                        <button onClick={openModal} className="btn">AddUser</button>
                    </div>
                    <FindUser />
                </div>
                <div className="row">
                    <ul>
                        {users.map(user => <User key={user.id} user={user} />)}
                    </ul>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div className="container">
                    <div className="row">
                        <h3>AddUser</h3>
                        <AddUser closeModal={closeModal} />
                        <div className="col s6 ">
                            <button onClick={closeModal} className="btn">Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </UsersContext.Provider>
    )
}
