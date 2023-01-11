import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className = {
            styles.left
        }>
            <div className="logo">
                <Link to="/">eCommerce</Link>
            </div>
            <ul ul className = {
                styles.menu
            } >
                <li>
                    <Link to="/">Products</Link>
                </li>
            </ul>
        </div>    
        <div className='right'>Right</div>
    </nav>
  )
}

export default Navbar