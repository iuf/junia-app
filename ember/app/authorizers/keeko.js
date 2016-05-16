import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
	authorize(data, block) {
		const id = data.data && data.data.id ? data.data.id : null;

		if (id !== null) {
			block('Authorization', 'Bearer ' + id);
		}
	}
});
