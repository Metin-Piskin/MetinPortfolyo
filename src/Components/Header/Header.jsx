import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={style.container}>
      <h4 className={style.title}>Metin P.</h4>
      <text className={style.text}>Welcome</text>
      <text className={style.text}>About</text>
      <text className={style.text}>Technology</text>
      <text className={style.text}>Industry Knowledge</text>
      <text className={style.text}>Projects</text>
      <text className={style.text}>Communication</text>
    </div>
  )
}

export default Header
