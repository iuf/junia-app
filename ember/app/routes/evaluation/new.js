import Ember from 'ember';
import RollbackRoute from 'junia/mixins/rollback-route';

export default Ember.Route.extend(RollbackRoute, {
	model() {
		return this.store.createRecord('iuf.junia/event');
	},

	actions: {
		create() {
			this.modelFor(this.routeName).save().then((model) => {
				this.router.transitionTo('evaluation.event', model.get('slug'));
			});
		}
	}
});
