import m from 'mithril';
import data from '../shared/data.js';
var $ = window.jQuery = require('../../bower_components/jquery/dist/jquery.js');
require('../../bower_components/bootstrap/dist/js/bootstrap.js');
var main = module.exports = {};


main.view = function() {
    return m('.container', [
        m('h1.text-center.dog-title-color', 'Somerled Shetland Sheepdogs'),
        m('hr.text-as-border-color'), [m(".carousel.slide[data-ride='carousel'][id='main-carousel']", [
            m("ol.carousel-indicators", 
                data.carousel.map(function(image, index) {
                    var active = '';
                    if (image.active) {
                        active = '.active';
                    }
                    return m("li" + active + "[data-slide-to='" + index + "'][data-target='#main-carousel']");
                })
            ),
            m(".carousel-inner[role='listbox']",
                data.carousel.map(function(image) {
                    var carouselItem = '.carousel-item';
                    if (image.active) { 
                        carouselItem += '.active';
                    }
                    return m(carouselItem, [
                        m("img.img-responsive", {
                            alt: image.alt,
                            src: image.src
                        })
                    ]);
                })
            ),
            m("a.left.carousel-control[data-slide='prev'][href='#main-carousel'][role='button']", [
                m("span.icon-prev[aria-hidden='true']"),
                m("span.sr-only", "Previous")
            ]),
            m("a.right.carousel-control[data-slide='next'][href='#main-carousel'][role='button']", [
                m("span.icon-next[aria-hidden='true']"),
                m("span.sr-only", "Next")
            ])
        ])]
    ]);
};

$('.carousel').carousel()