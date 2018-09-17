import test from 'ava';
import execa from 'execa';
import getPort from 'get-port';

test('cli', async t => {
	t.true(Number(await execa.stdout('./cli.js')) > 0);
});

test('cli with preferred port', async t => {
	const port = await getPort();
	t.is(Number(await execa.stdout('./cli.js', [port])), port);
});

test('cli with preferred ports and host', async t => {
	const host = '127.0.0.1';
	const port = await getPort({host});
	const ports = [port, 80, 9090];
	t.true(ports.includes(Number(await execa.stdout('./cli.js', ports.concat(['-h', '127.0.0.1'])))));
});
