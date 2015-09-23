import m from 'mithril';

import main from './main/main.js';
import aboutUs from './about-us/about-us.js';
import breedingPhilosophy from './breeding-philosophy/breeding-philosophy.js';
import retired from './retired/retired.js';
import current from './current/current.js';
import contactUs from './contact-us/contact-us.js';
import dog from './dog/dog.js';

m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', {
	'/': main,
	'/about-us': aboutUs,
	'/breeding-philosophy': breedingPhilosophy,
	'/retired': retired,
	'/current': current,
	'/contact-us': contactUs,
	'/view/:dogUrl': dog
});