import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = props => {
    return ( 
        <div>
            <ul>
                <li>
                    <NavLink to="/" >All USers</NavLink>
                </li>
                <li>
                    <NavLink to="/u1/posts" >My Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/posts/new" >Create Post</NavLink>
                </li>
                <li>
                    <NavLink to="/auth" >Authenication</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default NavLinks;