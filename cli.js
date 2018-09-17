#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getPort = require('get-port');
const meowTemplate = require('./meow-template');

const cli = meow(meowTemplate, {
	input: [],
	flags: {
		host: {
			type: 'string',
			alias: 'h'
		}
	}
});

getPort({
	host: cli.flags.host,
	port: cli.input.map(port => Number(port))
}).then(console.log);
