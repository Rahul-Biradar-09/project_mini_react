import {Component} from 'react'

import GameReportRoute from '../GameReportRoute'

import './index.css'

class GameResultRoute extends Component {
  state = {displayReport: false}

  onDisplayReport = () => {
    this.setState(prevState => ({displayReport: !prevState.displayReport}))
  }

  onGameReport = () => {
    const {unattempted, rightAnswers, attempted} = this.props
    return (
      <GameReportRoute
        unattempted={unattempted}
        rightAnswers={rightAnswers}
        attempted={attempted}
      />
    )
  }

  onGameResult = () => {
    const {rightAnswers, attempted} = this.props
    return (
      <div
        className={
          rightAnswers >= 6
            ? 'game-result-container'
            : 'game-result-failure-container'
        }
      >
        <img
          src={
            rightAnswers >= 6
              ? 'https://assets.ccbp.in/frontend/react-js/quiz-game-congrats-trophy-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/quiz-game-lose-img.png'
          }
          alt={rightAnswers >= 6 ? 'won' : 'lose'}
          className={rightAnswers >= 6 ? 'trophy-image' : 'lose-image'}
        />
        <h1
          className={
            rightAnswers >= 6
              ? 'game-result-heading-1'
              : 'game-result-lose-heading-1'
          }
        >
          {rightAnswers >= 6 ? 'Congrats' : 'You lose'}
        </h1>
        <h1 className="game-result-heading-2">
          {rightAnswers >= 6
            ? `${rightAnswers * 10}%`
            : `${rightAnswers * 10}%`}{' '}
          Correctly Answered
        </h1>
        {rightAnswers >= 6 ? (
          <p className="game-result-para-1">Quiz completed successfully</p>
        ) : undefined}
        <p
          className={
            rightAnswers >= 6 ? 'game-result-para-2' : 'game-result-lose-para-1'
          }
        >
          You attempted {attempted} out of 10 questions as correct
        </p>
        <button
          type="button"
          className="report-button"
          onClick={this.onDisplayReport}
        >
          Report
        </button>
      </div>
    )
  }

  render() {
    const {displayReport} = this.state
    return <>{displayReport ? this.onGameReport() : this.onGameResult()}</>
  }
}

export default GameResultRoute
