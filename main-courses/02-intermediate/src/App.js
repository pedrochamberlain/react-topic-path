import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import NavBar from './components/NavBar'

import SearchParams from './pages/SearchParams'
import Details from './pages/Details'

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <NavBar />
                <Router>
                    <SearchParams path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('root'))