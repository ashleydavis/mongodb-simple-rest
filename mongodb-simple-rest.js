var args = require('args');

var options = args.Options.parse([
    {
        name: 'help',
        shortName: '?',
        type: 'bool',
        help: 'Show usage info'
    },
    {
        name: 'dbhost',
        shortName: 'h',
        type: 'string',
        help: 'Host name for the database server',
        defaultValue: 'localhost',
    },
    {
        name: 'dbport',
        shortName: 'p',
        type: 'int',
        help: 'Port number for the database server',
        defaultValue: 27017,
    },
    {
        name: 'port',
        shortName: 'p',
        type: 'int',
        help: 'Port number for the rest server',
        defaultValue: 3000,
    },
]);


var parsed = args.parser(process.argv).parse(options);

if (parsed.help) {
	console.log(options.getHelp()); 
	return;
}

var express = require('express');
var app = express();

var restServer = require('./restServer');

restServer({
	host: parsed.dbhost,
	port: parsed.dbport,
}, app);

var server = app.listen(parsed.port);
