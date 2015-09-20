import './index.scss';
window.jQuery = require('../bower_components/jquery/dist/jquery.js'); //Required by bootstrap
require('../bower_components/bootstrap/dist/js/bootstrap.js');
import m from 'mithril';
import navbar from './navbar.js';
import './routes.js'


m.module(document.getElementById('nav'), navbar);