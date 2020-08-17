import React from 'react'
import { render } from 'react-dom'

import Counter from './Counter'

import './style.scss'

const Application = () => {
    return (
        <React.StrictMode>
            <main className="Application">
                <section className="Counters">
                    <Counter />
                </section>
            </main>
        </React.StrictMode>
    )
}

render(<Application />, document.getElementById('root'))