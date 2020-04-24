import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Invoice from './models/invoice'
import store from './models/todos'

const myStore = store.create({
  users: {},
  todos: {
      "1": {
          name: "Eat a cake",
          done: false
      },
      "2": {
        name: "Eat a pancake",
          done: false
      }
  }
})
const invoice = Invoice.create({
  currency:"USD",
  is_paid: false
})

ReactDOM.render(
  <React.StrictMode>
    <App store={myStore}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
