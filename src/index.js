import '@babel/polyfill';
import { createElement } from 'react';
import { render } from 'react-dom';

import App from './common/App';

const MOUNT_NODE = document.getElementById('root');

render(createElement(App, {}, null), MOUNT_NODE);
