import m from 'mithril';
require('./dogs.scss');

import Masonry from '../../bower_components/masonry/masonry.js';

function config(el, isInit, ctx) {
    var setup = function() {
        var msnry = new Masonry(el, {
            itemSelector: '.masonry-brick',
            transitionDuration: '0.5s'
        });
    };
    setTimeout(setup, 0);
    setTimeout(setup, 2000);
    setTimeout(setup, 10000);
}

module.exports.view = function(vm) {

    if (!vm.dogs || !vm.dogs.map) {
        return '';
    }
    return m('.container', [
        m('.grid.row', {
            config: config
        }, [
            vm.dogs.map(function(dog) {
                var imageProps = {
                    src: dog.mainPhoto,
                    alt: dog.showName
                };
                var viewConfig = {
                    href: '/view/' + dog.url,
                    config: m.route
                };
                return m('.col-xs-12.col-sm-6.col-md-4.col-lg-3.masonry-brick.card.card-block', [
                    m('.card-contents', [
                        m('img.img-responsive.img-center', imageProps),
                        m('.card-block', [
                            m('h4.cart-title', dog.showName),
                            m('p.card-text', dog.description),
                            m('a.btn.btn-primary.full-width', viewConfig, 'View')
                        ])
                    ])

                ]);
            })
        ])
    ]);
};

module.exports.controller = function() {
    var vm = this;
    return vm;
};