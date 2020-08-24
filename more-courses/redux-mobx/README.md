# State Management with Redux & MobX

In this course, you’ll learn best practices for structuring your data and how to keep your application fast and nimble as your codebase grows. You’ll get your hands on multiple solutions for managing state in large React applications including Redux, Redux Thunk, Redux Observables and MobX.

## Prologue

### Pure & Impure functions
Pure functions take arguments and return values based on those arguments.

```zsh
const add = (a, b) => {
    return a + b
}
```

Impure functions can mutate things from outside their scope or produce side effects.
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

### What is Redux?
The whole state tree of your application is kept in one store, one plain JavaScript object.

Redux is small, having only about five functions:
```zsh
const {
    applyMiddleware,
    bindActionCreators,
    combineReducers,
    compose,
    createStore
} = Redux

# Compose function
const makeLouder = (string) => string.toUpperCase()
const repeatThreeTimes = (string) => string.repeat(3)
const embolden = (string) => string.bold()

const makeLouderAndRepeatThreeTimesAndEmbolden = compose(makeLouder, repeatThreeTimes, embolden)

#  createStore function

const reducer = (state = { value: 1 }, action) => {
    console.log('Something happened!', action)
    return state
}

const store = createStore(reducer)
store.dispatch({ type: 'ADD', payload: { ammount: 2 } })
```


## Links
- [Course Slides](https://static.frontendmasters.com/resources/2019-05-28-react-state/redux-mobx.pdf)