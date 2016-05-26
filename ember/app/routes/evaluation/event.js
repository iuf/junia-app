import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service('store'),
	session: Ember.inject.service(),

	model(params) {
		return this.store.queryRecord('iuf.junia/event', {
			filter: params,
			include: [
				'startgroups',
				'startgroups.competition',
				'performance-total-statistic',
				'performance-execution-statistic',
				'performance-choreography-statistic',
				'performance-music-and-timing-statistic',
				'startgroups.performance-total-statistic',
				'startgroups.performance-execution-statistic',
				'startgroups.performance-choreography-statistic',
				'startgroups.performance-music-and-timing-statistic'
			].join(',')
		}).then((events) => {
			if (events.length === 0) {
				this.transitionTo('evaluation');
			} else {
				return events[0];
			}
		});
	},

	setupController(controller, model) {
		this._super(controller, model);

		let comps = {};
		let data = {};
		let categories = [];
		// grasp categories first
		model.get('startgroups').forEach((startgroup) => {
			let name = startgroup.get('name').trim();
			if (categories.indexOf(name) === -1) {
				categories.push(name);
			}
		});

		// sort categories
		categories.sort((a, b) => {
			if (a.charAt(0) === 'U' && b.charAt(0) === 'U') {
				a = a.substr(1);
				b = b.substr(1);
				return a - b;
			} else if (a.charAt(0) === 'U' && b.charAt(0) !== 'U') {
				return -1;
			} else if (a.charAt(0) !== 'U' && b.charAt(0) === 'U') {
				return 1;
			} else if (a === 'Expert'){
				return 1;
			} else if (a === 'Expert' && b === 'Junior Expert') {
				return 1;
			} else if (b === 'Expert' && a === 'Junior Expert') {
				return -1;
			} else if (a === 'Junior Expert') {
				return 1;
			} else {
				a = parseInt(a);
				b = parseInt(b);
				return a - b;
			}

			return 0;
		});

		model.get('startgroups').forEach((startgroup) => {
			let comp = startgroup.get('competition');
			let compId = comp.get('id');

			if (!(compId in comps)) {
				comps[compId] = {
					label: comp.get('label'),
					competition: comp,
					startgroups: []
				};
			}

			if (!(compId in data)) {
				data[compId] = {
					name: comp.get('label'),
					data: {}
				};
			}

			comps[compId].startgroups.push(startgroup);
			let name = startgroup.get('name').trim();
			let x = categories.indexOf(name);
			data[compId].data[x] = {
				name: name,
				y: startgroup.get('performanceTotalStatistic').get('average'),
				x: x
			};
		});
		controller.set('competitions', comps);

		// charts
		let series = [];
		Object.keys(data).forEach((key) => {
			let row = [];
			Object.keys(data[key].data).forEach((x) => {
				row.push(data[key].data[x]);
			});
			data[key].data = row;
			series.push(data[key]);
		});

		let indexController = this.controllerFor(this.routeName + '.index');
		indexController.set('series', series);
		indexController.set('chartOptions', {
			chart: {
			    type: 'line'
			},
			title: {
				text: 'Average per Startgroup'
			},
			yAxis: {
				title: {
					text: 'Performance Score'
				}
			},
			xAxis: {
				categories: categories
			}
		});
	},

	actions: {
		analyze() {
			let host = this.get('store').adapterFor('application').get('host');
			let namespace = this.get('store').adapterFor('application').get('namespace');
			let token = this.get('session').get('data.authenticated.data.id');
			Ember.$.ajax(host + '/' + namespace + '/iuf.junia/analyze', {
				'method': 'POST',
				'headers': {
					'Authorization': 'Bearer ' + token
				},
				'data': {
					"event-id": this.currentModel.get('id'),
				},
				'dataType': 'json'
			}).then(() => {
				this.refresh();
			});
		},

		update() {
			let controller = this.controllerFor(this.routeName);
			this.refresh();
			this.renderTemplate(controller, this.currentModel);
		}
	}
});
