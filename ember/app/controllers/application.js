import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	index: Ember.computed('currentPath', function() {
		return this.get('currentPath') === 'index';
	}),

	actions: {
		changeNav (linkTo) {
			this.transitionToRoute(linkTo[0].routeTo);
		},

		login() {
			let { login, password } = this.getProperties('login', 'password');
			this.get('session').authenticate('authenticator:keeko', login, password).catch(() => {
				// console.log(reason);
			});
		},

		logout() {
      		this.get('session').invalidate();
    	}
	}
});
