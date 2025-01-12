import Header from '../Header'

import './index.css'

const GameResultRoute = props => {
  const onClickedButton = () => {
    const {history} = props
    history.replace('/game-report')
  }

  return (
    <>
      <Header />
      <div className="game-result-background">
        <div className="game-result-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-congrats-trophy-img.png"
            alt="won"
            className="trophy-image"
          />
          <h1 className="game-result-heading-1">Congrats!</h1>
          <h1 className="game-result-heading-2">90% Correctly Answered</h1>
          <p className="game-result-para-1">Quiz completed successfully.</p>
          <p className="game-result-para-2">
            You attempted 9 out of 10 questions as correct.
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
}

export default GameResultRoute
