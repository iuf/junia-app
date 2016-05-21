import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-read');
	}),
	canList: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-list');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-create');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-delete');
	}),
	canReadStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-to-startgroup-relationship-read');
	}),
	canUpdateStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-to-startgroup-relationship-update');
	}),
	canAddStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-to-startgroup-relationship-add');
	}),
	canRemoveStartgroup: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-to-startgroup-relationship-remove');
	})
});
