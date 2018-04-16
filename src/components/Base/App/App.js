import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'components'
import s from './App.scss'

const App = ({ isMenuOpen, triggerMenu }) => (
  <div className={s.outerContainer}>
    <main className={s.innerContainer}>
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
    </main>
  </div>
)

export default App
