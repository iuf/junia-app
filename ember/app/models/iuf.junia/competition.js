import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	id: attr('number'),
	label: attr('string'),
	startgroup: hasMany('iuf.junia/startgroups')
});
