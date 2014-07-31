var AddressRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('address');
  }
});

module.exports = AddressRoute;