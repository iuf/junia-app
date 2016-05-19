import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	id: attr('number'),
	name: attr('string'),
	start: attr('date'),
	end: attr('date'),
	startgroup: hasMany('iuf.junia/startgroups')
});
