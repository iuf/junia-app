import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-delete');
	}),
	canReadCompetition: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-competition-relationship-read');
	}),
	canUpdateCompetition: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-competition-relationship-update');
	}),
	canReadEvent: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-event-relationship-read');
	}),
	canUpdateEvent: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-event-relationship-update');
	}),
	canReadPerformanceTotalStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_total_statistic-relationship-read');
	}),
	canUpdatePerformanceTotalStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_total_statistic-relationship-update');
	}),
	canReadPerformanceExecutionStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_execution_statistic-relationship-read');
	}),
	canUpdatePerformanceExecutionStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_execution_statistic-relationship-update');
	}),
	canReadPerformanceChoreographyStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_choreography_statistic-relationship-read');
	}),
	canUpdatePerformanceChoreographyStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_choreography_statistic-relationship-update');
	}),
	canReadPerformanceMusicAndTimingStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_music_and_timing_statistic-relationship-read');
	}),
	canUpdatePerformanceMusicAndTimingStatistic: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-performance_music_and_timing_statistic-relationship-update');
	}),
	canReadRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-routine-relationship-read');
	}),
	canUpdateRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-routine-relationship-update');
	}),
	canAddRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-routine-relationship-add');
	}),
	canRemoveRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-routine-relationship-remove');
	}),
	canReadJudge: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-judge-relationship-read');
	}),
	canUpdateJudge: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-judge-relationship-update');
	}),
	canAddJudge: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-judge-relationship-add');
	}),
	canRemoveJudge: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-to-judge-relationship-remove');
	})
});
