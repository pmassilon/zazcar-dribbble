import Ember from 'ember';

export default Ember.Component.extend({
  size: 200,
  email: '',

  dribbbleUrl: Ember.computed('email', 'size', function() {
    var email = this.get('email').toLowerCase(),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + email + '?s=' + size;
  })
});
