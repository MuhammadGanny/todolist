// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(<App/>,document.getElementById("root"))

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./TodoContext";
import "./index.css";

ReactDOM.render(
    <TodoProvider>
      <App />
    </TodoProvider>,
  document.getElementById("root")
);

