import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('evaluation', function() {
    this.route('event', {path: '/event/:slug'});
	this.route('new');
  });
});

export default Router;
