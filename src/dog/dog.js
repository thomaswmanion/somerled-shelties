import m from 'mithril';
import data from '../shared/data.js';
var lookupDog = function(url) {
	var dogs = data.current.concat(data.retired);
	for (var i = 0; i < dogs.length; i++) {
		var dog = dogs[i];
		if (dog.url === url) {
			return dog;
		}
	}
	return null;
};
var dog = module.exports = {};
dog.controller = function() {
	var vm = this;
	vm.dogUrl = m.route.param('dogUrl');
	vm.dog = lookupDog(vm.dogUrl);
	if (!vm.dog) {
		m.route('/');
	}
};

dog.view = function(vm) {
	return m('.container', [
		m('.row', [
			m('.caption.text-center', [
				m('h1.inline.dog-title-color')
			]),
			m('hr.text-as-border-color'),
			m('img.center.cover.rounded.img-responsive', {
				src: vm.dog.mainPhoto,
				alt: vm.dog.showName
			})
		]),
		m('.row', [
			m('h2.text-as-bg', 'About ' + vm.dog.callName),
			m('.desc-box.rounded.text-bg', [
				m('.desc', [
					m('p', vm.dog.description)
				])
			])
		]),
		m('hr.text-as-border-color'),
		m('.row')
	]);
};

/*
div(ng-include='"components/navbar/navbar.html"')
.container
	.row
		.caption.text-center
			h1.inline.dog-title-color {{dog.showName}} ({{dog.callName}})
		hr.text-as-border-color
		img.center.cover.rounded.img-responsive(src='{{dog.mainPhoto}}', alt='{{dog.showName}}')
	.row(ng-show='dog.description')
		h2.text-as-bg About {{dog.callName}}
		.desc-box.rounded.text-bg.rounded
			.desc(ng-repeat='descLine in dog.description')
				p {{descLine}}
	hr.text-as-border-color
	.row(masonry='{ "transitionDuration" : "0.0s" , "itemSelector" : ".masonry-brick"}')
		.col-sm-4.col-md-4.item.masonry-brick.masonry-tile(ng-repeat='image in dog.images')
			.thumbnail
				a.pointer(ng-click="openLightboxModal($index)")
					img(src='{{image.url}}')
footer*/