import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.query('iuf.junia/event', {
			'include': 'performance-total-statistic'
		}).then((events) => {
			return events;
		});
	},

	setupController(controller, model) {
		this._super(controller, model);

		// console.log(model);
		let data = [];
		model.forEach((event) => {
			let stat = event.get('performanceTotalStatistic');
			if (!Ember.isEmpty(stat.get('id'))) {
				data.push({
					x: new Date(event.get('start')),
					name: event.get('name'),
					low: stat.get('min'),
					high: stat.get('max'),
					open: stat.get('average') - stat.get('standardDeviation'),
					close: stat.get('average') + stat.get('standardDeviation'),
					range: Math.round(stat.get('range') * Math.pow(10, 2)) / Math.pow(10, 2),
					average: Math.round(stat.get('average') * Math.pow(10, 2)) / Math.pow(10, 2),
					sd: Math.round(stat.get('standardDeviation') * Math.pow(10, 2)) / Math.pow(10, 2),
					variance: Math.round(stat.get('variance') * Math.pow(10, 2)) / Math.pow(10, 2)
				});
			}
		});

		controller.set('series', [{
			type: 'candlestick',
			name: 'Consensus Deviation',
			data: data
		}]);
		controller.set('options', {
			rangeSelector: {
			      selected: 1
			},
			title: {
				text: 'Consensus Deviation'
			},
			tooltip: {
				shared: false,
				useHTML: true,
				headerFormat: '<span style="color: {series.color}">{point.key}</span><table style="width: 110px;">',
				pointFormat: '<tr><td>Min</td><td class="junia-value">{point.low}</td></tr>' +
					'<tr><td>Max</td><td class="junia-value">{point.high}</td></tr>' +
					'<tr><td>Range</td><td class="junia-value">{point.range}</td></tr>' +
					'<tr><td>Average</td><td class="junia-value">{point.average}</td></tr>' +
					'<tr><td>SD</td><td class="junia-value">{point.sd}</td></tr>' +
					'<tr><td>V</td><td class="junia-value">{point.variance}</td></tr>',
				footerFormat: '</table>',
				valueDecimals: 2
			}
		});
	}
});
