import React from 'react'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'

import SearchParams from './pages/SearchParams'
import Details from './pages/Details'

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to='/'>Adopt Me!</Link>
                </header>
                <Router>
                    <SearchParams path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('root'))