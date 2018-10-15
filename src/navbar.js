import m from 'mithril';
var navbar = module.exports = {};

var createLink = function(uri) {
    return {
        config: m.route,
        href: uri
    };
};

var routes = [{
    title: 'Home',
    link: '/'
},
{
    title: 'About Us',
    link: '/about-us'
},
{
    title: 'Breeding Philosophy',
    link: '/breeding-philosophy'
},
{
    title: 'Retired Dogs',
    link: '/retired'
},
{
    title: 'Current Dogs',
    link: '/current'
},
{
    title: 'Contact Us',
    link: '/contact-us'
}];

navbar.view = function() {
    return [m("nav.navbar", [
        m("button.navbar-toggler.hidden-sm-up[data-target='#exCollapsingNavbar2'][data-toggle='collapse'][type='button']", "☰"),
        m(".collapse.navbar-toggleable-xs[id='exCollapsingNavbar2']", [
            m("a.navbar-brand", createLink('/'), "Somerled"),
            m("ul.nav.navbar-nav", [
                routes.map(function(route) {
                    return m('li.nav-item', [
                        m('a.nav-link', createLink(route.link), route.title)
                    ]);
                })
            ])
        ])
    ]),
    m('br')];
};
//m("li.nav-item.active", [
//m("a.nav-link", route('/'), ["Home ", m("span.sr-only", "(current)")])