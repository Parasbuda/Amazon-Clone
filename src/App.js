import React from "react"
import "./App.css"
import Header from "./Component/Header/Header"
import Home from "./Page/Home/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Checkout from "./Page/Checkout/Checkout"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route path="/logout">
            <h1>Logout Component</h1>
          </Route>
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
