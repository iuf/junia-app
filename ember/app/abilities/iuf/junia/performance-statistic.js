import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-delete');
	}),
	canReadEvent: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-event-relationship-read');
	}),
	canUpdateEvent: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-event-relationship-update');
	}),
	canAddEvent: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-event-relationship-add');
	}),
	canRemoveEvent: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-event-relationship-remove');
	}),
	canReadStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-startgroup-relationship-read');
	}),
	canUpdateStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-startgroup-relationship-update');
	}),
	canAddStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-startgroup-relationship-add');
	}),
	canRemoveStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-startgroup-relationship-remove');
	}),
	canReadRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-routine-relationship-read');
	}),
	canUpdateRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_statistic-to-routine-relationship-update');
	})
});
