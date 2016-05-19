import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('iuf.junia/event', {
			'start': '2015-10-02',
			'end': '2015-10-03'
		});
	},

	actions: {
		create() {
			this.modelFor(this.routeName).save();
			this.router.transitionTo('evaluation');
		}
	}
});
