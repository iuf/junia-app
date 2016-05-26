import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canImport: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'import');
	}),
	canAnalyze: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'analyze');
	})
});
