import { version } from '../../package.json';
import { Router } from 'express';
import structure from './directoryroute.js'
import login from './loginroute.js'
import logout from './logoutroute.js'
import editorsave from './editorsaveroute'


export default ({ config, db }) => {
	let api = Router();

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});
	 
	api.use('/list', structure);

	api.use('/login', login)

	api.use('/logout', logout)

	api.use('/editorsave', editorsave)


	return api;
}
