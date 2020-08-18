import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState((state, props) => {
            if (state.count >= props.max) return
            return { count: state.count + props.step }
        }, () => {
            console.log('State was updated to ', this.state)
        })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    reset() {
        this.setState({ count: 0 })
    }

    render() {
        const { count } = this.state

        return (
            <main className="Counter">
                <p className="count">{count}</p>
                <section className="controls">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </main>
        );
    }
}

export default Counter