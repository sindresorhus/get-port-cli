#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getPort = require('get-port');

const cli = meow(`
	Usage
	  $ get-port <preferred-ports>…

	Options
	  --host, -h  The host on which port resolution should be performed. Can be either an IPv4 or IPv6 address.

	Examples
	  $ get-port
	  51402
	  $ get-port 91929192 2324 732842342
	  2324
	  $ get-port 80
	  9090
	  $ get-port --host=127.0.0.1
	  55740
	  $ get-port 3000 3002 --host=127.0.0.1
	  3002
`, {
	flags: {
		host: {
			type: 'string',
			alias: 'h'
		}
	}
});

(async () => {
	const port = await getPort({
		host: cli.flags.host,
		port: cli.input.map(port => Number(port))
	});

	console.log(port);
})();
