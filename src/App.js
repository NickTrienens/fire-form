import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon  } from 'antd';
import Lister from "./components/Lister.js";
import ExModal from './components/ExModal.js';
import createBrowserHistory from 'history/createBrowserHistory'

const { Header, Footer, Sider, Content } = Layout;
export const history = createBrowserHistory();

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [{name: "hello"}, {name: "hello4356"}, {name: "hello3"}] }
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
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
           <div className="logo" />
           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
             <Menu.Item key="1">
               <Icon type="user" />
               <span className="nav-text">nav 1</span>
             </Menu.Item>
             <Menu.Item key="2">
               <Icon type="video-camera" />
               <span className="nav-text">nav 2</span>
             </Menu.Item>
             <Menu.Item key="3">
               <Icon type="upload" />
               <span className="nav-text">nav 3</span>
             </Menu.Item>
           </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff',  margin: '24px 16px 0', padding: 0 }} ><h1>Hello </h1></Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
         <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
           <Lister
             items={items}
             rowMaker={(item, index)=>{ return <li style={{ textAlign: 'left' }} key={index}>{item.name}</li> } }
           />
       </div>
      </Content>
     <Footer><ExModal /></Footer>
   </Layout>
 </Layout>

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
