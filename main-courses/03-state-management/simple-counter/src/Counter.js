import React from 'react'

class Counter extends React.Component {
    render() {
        return (
            <main className="Counter">
                <p className="count">0</p>
                <section className="controls">
                    <button>Increment</button>
                    <button>Decrement</button>
                    <button>Reset</button>
                </section>
            </main>
        );
    }
}

export default Counter