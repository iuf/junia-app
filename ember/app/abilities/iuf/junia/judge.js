import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-read');
	}),
	canList: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-list');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-create');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-delete');
	}),
	canReadStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-to-startgroup-relationship-read');
	}),
	canUpdateStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-to-startgroup-relationship-update');
	}),
	canReadUser: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-to-user-relationship-read');
	}),
	canUpdateUser: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-to-user-relationship-update');
	}),
	canReadPerformanceScore: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-to-performance_score-relationship-read');
	}),
	canUpdatePerformanceScore: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'judge-to-performance_score-relationship-update');
	})
});
