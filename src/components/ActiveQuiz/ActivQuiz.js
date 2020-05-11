import React from 'react';
import style from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={style.ActiveQuiz}>
    <p className={style.Ouestion}>
      <span>
        <strong>{props.answerNumber + ':'}</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
);

export default ActiveQuiz;