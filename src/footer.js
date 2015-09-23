var footer = module.exports = {};
import m from 'mithril';

footer.controller = function() {
	this.year = new Date().getFullYear();
}
footer.view = function(vm) {
	return m('footer', [
		m('hr.text-as-border-color'),
		m('p.text-center.text-as-bg', 'Somerled Shetland Sheepdogs © ' + vm.year)
	]);
};

//<footer class="ng-scope"><hr class="text-as-border-color"><p class="text-center text-as-bg">Somerled Shetland Sheepdogs © <span ng-bind="year" class="ng-binding">2015</span></p></footer>