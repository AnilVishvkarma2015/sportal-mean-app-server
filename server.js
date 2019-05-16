const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');
const log = require('log4js').getLogger('application');
const responseTime = require('response-time');

const jwt = require('./lib/shared/jwt');
const errorHandler = require('./lib/shared/error-handler');
const logging = require('./lib/logging');
const app = express();

logging.initialize();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(jwt());
app.use(responseTime());
app.use('/users', require('./lib/users/user.controller'));
app.use('/notifications', require('./lib/notifications/notification.controller'));
app.use('/leaves', require('./lib/leaves/leave.controller'));
app.use(errorHandler);

const port = process.env.PORT || config.get('port');
app.listen(port, () => {
    log.info("Application Server is running on port:" + port);
});
