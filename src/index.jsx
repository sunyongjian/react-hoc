import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes';
import './index.less';

class App extends React.Component {
  render() {
	  return (
  <div>
    <h2>welcome to react-quick-start</h2>
    <Router>
      <div>
        <div className="menu">
          <Link to="usual" >属性代理</Link>
          <Link to="form" >抽离state</Link>
          <Link to="inheritance" >反向继承</Link>
          <Link to="container" >Container</Link>
          <Link to="hoc-usual" >跟Container对比</Link>
        </div>
        <Routes />
      </div>
    </Router>
  </div>
  	);
  }
}

render(<App />, document.getElementById('root'));

