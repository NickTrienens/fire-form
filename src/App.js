import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import './components/Lister';
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory();

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [{name: "hello"}] }
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

    const Home = (match) => (
        <Lister
           items={items}
           rowMaker={(item, index)=>{ return <li key={index}>item.name</li> } }
        />
    )

  	return (
      <Router history={history}>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
