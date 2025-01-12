import Header from '../Header'

import './index.css'

const GameReportRoute = () => {
  return (
    <>
      <Header />
      <div className='game-report-container-background'>
        <div className='game-report-container'>
          <div className='game-report-top-container'>
            <div className='score-circle'>
              <h1 className='score-head'>
                10<span className='score-head cross-line'>/</span>
                <span className='score-head-small'>10</span>
              </h1>
            </div>
            <div className='score-rectangle'>
              <div className='sub-div'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/quiz-game-right-check-img.png'
                  alt='correct answer icon'
                  className='img'
                />
                <p className='para'>4 Correct answers</p>
              </div>
              <div className='sub-div'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/quiz-game-wrong-check-img.png'
                  alt='incorrect answer icon'
                  className='img'
                />
                <p className='para'>5 Wrong answers</p>
              </div>
              <div className='sub-div'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/quiz-game-un-answered-img.png'
                  alt='unattempted icon'
                  className='img'
                />
                <p className='para'>1 Unattempted</p>
              </div>
            </div>
          </div>
          <div className='game-report-bottom-container'>
            <h1 className='unattempted-head'>Unattempted Questions</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameReportRoute
