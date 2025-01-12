import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginRoute from './Components/LoginRoute'

import HomeRoute from './Components/HomeRoute'

import NotFound from './Components/NotFound'

import QuizGameRoute from './Components/QuizGameRoute'

import ProtectedRoute from './Components/ProtectedRoute'

import GameResultRoute from './Components/GameResultRoute'

import GameReportRoute from './Components/GameReportRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <ProtectedRoute exact path="/" component={HomeRoute} />
      <ProtectedRoute exact path="/quiz-game" component={QuizGameRoute} />
      <ProtectedRoute exact path="/game-results" component={GameResultRoute} />
      <ProtectedRoute exact path="/game-report" component={GameReportRoute} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
