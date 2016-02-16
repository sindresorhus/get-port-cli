#!/usr/bin/env node

'use strict';

var meow = require('meow');
var getPort = require('get-port');

meow('\n\tExample\n\t  $ get-port\n\t  51402\n');

getPort().then(console.log);