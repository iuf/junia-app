import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-read');
	}),
	canList: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-list');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'startgroup-create');
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
