const liveServer = require('live-server');

const params = {
    'port': 3000,
    'host': "0.0.0.0",
	'open': false,
	'file': 'index.html',
	'wait': 1000,
	'mount': [
		[
            './styles/',
            './'
		]
	]
};
liveServer.start(params);