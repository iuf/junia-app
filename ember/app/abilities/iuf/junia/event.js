import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-delete');
	}),
	canReadPerformanceTotalStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_total_statistic-relationship-read');
	}),
	canUpdatePerformanceTotalStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_total_statistic-relationship-update');
	}),
	canReadPerformanceExecutionStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_execution_statistic-relationship-read');
	}),
	canUpdatePerformanceExecutionStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_execution_statistic-relationship-update');
	}),
	canReadPerformanceChoreographyStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_choreography_statistic-relationship-read');
	}),
	canUpdatePerformanceChoreographyStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_choreography_statistic-relationship-update');
	}),
	canReadPerformanceMusicAndTimingStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_music_and_timing_statistic-relationship-read');
	}),
	canUpdatePerformanceMusicAndTimingStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-performance_music_and_timing_statistic-relationship-update');
	}),
	canReadStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-startgroup-relationship-read');
	}),
	canUpdateStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-startgroup-relationship-update');
	}),
	canAddStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-startgroup-relationship-add');
	}),
	canRemoveStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-to-startgroup-relationship-remove');
	})
});
