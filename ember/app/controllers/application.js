import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	actions: {
		changeNav (linkTo) {
			this.transitionToRoute(linkTo[0].routeTo);
		},

		login() {
			let { login, password } = this.getProperties('login', 'password');
			this.get('session').authenticate('authenticator:keeko', login, password).catch((reason) => {
				// console.log(reason);
			});
		},

		logout() {
      		this.get('session').invalidate();
    	}
	}
});
