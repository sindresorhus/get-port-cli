# get-port-cli [![Build Status](https://travis-ci.org/sindresorhus/get-port-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/get-port-cli)

> Get an available port


## Install

```
$ npm install --global get-port-cli
```


## Usage

```
$ get-port --help

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
```


## Related

- [get-port](https://github.com/sindresorhus/get-port) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
