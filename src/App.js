import React from "react"
import Header from "./Component/Header/Header"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>Homepage Component</h1>
          </Route>
          <Route path="/login">
            <h1>Login Component</h1>
          </Route>
          <Route path="/logout">
            <h1>Logout Component</h1>
          </Route>
          <Route path="/checkout">
            <h1>Checkout Component</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
