import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './authContext' 


export const Nav = () => {

    const auth = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault()
        auth.logout()
    }

    return (
        <nav>
            <div className="nav-wrapper teal lighten-2">
                <span className="brand-logo">Takeoff Staff</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {auth.isAuth?<li><Link onClick={handleClick} to="/">Logout</Link></li>:null}
                </ul>
            </div>
        </nav>
    )
}
