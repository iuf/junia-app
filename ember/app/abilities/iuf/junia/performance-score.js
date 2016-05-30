import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-delete');
	}),
	canReadRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-to-routine-relationship-read');
	}),
	canUpdateRoutine: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-to-routine-relationship-update');
	}),
	canReadJudge: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-to-judge-relationship-read');
	}),
	canUpdateJudge: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'performance_score-to-judge-relationship-update');
	})
});
