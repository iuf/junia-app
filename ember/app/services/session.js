import Ember from 'ember';
import DS from 'ember-data';
import SessionService from 'ember-simple-auth/services/session';

export default SessionService.extend({
	store: Ember.inject.service(),
	permissions: [],

	init() {
		this._super(...arguments);

		let self = this;
		this.on('authenticationSucceeded', () => {
			// read permissions
			const data = self.get('data.authenticated.data');
			if (!Ember.isEmpty(data)) {
				self.updatePermissions(data);
			}
		});
		this.on('invalidationSucceeded', () => {
			self.permissions = [];
		});
	},

	updatePermissions(data) {
		let host = this.get('store').adapterFor('application').get('host');
		let namespace = this.get('store').adapterFor('application').get('namespace');
		let self = this;

		let bearer = data.id ? data.id : null;
		if (bearer === null) {
			return;
		}

		Ember.$.ajax(host + '/' + namespace + '/auth/permissions', {
			'method': 'GET',
			'headers': {
				'Authorization': 'Bearer ' + bearer
			},
			'dataType': 'json'
		}).done((response) => {
			self.permissions = response.data.attributes;
		});
	},

	hasPermission (moduleName, actionName) {
		return this.permissions[moduleName] && this.permissions[moduleName].indexOf(actionName) !== -1;
	},

 	user: Ember.computed('data.authenticated.data.attributes.user-id', 'isAuthenticated', function() {
		const userId = this.get('data.authenticated.data.attributes.user-id');
		if (this.get('isAuthenticated') && !Ember.isEmpty(userId)) {
			return DS.PromiseObject.create({
				promise: this.get('store').findRecord('core/user', userId)
			});
		}
 	})
});
