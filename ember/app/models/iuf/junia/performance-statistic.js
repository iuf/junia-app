import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
	min: attr('number'),
	max: attr('number'),
	range: attr('number'),
	median: attr('number'),
	average: attr('number'),
	variance: attr('number'),
	standardDeviation: attr('number'),
	variabilityCoefficient: attr('number'),
	events: hasMany('iuf.junia/event'),
	startgroups: hasMany('iuf.junia/startgroup'),
	routine: belongsTo('iuf.junia/routine')
});
