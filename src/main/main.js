import m from 'mithril';
var $ = window.jQuery = require('../../bower_components/jquery/dist/jquery.js');
require('../../bower_components/bootstrap/dist/js/bootstrap.js');
var main = module.exports = {};


main.view = function() {
    return m('.container', [
    	m('br'),
        m('.jumbotron', m('h1', 'Welcome!')),
        [m(".carousel.slide[data-ride='carousel'][id='carousel-example-generic']", [
            m("ol.carousel-indicators", [
                m("li.active[data-slide-to='0'][data-target='#carousel-example-generic']"),
                m("li[data-slide-to='1'][data-target='#carousel-example-generic']"),
                m("li[data-slide-to='2'][data-target='#carousel-example-generic']")
            ]),
            m(".carousel-inner[role='listbox']", [
                m(".carousel-item.active", [
                    m("img[alt='First slide']", {
                    	alt: 'Test',
                    	src: 'test.jpg'
                    })
                ]),
                m(".carousel-item", [
                    m("img[alt='Second slide']", {
                    	alt: 'Test',
                    	src: 'test.jpg'
                    })
                ]),
                m(".carousel-item", [
                    m("img[alt='Third slide']", {
                    	alt: 'Test',
                    	src: 'test.jpg'
                    })
                ])
            ]),
            m("a.left.carousel-control[data-slide='prev'][href='#carousel-example-generic'][role='button']", [
                m("span.icon-prev[aria-hidden='true']"),
                m("span.sr-only", "Previous")
            ]),
            m("a.right.carousel-control[data-slide='next'][href='#carousel-example-generic'][role='button']", [
                m("span.icon-next[aria-hidden='true']"),
                m("span.sr-only", "Next")
            ])
        ])]
    ]);
};

$('.carousel').carousel()

/*
header
	.container
		h1 Welcome!
		.carousel-wrapper
			carousel(interval="5000")
				slide(ng-repeat="slide in Data.slides", active="slide.active")
					img(ng-src="{{slide.url}}", style="margin: auto;")
footer*/
