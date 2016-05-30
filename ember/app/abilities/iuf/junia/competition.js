import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('iuf/junia', 'competition-read');
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
