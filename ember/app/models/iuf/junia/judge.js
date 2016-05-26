import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	position: attr('string'),
	startgroup: belongsTo('iuf.junia/startgroup'),
	user: belongsTo('core/user'),
	performanceScore: belongsTo('iuf.junia/performance-score')
});
