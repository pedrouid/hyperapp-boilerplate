import { h, app } from 'hyperapp'; // eslint-disable-line
import home from './pages/home';
import { INITIAL_STATE, actions } from './actions';
import './index.css';

app(INITIAL_STATE, actions, home, document.body);
