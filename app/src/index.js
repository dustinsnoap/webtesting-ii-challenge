import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyle from './design/global-styles'
import App from './components/app'

const root = document.getElementById('root')
ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    root
)