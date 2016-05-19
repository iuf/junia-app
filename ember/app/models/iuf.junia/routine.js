import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	id: attr('number'),
	name: attr('string'),
	startgroup: belongsTo('iuf.junia/startgroups'),
	performanceTotalStatistic: belongsTo('iuf.junia/performance-total-statistics'),
	performanceExecutionStatistic: belongsTo('iuf.junia/performance-execution-statistics'),
	performanceChoreographyStatistic: belongsTo('iuf.junia/performance-choreography-statistics'),
	performanceMusicAndTimingStatistic: belongsTo('iuf.junia/performance-music-and-timing-statistics'),
	performanceScore: hasMany('iuf.junia/performance-scores')
});
