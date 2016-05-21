import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-read');
	}),
	canList: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-list');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-create');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-delete');
	}),
	canReadRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-routine-relationship-read');
	}),
	canUpdateRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-routine-relationship-update');
	})
});
