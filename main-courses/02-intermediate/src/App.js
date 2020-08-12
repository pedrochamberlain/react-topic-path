import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import NavBar from './components/NavBar'

const SearchParams = lazy(() => import('./pages/SearchParams'))
const Details = lazy(() => import('./pages/Details'))

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <NavBar />
                <Suspense fallback={<h1>Loading route ...</h1>}>
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </Suspense>
            </div>
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('root'))