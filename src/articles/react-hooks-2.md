---
title: "Using each React Hook, with examples"
description: "A bite sized overview of what each React hook can do"
date: "2019-05-16"
path: "/react-hooks-2"
---

About two weeks ago, I published an article called [Introduction to React Hooks](https://christopherkade.com/blog/react-hooks), this was a great opportunity to have a concrete understanding of Hooks in general, especially two of them: `useState` and `useEffect`.

Today, we'll review every single hook that is currently available, with short and sweet examples.   
I really want this article to be a go-to in case you forget how to use or why to use a certain hook 😄

This isn't a deep dive into how they work exactly, it's meant for you to get a quick headstart of reminder when needed.

> To enjoy this article as much as possible, be sure to be comfortable with React and to have an understanding of what Hooks are. If you need to catch up on that, I think you'll enjoy the [offical introduction](https://reactjs.org/docs/hooks-intro.html) or my [own introduction](https://christopherkade.com/blog/react-hooks).

### Basic hooks

- [useState](#useState)
- [useEffect](#useEffect)
- [useContext](#useContext)


### Additional hooks

- [useReducer](#useReducer)
- [useCallback](#useCallback)
- [useMemo](#useMemo)
- [useRef](#useRef)
- [useImperativeHandle](#useImperativeHandle)
- [useLayoutEffect](#useLayoutEffect)
- [useDebugValue](#useDebugValue)

<br><br>

## <a name="useState"></a> useState 

Syntax:

```jsx
// value -> the variable containing our internal state
// setValue -> the method used to update the state
// useState('') -> the hook itself, given the default state parameter
const [value, setValue] = useState("")

// ...

// Pass the state's new value as parameter to the updater
setValue("My new value")
```

`useState` allows you to have an internal state in a functional component (like `setState` for class-based components).

Example:

A component that binds its internal state to an input

```jsx
import React, { useState } from "react"

const ExampleUS = () => {
  const [value, setValue] = useState('')

  // On input, update the state with the new value
  const onChange = event => {
    setValue(event.target.value)
  }

  return (
    <article>
      <h1>useState example</h1>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      <p>
        Value: {value}
      </p>
    </article>
  )
}
```

<br>

### useState FAQ:

#### What if my state relies on its previous value? 🤔

You can get the state's previous value like so:

```jsx
setCount(prevCount => prevCount + 1)
```

#### What happens when the update method is called? 🤔

The component is re-rendered each time the update method is called.

<br><br>

## <a name="useEffect"></a> useEffect 

Syntax:

```jsx
// Triggered at each render
useEffect(() => {
  // ...
})

// Only triggered when data is updated
useEffect(() => {
  // ...
}, [data])

// Only triggered on first render
useEffect(() => {
  // ...
}, [])
```

By default, `useEffect` is called after every completed render. It allows you to write imperative code that does not have its place inside the body of a component (for example, querying a database).

If you want to trigger `useEffect` conditionally, you may use its second parameter, an array of variables. Once one of these variables is updated, `useEffect` will trigger.  
If you wish to trigger it only on the component's first render, pass an empty array (`[]`).

Some people see it as the equivalent to [lifecycle hooks](https://reactjs.org/docs/react-component.html#componentdidmount), but as Dan Abramov states in this [article](https://overreacted.io/a-complete-guide-to-useeffect/):

> It’s only after I stopped looking at the useEffect Hook through the prism of the familiar class lifecycle methods that everything came together for me.

Example:

A component that fetches an image on its first render:

```jsx
import React, { useState, useEffect } from "react"

const ExampleUE = () => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => setUrl(data.message))
  }, [])

  return (
    <article>
      <h1>useEffect example</h1>
      <img src={url} alt="dog picture" />
    </article>
  )
}
```

<br>

### useEffect FAQ:

#### I need to execute useEffect before my component dismounts, similar to [componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount) 🤔

```jsx
useEffect(() => {
  // ...
  return () => {
    // Will be executed before the component leaves the screen
  }
})
```

<br><br>

## <a name="useContext"></a> useContext 

> Be sure to know about React's [Context API](https://reactjs.org/docs/context.html)

Syntax:

```jsx
const value = useContext(MyContext)
```



<br>

### useContext FAQ:
