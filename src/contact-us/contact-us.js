var contactUs = module.exports = {};
import m from 'mithril';
require('./contact-us.scss');

contactUs.controller = function() {
    var vm = this;
    vm.email = m.prop('');
    vm.emailValid = m.prop(false);
    vm.emailFirst = m.prop(true);
    vm.emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

    vm.name = m.prop('');
    vm.nameValid = m.prop(false);
    vm.nameFirst = m.prop(true);

    vm.message = m.prop('');

    vm.sendingMessage = m.prop('Please fill out this form. We will get back to you as soon as possible.');
};

contactUs.view = function(vm) {
    return [m('h1.text-center.dog-title-color', 'Contact Us'),
        m('.container', [
            m('p', vm.sendingMessage()),
            m('.row', [
                m('.col-sm-6', [
                    m('input#name.form-control.validate', {
                        oninput: function() {
                            m.withAttr('value', vm.name)();
                            vm.nameFirst(false);
                            vm.nameValid(!!vm.name());
                        },
                        class: !vm.nameValid() && !vm.nameFirst() ? 'error' : '',
                        value: vm.name(),
                        type: 'text',
                        placeholder: 'Name'
                    })
                ]),
                m('.col-sm-6', [
                    m('input#name.form-control.validate', {
                        oninput: function() {
                            m.withAttr('value', vm.email)();
                            vm.emailFirst(false);
                            vm.emailValid(!!vm.emailRegex.test(vm.email()));
                        },
                        class: !vm.emailValid() && !vm.emailFirst() ? 'error' : '',
                        value: vm.email(),
                        type: 'text',
                        placeholder: 'Email'
                    })
                ])
            ]),
            m('.row', [
                m('.col-sm-12', [
                    m('textarea.form-control[rows="2"]', {
                        placeholder: 'Message',
                        oninput: m.withAttr('value', vm.message)
                    }, vm.message())
                ])
            ]),
            m('.row', [
                m('.col-sm-12', [
                    m('input.form-contro.btn.btn-primary.full-width[type="submit"]', {
                        onclick: function() {
                            vm.nameFirst(false);
                            vm.emailFirst(false);

                            if (vm.nameValid() && vm.emailValid()) {
                                vm.sendingMessage('Sending...');
                                m.request({
                                        method: 'POST',
                                        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                                        data: {
                                            key: 'SFgKA7x4VBsqa8lMPxKzZQ',
                                            message: {
                                                from_email: 'tomskytwo@gmail.com',
                                                to: [{
                                                    email: 'tomskytwo@gmail.com',
                                                    name: 'Tom',
                                                    type: 'to'
                                                },
                                                {
                                                    email: 'morgan@somerled.us',
                                                    name: 'Morgan',
                                                    type: 'to'
                                                }],
                                                autotext: true,
                                                subject: 'Somerled Email from ' + vm.name(),
                                                text: 'Name: ' + vm.name() + '\nEmail: ' + vm.email() + '\nMessage: ' + vm.message()
                                            }
                                        }
                                    })
                                    .then(function(response) {
                                        vm.name('');
                                        vm.email('');
                                        vm.message('');
                                        vm.sendingMessage('Sent! Thank you for reaching out to us.');
                                    });
                            }
                        }
                    })
                ])
            ])
        ])
    ]
};
