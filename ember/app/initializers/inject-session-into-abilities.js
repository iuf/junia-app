export default {
	name: 'inject-session-into-abilities',
	initialize(app) {
		app.inject('ability', 'session', 'service:session');
	}
};
