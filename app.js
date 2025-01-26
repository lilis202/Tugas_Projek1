const userRouter = require('./routes/user.routes')
const branchesRouter = require('./routes/branches.routes')
const shipmentsRouter = require('./routes/shipments.routes')
const tracking_logsRouter = require('./routes/tracking_logs.routes')

require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const logger = require('./middlewares/logger')

app.use(cors())

app.use(bodyParser.json());
app.use(express.json())

app.use(logger)

app.use('/', userRouter)
app.use('/', branchesRouter)
app.use('/', shipmentsRouter)
app.use('/', tracking_logsRouter)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})