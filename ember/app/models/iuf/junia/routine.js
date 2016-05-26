import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	startgroup: belongsTo('iuf.junia/startgroup'),
	performanceTotalStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	performanceExecutionStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	performanceChoreographyStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	performanceMusicAndTimingStatistic: belongsTo('iuf.junia/performance-statistic', {inverse: null}),
	performanceScores: hasMany('iuf.junia/performance-score')
});
