import React, {Component} from 'react';
import { observer } from 'mobx-react'
import { values } from "mobx";
import './App.css';

class App extends Component  {
  render() {
    const {store} = this.props
    return (
      <div className="App">
        { values(store.todos).map((todo, index)=>(
          <p key={index}>{todo.name}</p>
        ))}
      </div>
    );
  }
}

export default observer(App);
