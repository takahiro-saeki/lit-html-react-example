import React from 'react';
import { render } from 'react-dom';
import bundle from '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import adapter from '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'
import './web-components/Card'
import App from './App'

document.body.style.margin = 0;

render(<App />, document.getElementById('app'))
