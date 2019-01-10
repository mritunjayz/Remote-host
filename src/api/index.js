import { version } from '../../package.json';
import { Router } from 'express';
//import facets from './facets';
import structure from './structure.js'
import login from './loginroute.js'

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	//api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		console.log(structure)
		res.json({ version });
	});
	 
	api.use('/my', structure);

	api.use('/login', login)

	return api;
}
