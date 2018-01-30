import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import WebFont from 'webfontloader';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

WebFont.load({
  google: {
    families: ['Libre Barcode 39 Text','Amatic SC','Orbitron','Cabin Sketch','Shadows Into Light Two','VT323','Frijole','Freckle Face','Fredericka the Great','Fontdiner Swanky','Slackey','Finger Paint','Mystery Quest','Henny Penny','Barrio','Irish Grover','Eater']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


