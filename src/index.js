//1) Se necesita la variable React en scope
import React from "react" 
//2) Se necesita la varaible ReactDOM en scope
import ReactDOM from "react-dom"
//3) Necesitamos una aplicación de React
//const App = () => "Hola Mundo"
import App from "./App"

import "./style.css"

//4) Necesitamos dibujar la aplicación en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))
