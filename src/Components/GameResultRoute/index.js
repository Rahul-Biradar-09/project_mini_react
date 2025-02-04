import Header from '../Header'

import ValuesContext from '../../Context/ValuesContext'

import './index.css'

const GameResultRoute = props => {
  const onClickedButton = () => {
    const {history} = props
    history.replace('/game-report')
  }

  return (
    <ValuesContext.Consumer>
      {value => {
        const {rightAnwers, questionsCount, unattempted} = value
        return (
          <>
            <Header />
            <div className="game-result-background">
              <div
                className={
                  rightAnwers >= 5
                    ? 'game-result-container'
                    : 'game-result-failure-container'
                }
              >
                <img
                  src={
                    rightAnwers >= 5
                      ? 'https://assets.ccbp.in/frontend/react-js/quiz-game-congrats-trophy-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/quiz-game-lose-img.png'
                  }
                  alt={rightAnwers >= 5 ? 'congrats' : 'lose'}
                  className={rightAnwers >= 5 ? 'trophy-image' : 'lose-image'}
                />
                <h1
                  className={
                    rightAnwers >= 5
                      ? 'game-result-heading-1'
                      : 'game-result-lose-heading-1'
                  }
                >
                  {rightAnwers >= 5 ? 'Congrats!' : 'You lose!'}
                </h1>
                <h1 className="game-result-heading-2">
                  {rightAnwers >= 5 ? `${rightAnwers}0%` : `${rightAnwers}0%`}{' '}
                  Correctly Answered
                </h1>
                {rightAnwers >= 5 ? (
                  <p className="game-result-para-1">
                    Quiz completed successfully.
                  </p>
                ) : undefined}
                <p
                  className={
                    rightAnwers >= 5
                      ? 'game-result-para-2'
                      : 'game-result-lose-para-1'
                  }
                >
                  You attempted {questionsCount - unattempted.length} out of 10
                  questions as correct.
                </p>
                <button
                  type="button"
                  className="report-button"
                  onClick={onClickedButton}
                >
                  Report
                </button>
              </div>
            </div>
          </>
        )
      }}
    </ValuesContext.Consumer>
  )
}

export default GameResultRoute
