import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	execution: attr('number'),
	choreography: attr('number'),
	musicAndTiming: attr('number'),
	total: attr('number'),
	routine: belongsTo('iuf.junia/routine'),
	judge: belongsTo('iuf.junia/judge')
});
