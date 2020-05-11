import React, {Component} from 'react'
import style from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActivQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"

class Quiz extends Component {
  state = {
    results: { // {[id]: success error}
      quizTitleResults: 'Результат тестирования',
    },
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
    quizTitle: 'Ответь на вопрос',
    quiz: [
      {
        question: 'Какого цвета небо ?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Белое', id: 1},
          {text: 'Синие', id: 2},
          {text: 'Красное', id: 3},
          {text: 'Жолтое', id: 4}
        ]
      },
      {
        question: 'В каком городе вы находитель ?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'Моссква', id: 1},
          {text: 'Брянск', id: 2},
          {text: 'Днепр', id: 3},
          {text: 'Ворошиж', id: 4}
        ]
      },
      {
        question: 'Кто такой Пушкин ?',
        rightAnswerId: 1,
        id: 3,
        answers: [
          {text: 'Паэт', id: 1},
          {text: 'Бомж', id: 2},
          {text: 'Олкашь', id: 3},
          {text: 'Дебил', id: 4}
        ]
      }
    ]
  }
  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results


    if (question.rightAnswerId === answerId) {

      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {

        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

 /* componentDidMount() {
    console.log('Quiz ID =', this.props.match.params.id)
  }*/

  render() {
    return (
      <div className={style.Quiz}>
        <div className={style.QuizWrapper}>
          <h1>
            {!this.state.isFinished ?
              this.state.quizTitle :
              this.state.results.quizTitleResults
            }
          </h1>
          {this.state.isFinished
            ? <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            /> :
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}

export default Quiz;