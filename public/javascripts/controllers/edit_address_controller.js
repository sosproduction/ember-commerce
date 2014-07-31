var EditAddressController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get('model').save();
      this.redirectToModel();
    },
    cancel: function() {
      this.transitionToRoute('addresses');
    }
  },
  redirectToModel: function() {
    var router = this.get('target');
    var model = this.get('model');
    router.transitionTo('address', model);
  }
});

module.exports = EditAddressController;
