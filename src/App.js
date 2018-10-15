import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './components/Lister.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  componentWillReceiveProps(nextProps) {
      //  this.setState({ content: content });
  }

  componentWillUnmount() {

  }

  componentDidMount() {

    this.setState({didMount: true });
  }

  render() {
    const { items } = this.state

    return (
      <div className="App">
        <div items={items} />
      </div>
    );
  }
}

export default App;
