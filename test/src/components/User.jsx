import React, { useState, useContext } from 'react'
import Modal from 'react-modal'
import { EditUser } from './EditUser'
import { UsersContext } from './usersContext'


Modal.setAppElement('#root')

export const User = ({ user }) => {

  const { removeUser } = useContext(UsersContext)
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const customStyles = {
      display: 'flex' ,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '10px' 
  }

  return (
    <>
      <li >
        <div className="col s12">
          <div className="card">
            <div style ={customStyles}>
              <div>
                {user.lastName}
              </div>
              <div>
                {user.email}
              </div>
              <div>
                <button onClick={openModal} className="btn">EditUser</button>
                <button onClick={()=>removeUser(user.id)} className="red darken-2 btn">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <Modal isOpen={modalIsOpen}>
        <div className="container">
          <div className="row">
            <h3>EditUser</h3>
            <EditUser closeModal={closeModal} id={user.id}/>
            <div className="col s6 ">
              <button onClick={closeModal} className="btn" >Close</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
