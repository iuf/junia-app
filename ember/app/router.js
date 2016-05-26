import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('evaluation', function() {
    this.route('event', {path: '/event/:slug'}, function() {
      this.route('import');
      this.route('startgroup', {path: '/:competition/:startgroup'});
    });
    this.route('new');
    this.route('statistics');
  });
});

export default Router;
