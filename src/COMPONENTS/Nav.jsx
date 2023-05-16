import React from 'react'
import x from "./style.module.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <article className={x.nav}>
            <Link to="/create"><a>CREATE USER</a></Link>
            <Link to="/users"><a>USERS</a></Link> 
        </article>
    </div>
  )
}

export default Nav