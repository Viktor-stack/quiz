import React from 'react';
import style from './Input.module.scss'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const InputType = props.type || 'text'
  const cls = [style.Input]
  const htmlFor = `${InputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(style.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={InputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autocomplete}
      />
      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Введите верные значения'}</span>
          :null
      }
    </div>
  );
};

export default Input;