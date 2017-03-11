import test from 'ava';
import execa from 'execa';

test(async t => {
	t.true(Number(await execa.stdout('./cli.js')) > 0);
});
