# State Management with Redux & MobX

In this course, you’ll learn best practices for structuring your data and how to keep your application fast and nimble as your codebase grows. You’ll get your hands on multiple solutions for managing state in large React applications including Redux, Redux Thunk, Redux Observables and MobX.

## A Brief Recap on Pure & Impure functions
*Pure functions* take arguments and return values based on those arguments.

```zsh
const add = (a, b) => {
    return a + b
}
```

*Impure functions* can mutate things from outside their scope or produce side effects.
```zsh
const b

const add = (a) => {
    return a + b
}
```

Mutating arrays and objects is also impure. 

Some libraries can be used for evading mutations (<a href="https://immutable-js.github.io/immutable-js/docs/#/">Immutable.js</a>, <a href="https://swannodette.github.io/mori/">mori</a>) but approaches with vanilla JavaScript can lower the complexity in your code.

```zsh
# Copy object
const original = { a: 1, b: 2 }

const copy = Object.assign({}, original) # or { ...original }

# Extend an object
const original = { a: 1, b: 2 }
const extension = { c: 3 }
const extended = { ...original, ...extension}

# Copy an array
const original = [1, 2, 3]
const copy = [1, 2, 3].slice() # or [ ...original ]

# Extend an array
const original = [1, 2, 3]
const extended = original.concat(4)
const moreExtended = original. concat([4, 5])
```

## What is Redux?
Redux is an open-source JavaScript library for managing application state that is most commonly used with React or Angular. The whole state tree of your application is kept in one store, one plain JavaScript object.

## Core Redux Terms

### Store
A store is an object that holds the application's state tree. There should only be a single store in a Redux app, as the composition happens on the reducer level.

- `getState()` returns the current state of the store.
- `dispatch(action)` is a function that accepts an action or an async action, dispatching it to the store (fairly self-explanatory). This is the only way to trigger a state change.
- `subscribe(listener)` registers a function (ex.: `console.log()`) to be called on state changes.

### Action
An action is a plain object that represents an intention to change the state. Actions are the only way to get data into the store.

Actions must have a type field that indicates the type of action being performed. It's recommended to use strings for `type`.

### Reducer
```zsh
const reducer = (state, action) => {
    return state
}
```
A reducer (also called a reducing function) is a function that accepts a state and a value and returns a new state. Reducers calculate a new state given the previous state and an action. They **must** be pure functions.

## Redux Functions

### createStore(reducer, [preloadedState], [enhancer])
Creates a Redux store that holds the complete state tree of your app.

#### Arguments
1. `reducer` (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
2. `preloadedState` (any): The initial state. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it.
3. `enhancer` (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is `applyMiddleware()`.

#### Returns
(`Store`): An object that holds the complete state of your app. The only way to change its state is by dispatching actions. You may also subscribe ot the changes to its state to update the UI.

#### Example 
```zsh
import { createStore } from 'redux'

function calculatorReducer(state = { value: 1 }, action) {
    const value = state.value

    switch (action.type) {
        case 'ADD':
            const amount = action.payload.amount 
            return { value: value + amount }

        default:
            return { value: value }
  }
}

const store = createStore(calculatorReducer)

store.dispatch({
  type: 'ADD',
  payload: { 
      amount: 3
  }
})

console.log(store.getState())
# { value: 4 }
```

### combineReducers(reducers)
As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.
`combineReducers` helper function turns an object whose values are different reducing functions into a single reducing function you can pass to `createStore`.

#### Arguments
1. `reducers` (Object): An object whose values correspond to different reducing functions.

#### Returns
(`Function`): A reducer that invokes every reducer inside the `reducers` object, constructing a state object with the same shape.

#### Example
```zsh
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

function calculator(state = { value: 1 }, action) {
    const value = state.value

    switch (action.type) {
        case 'ADD':
            const amount = action.payload.amount 
            return { value: value + amount }

        default:
            return { value: value }
    }
}

const store = combineReducers(todos, calculator)
console.log(store.getState())
# { value: 1, todos: [] }

store.dispatch({ 
    type: 'ADD',
    payload: { value: 2 }
})
console.log(store.getState())
# { value: 3, todos: [] }
```

### applyMiddleware(...middleware)
Middleware is the suggested way to extend Redux with custom functionality. The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like Rx. It does so by letting you dispatch async actions in addition to normal actions.

#### Arguments
1. `...middleware` (arguments): Functions that conform to the Redux *middleware* API. 

#### Returns
(`Function`): A store enhancer that applies the given middleware.

#### Example
```zsh
const logger = ({ getState }) => {
    return next => (action) => {
        console.log('will dispatch', action)

        const returnValue = next(action)

        console.log('state after dispatch', getState())

        return returnValue
    }
}

const store = createStore(calculator, applyMiddleware(logger))
store.dispatch({
    type: 'ADD',
    payload: {
        value: 2
    }
})

# The lines below will be logged by the middleware:
# will dispatch: { type: 'ADD', payload: { value: 2 } }
# state after dispatch: { value: 3 }
```

### compose(...functions)
Composes functions from right to left.
This is a functional programming utility, and is included in Redux as a convenience.

#### Arguments
1. (`arguments`): The functions to compose.

#### Returns
(Function): The final function obtained by composing the given functions.

#### Example 
```zsh
const makeLouder = (string) => string.toUpperCase()
const repeatThreeTimes = (string) => string.repeat(3)
const embolden = (string) => string.bold()

const makeLouderAndRepeatThreeTimesAndEmbolden = compose(makeLouder, repeatThreeTimes, embolden)

makeLouderAndRepeatThreeTimesAndEmbolden('hi!')
# HI!
# HI!HI!HI!
# <b>HI!HI!HI!</b>
```

## Links
- [Course Slides](https://static.frontendmasters.com/resources/2019-05-28-react-state/redux-mobx.pdf)
- [Redux Docs](https://redux.js.org/api/api-reference)
- [Normalizr](https://github.com/paularmstrong/normalizr)
