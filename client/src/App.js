import React,{Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.js';

import './App.css';

//components

import InputTodo from "./components/InputTodo";
function App() {
  return (<Fragment>
    <InputTodo />
  </Fragment>
  );
  
}

export default App;
