import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {createStore} from "redux"
import { Provider } from "react-redux"

const defualtState = {
    cash:0
}

const reducer = (state = defualtState,action)=>{
    switch (action.type) {
        case "ADD_CASH":
            return {...state,cash:state.cash + action.payload}
        case "GET_CASH":
            return {...state,cash:state.cash - action.payload}
        
        default:
            return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <Provider store={store}>
        <App/>
    </Provider>
    </>
)