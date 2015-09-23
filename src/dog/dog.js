import m from 'mithril';
import data from '../shared/data.js';

module.exports.controller = function() {
	var vm = this;
	vm.dogUrl = m.route.param('dogUrl')
	console.log(vm.dogUrl);
	if (!vm.dogUrl || vm.dogUrl === 'undefined') {
		m.route('/');
	}
	return vm;
};

module.exports.view = function(vm) {
	return m('p', vm.dogUrl);
};