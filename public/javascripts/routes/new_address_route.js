var NewAddressRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('edit_address', { controller: 'new_address' });
  },
  model: function() {
    return this.store.createRecord('address');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }
});

module.exports = NewAddressRoute;
