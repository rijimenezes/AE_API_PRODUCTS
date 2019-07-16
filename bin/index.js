const APP = require('../server');
const SERVER = require('http').Server(APP);
const CONFIG = require('../_config');
const PORT = CONFIG.PORT;

SERVER.listen(PORT);

console.log(`Server is running on port ${PORT}`);

