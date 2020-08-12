import React from "react"
import Header from "./Component/Header/Header"
import Home from "./Component/Home/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
       
        <Switch>
          <Route exact path="/">
          <Header />
           <Home/>
          </Route>
          <Route path="/login">
            <h1>Login Component</h1>
          </Route>
          <Route path="/logout">
            <h1>Logout Component</h1>
          </Route>
          <Route path="/checkout">
          <Header />
            <h1>Checkout Component</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
