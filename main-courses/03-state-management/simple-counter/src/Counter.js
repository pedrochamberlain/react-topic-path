import React from 'react'

const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState')
    if (storage) return JSON.parse(storage)
    return { count: 0 }
}

const updatePageTitle = (newTitle) => {
    document.title = newTitle
}

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = getStateFromLocalStorage()

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState((state, props) => {
            if (state.count >= props.max) return
            return { count: state.count + props.step }
        }, () => {
            localStorage.setItem('counterState', JSON.stringify(this.state))
            updatePageTitle(':)')
        })
    }

    decrement() {
        this.setState(() => {
            return { count: this.state.count - 1 }
        }, () => {
            updatePageTitle(':(')
        })
    }

    reset() {
        this.setState(() => {
            return { count: 0 }
        }, () => {
            updatePageTitle(':|')
        })
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