import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-read');
	}),
	canList: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-list');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-create');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'event-delete');
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
