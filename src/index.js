
import React from 'react';
import ReactDOM from 'react-dom';

require('stylus/main.styl');


const App = () => <div><button className="pure-button pure-button-primary">A Primary Button</button></div>;

ReactDOM.render(<App />, document.getElementById('root'));