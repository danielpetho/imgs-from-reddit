import React, { Component } from 'react';
import ListItemContainer from '../containers/ListItemContainer';
import '../App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {

  render() {
    return (
      < div className="App" >
        <h1> SUM: {this.props.sum}</h1>
        First: <br />
        {this.props.todos.map((e) => {
          return (<ListItemContainer key={e} id={e} />);
        })}


        <hr />
        <div>
          {this.props.todosByName.map((e) => {
            return (<ListItemContainer key={e} id={e} />);
          })}
        </div>
        <Link to={"/newtodo"}>New todo</Link>
      </div >
    );
  };
};

export default App;
