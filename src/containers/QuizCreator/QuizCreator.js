import React, {Component} from 'react';
import style from './QuizCreator.module.scss'

class QuizCreator extends Component {
  render() {
    return (
      <div className={style.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
        </div>
      </div>
    );
  }
}

export default QuizCreator;