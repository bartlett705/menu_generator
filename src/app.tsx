import * as React from 'react'
import {
    Route,
    Switch,
  } from 'react-router-dom'
import './index.scss'
import { MenuPage } from './menu-page'

export const App = () => (
  <>
      <header>
        <h1>Customize your menu 👩‍🍳</h1>
      </header>
      <main>
        <Switch>
          <Route path="/:deepLinkState?" exact component={MenuPage} />
        </Switch>
      </main>
      <footer>
        <div>
          [ ©️ 2019 <a href="https://github.com/bartlett705">Ahmad K</a> ]
        </div>
      </footer>
      </>
  )
