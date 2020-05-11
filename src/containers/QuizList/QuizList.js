import React, {Component} from 'react';
import style from './QuizList.module.scss'
import {NavLink} from "react-router-dom";

class QuizList extends Component {
  renderQuiz() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li className={style.Link} key={index}>
          <NavLink  to={'/quiz/' + quiz}>
            Тест: {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={style.QuizList}>
        <div>
          <h1>Список Тестов</h1>
          <ul>
            {this.renderQuiz()}
          </ul>
        </div>
      </div>
    );
  }
}

export default QuizList;