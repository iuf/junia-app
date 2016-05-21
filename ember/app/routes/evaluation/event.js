import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.queryRecord('iuf.junia/event', {
			filter: params
		}).then((events) => {
			if (events.length == 0) {
				this.transitionTo('evaluation');
			} else {
				return events[0];
			}
		});
	}
});
