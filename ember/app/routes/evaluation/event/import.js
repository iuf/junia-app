import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service('store'),
	session: Ember.inject.service(),

	model() {
		return [{
			'id': 'schubert',
			'name': 'Schubert Importer'
		}];
	},

	actions: {
		addFile(file) {
			this.controllerFor(this.routeName).set('file', file);
		},

		upload() {
			let controller = this.controllerFor(this.routeName);
			if (Ember.isEmpty(controller.get('importer'))) {
				controller.set('error', 'No importer set');
			} else if (Ember.isEmpty(controller.get('file'))) {
				controller.set('error', 'No file selected');
			} else {
				controller.set('error', null);
				let event = this.modelFor('evaluation.event');
				let host = this.get('store').adapterFor('application').get('host');
				let namespace = this.get('store').adapterFor('application').get('namespace');
				let token = this.get('session').get('data.authenticated.data.id');
				let self = this;
				let eventController = this.controllerFor('evaluation.event');

				controller.get('file').upload(host + '/' + namespace + '/iuf.junia/import', {
					'headers': {
						'Authorization': 'Bearer ' + token
					},
					'data': {
						"event-id": event.get('id'),
						"importer": controller.get('importer').id
					},
					'dataType': 'json'
				}).then(() => {
					eventController.get('target').send('update');
					self.transitionTo('evaluation.event', event.get('slug'));
				}, (xhr) => {
					let json = JSON.parse(xhr.response);
					let errors = '';
					json.errors.forEach((error) => {
						errors += 'Import Error: ' + error.title + '<br>';
					});
					controller.set('error', errors);
				});
			}
		}
	}
});
