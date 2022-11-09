const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/page.html', (req, res) => res.send({ ajson: "object" }));

const temperatureRouter = require('./routes/temperature');
const humidityRouter = require('./routes/humidity');

app.use('/sensors/temperature', temperatureRouter);
app.use('/sensors/humidity', humidityRouter);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
