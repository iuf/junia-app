import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	start: attr('date'),
	end: attr('date'),
	slug: attr('string'),
	startgroup: hasMany('iuf.junia/startgroups')
});
