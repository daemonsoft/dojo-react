import React from 'react';
import ReactDOM from 'react-dom';
import MotelAction from './actions/MotelAction';
import MotelGrid from './components/MotelGrid.jsx';

setInterval(function(){
	MotelAction.fetchlist();
	}, 5000);

ReactDOM.render(<MotelGrid />, document.getElementById('app'));