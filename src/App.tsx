import React from 'react'
import { Provider } from 'react-redux';
import store from './reduce'

import { HashRouter  } from "react-router-dom";
import { AliveScope } from 'react-activation'
import { Router } from "@/router";

function App() {

  return (
    <Provider store={store}>
      <HashRouter ><AliveScope>
        <Router></Router></AliveScope></HashRouter>
    </Provider>
  )
}

export default App