import m from 'mithril';

import main from './main/main.js';

m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', {
	'/': main,
	'/past-dogs': {},
	'/current-dogs': {},
	'/about': {}
});