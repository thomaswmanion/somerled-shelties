import dogs from '../shared/dogs';
import m from 'mithril';


exports.controller = function() {
    var vm = this;
    jQuery.extend(vm, dogs.controller());
    vm.dogs = [];
    for (var i = 0; i < 100; i++) {
        var type = i % 3;
        if (type === 0) {
            vm.dogs.push({
                mainPhoto: 'test.jpg',
                showName: 'Jr High Crush',
                callName: 'Flash Other',
                url: 'flash'
            })
        }
        else if (type === 1) {
            vm.dogs.push({
                mainPhoto: 'joker.jpg',
                showName: 'Joker',
                callName: 'Joker'
            })
        }
        else if (type === 2) {
            vm.dogs.push({
                mainPhoto: 'third.png',
                showName: 'Joker',
                callName: 'Joker'
            });   
        }
    }
}

exports.view = function(vm) {
	return [m('h1.text-center.dog-title-color', 'Retired Dogs'),
	m('hr.text-as-border-color'),
	dogs.view(vm)];
};
