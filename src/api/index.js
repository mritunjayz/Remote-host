import { version } from '../../package.json';
import { Router } from 'express';
import structure from './structure.js'
import login from './loginroute.js'

export default ({ config, db }) => {
	let api = Router();

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});
	 
	api.use('/my', structure);

	api.use('/login', login)

	return api;
}
