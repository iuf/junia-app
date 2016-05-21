import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-read');
	}),
	canList: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-list');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-create');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-delete');
	}),
	canReadStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-startgroup-relationship-read');
	}),
	canUpdateStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-startgroup-relationship-update');
	}),
	canReadPerformanceTotalStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_total_statistic-relationship-read');
	}),
	canUpdatePerformanceTotalStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_total_statistic-relationship-update');
	}),
	canReadPerformanceExecutionStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_execution_statistic-relationship-read');
	}),
	canUpdatePerformanceExecutionStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_execution_statistic-relationship-update');
	}),
	canReadPerformanceChoreographyStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_choreography_statistic-relationship-read');
	}),
	canUpdatePerformanceChoreographyStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_choreography_statistic-relationship-update');
	}),
	canReadPerformanceMusicAndTimingStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_music_and_timing_statistic-relationship-read');
	}),
	canUpdatePerformanceMusicAndTimingStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_music_and_timing_statistic-relationship-update');
	}),
	canReadPerformanceScore: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_score-relationship-read');
	}),
	canUpdatePerformanceScore: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_score-relationship-update');
	}),
	canAddPerformanceScore: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_score-relationship-add');
	}),
	canRemovePerformanceScore: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'routine-to-performance_score-relationship-remove');
	})
});
