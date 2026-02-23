import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.Header}>
        <h3>Sheriyans</h3>
        <button className={style.btn}> Visit Me</button>
    </div>
  )
}

export default Header
