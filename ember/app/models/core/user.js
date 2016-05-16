import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    userName: attr(),
	givenName: attr(),
	familyName: attr(),
	nickName: attr(),
	displayName: attr(),
	email: attr(),
	birth: attr('date'),
	sex: attr(),
	createdAt: attr('date'),
	updatedAt: attr('date')
});
