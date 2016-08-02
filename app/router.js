import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  dribbble_access_token: "442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8"
});

Router.map(function() {
  /*Router index (Shots popular)*/
  this.route('index', { path: '/' });
  /*Rotas Author (perfil e shots of author) e Picture (Descrição do Shot)*/
  this.route('author', { path: '/:author_id' }, function() {
    this.route('picture', { path: '/:picture_id' });
  });
});

export default Router;
