import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      /*Request in Dribbble - Perfil Author and Shots Popular*/
      author: Ember.$.getJSON('https://api.dribbble.com/v1/users/'+params.author_id+'?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=?'),
      pictures: Ember.$.getJSON('https://api.dribbble.com/v1/users/'+params.author_id+'/shots?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=?')
    });

    // return Ember.$.getJSON('https://api.dribbble.com/v1/users/{{user}}shots?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=?');
  }
});
