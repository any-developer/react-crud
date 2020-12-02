import { createContext } from 'react'


function noop(){}

export const UsersContext = createContext({
    addUser: noop,
    removeUser: noop,
    editUser: noop,
    findUser: noop,
    allUser: noop,
    users: []
})