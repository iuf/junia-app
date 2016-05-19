import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-create');
	})
});
