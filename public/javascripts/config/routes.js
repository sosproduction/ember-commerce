var App = require('./app');

App.Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('signup');
  this.route('people');
  this.route('addresses');
  this.route('protected');
  this.resource('person', { path: '/people/:person_id' });
  this.route('edit_person', { path: '/people/:person_id/edit' });
  this.route('new_person', { path: '/people/new' });

  this.resource('address', { path: '/addresses/:address_id' });
  this.route('edit_address', { path: '/addresses/:address_id/edit' });
  this.route('new_address', { path: '/addresses/new' });
});