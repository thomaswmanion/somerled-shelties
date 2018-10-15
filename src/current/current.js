import dogs from '../shared/dogs';
import m from 'mithril';
import data from '../shared/data.js';

exports.controller = function() {
    var vm = this;
    jQuery.extend(vm, dogs.controller());
    vm.dogs = data.current;
};

exports.view = function(vm) {
	return [m('h1.text-center.dog-title-color', 'Current Dogs'),
	m('hr.text-as-border-color'),
	dogs.view(vm)];
};
