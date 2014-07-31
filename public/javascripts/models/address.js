
var Address = DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  zipcode: DS.attr('string'),
  phone: DS.attr('string'),
  state_name: DS.attr('string'),
  alternative_phone: DS.attr('string'),
  company: DS.attr('string')
});

module.exports = Address;

