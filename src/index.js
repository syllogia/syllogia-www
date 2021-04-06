import React from 'react'
import ReactDOM from 'react-dom'
import logo from './assets/syllogia.svg'
import 'sass-reset'
import './styles/main.scss'

const App = () => (
    <div className="app">
        <header>
            <img src={logo} alt="logo" />
        </header>
    </div>
)

ReactDOM.render (<App />, document.getElementById ('root'))
