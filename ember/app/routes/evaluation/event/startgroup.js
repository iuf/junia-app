import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let event = this.modelFor('evaluation.event');
		return this.store.queryRecord('iuf.junia/startgroup', {
			filter: {
				"event.slug": event.get('slug'),
				"competition.slug": params.competition,
				"slug": params.startgroup
			},
			include: 'routines,judges,performance-total-statistic,performance-execution-statistic,performance-choreography-statistic,performance-music-and-timing-statistic,routines.performance-total-statistic,routines.performance-execution-statistic,routines.performance-choreography-statistic,routines.performance-music-and-timing-statistic,routines.performance-scores,routines.performance-scores.judge'
		}).then((startgroups) => {
			if (startgroups.length > 0) {
				return startgroups[0];
			}
		});
	}
});
