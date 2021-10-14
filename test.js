import test from 'ava';
import execa from 'execa';
import getPort from 'get-port';

const cli = (args = []) => execa('./cli.js', args);

test('cli', async t => {
	const {stdout} = await cli();
	t.true(Number(stdout) > 0);
});

test('cli with preferred port', async t => {
	const port = await getPort();
	const {stdout} = await cli([port]);
	t.is(Number(stdout), port);
});

test('cli with preferred ports and host', async t => {
	const host = '127.0.0.1';
	const port = await getPort({host});
	const ports = [port, 80, 9090];
	const {stdout} = await cli([...ports, '-h', '127.0.0.1']);
	t.true(ports.includes(Number(stdout)));
});
