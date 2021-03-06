import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      /*Request in Dribbble - Description of Shot */
      pictures: Ember.$.getJSON('https://api.dribbble.com/v1/shots/'+params.picture_id+'?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=?')
    });
    // return Ember.$.getJSON('https://api.dribbble.com/v1/shots?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=?');

    // $.getJSON('https://api.dribbble.com/v1/shots?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=meta', function(resp) {
    //  if (resp.data.length > 0) {
    //    $.each(resp.data.reverse(), function(i, val) {
    //      $('#dribbble').prepend('<li class="box"><img src="' + val.images.normal + '" /><h2>' + val.title + '</h2><p><a href="' + val.html_url + '">original post &rarr;</a></p></li>');
    //    });
    //  } else {
    //    $('#dribbble').append('<li>No shots.</li>');
    //  }
    // });
  }
});
