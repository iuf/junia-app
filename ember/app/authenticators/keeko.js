import Base from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
	session: Ember.inject.service('session'),
	store: Ember.inject.service('store'),

	restore(data) {
		let id = data.data && data.data.id ? data.data.id : null;
		let store = this.get('store');
		let host = store.adapterFor('application').get('host');
		let namespace = store.adapterFor('application').get('namespace');
		let self = this;

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (id === null) {
				reject('No auth data available');
			}
			Ember.$.ajax(host + '/' + namespace + '/auth/session', {
				'method': 'GET',
				'headers': {
					'Authorization': 'Bearer ' + id
				},
				'dataType': 'json'
			}).done((response) => {
				resolve(response);
				self.get('session').updatePermissions(response.data);
			}).fail((xhr) => {
				reject(xhr.responseJSON || xhr.responseText);
			});
		});
 	},

	authenticate(login, password) {
		let store = this.get('store');
		let host = store.adapterFor('application').get('host');
		let namespace = store.adapterFor('application').get('namespace');

		return new Ember.RSVP.Promise(function (resolve, reject) {
			Ember.$.ajax(host + '/' + namespace + '/auth/session', {
				'method': 'POST',
				'dataType': 'json',
				'data': JSON.stringify({
					'data': {
						'attributes': {
							'login': login,
							'password': password
						}
					}
				})
			}).done((response) => {
				resolve(response);
			}).fail((xhr) => {
				reject(xhr.responseJSON || xhr.responseText);
			});
		});
	},

	invalidate(data) {
		let id = data.data && data.data.id ? data.data.id : null;
		let store = this.get('store');
		let host = store.adapterFor('application').get('host');
		let namespace = store.adapterFor('application').get('namespace');

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (id === null) {
				reject('No auth data available');
			}
			Ember.$.ajax(host + '/' + namespace + '/auth/session', {
				'method': 'delete',
				'headers': {
					'Authorization': 'Bearer ' + id
				},
				'dataType': 'json'
			}).done(() => {
				resolve();
			}).fail((xhr) => {
				reject(xhr.responseJSON || xhr.responseText);
			});
		});
	}
});
