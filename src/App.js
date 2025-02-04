import {Component} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginRoute from './Components/LoginRoute'

import HomeRoute from './Components/HomeRoute'

import NotFound from './Components/NotFound'

import QuizGameRoute from './Components/QuizGameRoute'

import ProtectedRoute from './Components/ProtectedRoute'

import GameResultRoute from './Components/GameResultRoute'

import GameReportRoute from './Components/GameReportRoute'

import ValuesContext from './Context/ValuesContext'

import './App.css'

class App extends Component {
  state = {questionsCount: 0, unattempted: [], rightAnwers: 0}

  increaseCount = () => {}

  notattempeted = () => {}

  correctAnswers = () => {}

  render() {
    const {count, rightAnwers, unattempted} = this.state
    return (
      <ValuesContext.Provider
        value={{
          count,
          unattempted,
          rightAnwers,
          increaseCount: this.increaseCount,
          notattempeted: this.notattempeted,
          correctAnswers: this.correctAnswers,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute exact path="/quiz-game" component={QuizGameRoute} />
            <ProtectedRoute
              exact
              path="/game-results"
              component={GameResultRoute}
            />
            <ProtectedRoute
              exact
              path="/game-report"
              component={GameReportRoute}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ValuesContext.Provider>
    )
  }
}

export default App
