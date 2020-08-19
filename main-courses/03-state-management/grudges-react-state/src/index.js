import React from 'react'
import ReactDOM from 'react-dom'

import Application from './Application'
import { GrudgeProvider } from './GrudgeContext'

import './style.scss'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <GrudgeProvider>
        <Application />
    </GrudgeProvider>,
    rootElement
)