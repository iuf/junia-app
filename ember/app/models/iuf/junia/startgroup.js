import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	competition: belongsTo('iuf.junia/competitions'),
	event: belongsTo('iuf.junia/events'),
	routine: hasMany('iuf.junia/routines'),
	judge: hasMany('iuf.junia/judges')
});
