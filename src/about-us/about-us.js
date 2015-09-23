var aboutUs = module.exports = {};
import m from 'mithril';

aboutUs.view = function() {
    return [m('h1.text-center.dog-title-color', 'About Us'), 
    m('p', 'Coming soon.')];
};
