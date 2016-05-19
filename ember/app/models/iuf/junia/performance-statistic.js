import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	min: attr('number'),
	max: attr('number'),
	range: attr('number'),
	average: attr('number'),
	standardDeviation: attr('number'),
	variance: attr('number'),
	routine: belongsTo('iuf.junia/routines')
});
