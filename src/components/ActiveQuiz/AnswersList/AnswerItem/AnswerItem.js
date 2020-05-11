import React from 'react';
import style from './AnswerItem.module.scss'

const AnswerItem = props => {

  const cls = [style.AnswerItems]

  if (props.state) {
    cls.push(style[props.state])
  }
  return (
    <li
      className={style.AnswerItems + ' ' + cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem;