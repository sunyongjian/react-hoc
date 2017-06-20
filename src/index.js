import React from 'react';
import { render } from 'react-dom';
import './index.less';

class App extends React.Component {
  render() {
	  return (
		  <div>
			  <img src={require('./logo.svg')}/>
			  <h2>welcome to react-quick-start</h2>
			</div>
		)
	}
}

render(<App/>, document.getElementById('root'));

