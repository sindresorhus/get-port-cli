import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';

test(async t => {
	t.true(Number(await pify(childProcess.execFile)('./cli.js')) > 0);
});
