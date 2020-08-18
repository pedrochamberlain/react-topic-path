import React, { useState, useEffect } from 'react'

const getCountFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState')
    if (storage) return JSON.parse(storage).count
    return 0
}

const storeStateInLocalStorage = (count) => {
    localStorage.setItem('counterState', JSON.stringify(count))
}

const Counter = ({ max, step }) => {
    const [count, setCount] = useState(getCountFromLocalStorage)

    const increment = () => setCount(() => {
        if (count > max) return count
        return count + step
    })
    const decrement = () => setCount(count - step)
    const reset = () => setCount(0)

    useEffect(() => {
        document.title = `Counter: ${count}`
        storeStateInLocalStorage({ count })
    }, [count])

    return (
        <main className="Counter">
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </main>
    )
}

export default Counter