import m from 'mithril';
require('./dogs.scss');

import Masonry from '../../bower_components/masonry/masonry.js';

function config(el, isInit, ctx) {
    setTimeout(function() {
        var msnry = new Masonry(el, {
            itemSelector: '.masonry-brick',
            transitionDuration: '0.5s'
        });
    }, 0)
}

module.exports.view = function(vm) {

    if (!vm.dogs) {
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
                    onclick: vm.navigateTo(dog),
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
    vm.navigateTo = function(dog) {
        return function() {
            m.route('/view/' + dog.url)
        };
    }
    return vm;
};
/*
<h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Button</a>


.container
	.row(masonry='{ "transitionDuration" : "0.0s" , "itemSelector" : ".masonry-brick"}')
		.col-sm-6.col-md-4.masonry-brick.item(ng-repeat='dog in dogs')
			.thumbnail.dogs.text-bg(ng-click='navigateTo(dog)')
				img.img-responsive(src='{{dog.mainPhoto}}', alt='{{dog.showName}}')
				.caption
					h3 {{dog.showName}}
					h4 {{dog.callName}}*/
