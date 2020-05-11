import React from 'react'
import style from './Button.module.scss'

const Button = props => {
  const cls = [
    style.Button,
    style[props.type]
  ]
  return (
    <button
      className={cls.join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
export default Button;