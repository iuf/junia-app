import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	id: attr('number'),
	position: attr('string'),
	startgroup: belongsTo('iuf.junia/startgroups'),
	user: belongsTo('core/users'),
	performanceScore: belongsTo('iuf.junia/performance-scores')
});
