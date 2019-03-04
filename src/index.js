import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo01 from './components/demo01/demo1'
import Demo02 from './components/demo02/demo02'
import Demo03 from './components/demo03/demo03'
import Demo04 from './components/demo04/demo04'
import Demo05 from './components/demo05/demo05'
import Demo06 from './components/demo06/demo06'
import Demo07 from './components/demo07/demo07'
import Demo08 from './components/demo08/demo08'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo08 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
