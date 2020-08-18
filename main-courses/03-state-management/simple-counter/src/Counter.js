import React, { useState, useEffect } from 'react'

const useLocalStorage = (initialState, key) => {
    const get = () => {
        const storage = localStorage.getItem(key)
        if (storage) return JSON.parse(storage).value
        return initialState
    };

    const [value, setValue] = useState(get())

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }))
    }, [value])

    return [value, setValue]
}

const Counter = ({ max, step }) => {
    const [count, setCount] = useLocalStorage(0, 'count')

    const increment = () => setCount(() => {
        if (count > max) return count
        return count + step
    })
    const decrement = () => setCount(count - step)
    const reset = () => setCount(0)

    useEffect(() => {
        document.title = `Counter: ${count}`
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