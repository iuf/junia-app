import Ember from 'ember';

export function round(params) {
	return Math.round(params[0] * Math.pow(10, params[1])) / Math.pow(10, params[1]);
}

export default Ember.Helper.helper(round);
