// This is mostly code from react.js.org

import React from 'react'
import { Link, Redirect } from '@reach/router'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    // This is a lifecycle function, it'll be invoked whenever there's an error.
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught an error:', error, info)
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            // You could also use the navigate function from the Reach Router package:
            // setTimeout(() => navigate, 5000)
            setTimeout(() => this.setState({ redirect: true }), 5000)
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }

        if (this.state.hasError) {
            return (
                <h1>
                    There was an error with this listing.
                    {" "}
                    <Link to='/'>Click here</Link> to go back to the home page or wait for five seconds.
                </h1>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary