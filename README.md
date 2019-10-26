<div style="display:flex; justify-content: center">
    <img src="https://raw.githubusercontent.com/fourcolors/mr-react-router/master/stash.jpg" alt=" Mr. React Router Stash">
</div>

# Mr React Router
Simple react router than can get you up and running in 5 minutes

### Setup
1. `npm install mr-react-router --save` or `yarn install mr-react-router`
2. Include the router by importing it ie: `import Router from 'mr-react-router'`
3. Declare routes and pass the to the router:
```
import Main from './main' // main is a component you define

const isLoggedIn = () =>  {
  // any logic that returns true or false. True will return trigger the redirect
  return true
}

const routes = [{
  path: '/',
  component: Main,
  check: isLoggedIn,
  redirect: '/login',
}]

const App = () => {
  return (
    <Provider store={store}>
      <Router routes={routes} />
    </Provider>
  )
}
```

### This is just the start
Almost anyone can understand this type of router and it's flexible for 90% of the use cases. I'll be adding the following in the future:

### To Do
- [ ] Grouped route checks
- [ ] React hooks
- [ ] Link to helpers
- [ ] Named routes
- [ ] Better async support

