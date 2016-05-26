import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	slug: attr('string'),
	competition: belongsTo('iuf.junia/competition'),
	event: belongsTo('iuf.junia/event'),
	performanceTotalStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	performanceExecutionStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	performanceChoreographyStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	performanceMusicAndTimingStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	routines: hasMany('iuf.junia/routine'),
	judges: hasMany('iuf.junia/judge')
});
