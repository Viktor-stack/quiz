import React, {Component} from 'react';
import style from './Drawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const Links = [
  {label: 'Список', to: '/', exact: true},
  {label: 'Создать тест', to: '/quiz-creator', exact: false},
  // {label: 'Тест', to: '/quiz/:id', exact: false},
  {label: 'Авторизацыя', to: '/auth', exact: false},
]

class Drawer extends Component {
  renderLinks() {
    /*const cls = [
      style.Drawer

    ]
    if (this.props.isOpen) {
      cls.push(style.close)
      cls.push(style.active)
    }*/
    return Links.map((linkItems, index,) => {
      return (
        <li
          key={index}
        >
          <NavLink
            to={linkItems.to}
            activeClassName={style.active}
            exact={linkItems.exact}
            onClick={this.props.onToggle}
          >
            {linkItems.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [
      style.Drawer
    ]
    if (!this.props.isOpen) {
      cls.push(style.close)
      cls.push(style.active)
    }
    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onToggle}/> : null}
      </>
    )
  }
}

export default Drawer;