import * as $ from './node_modules/jquery';
import Popper from './node_modules/popper.js.js';
import Tether from './node_modules/tether';
import './node_modules/bootstrap';
import './node_modules/bootstrap/dist/css/bootstrap.min.css'

window.Tether = Tether;
window.Popper = Popper;
window.jQuery = window.$ = $;