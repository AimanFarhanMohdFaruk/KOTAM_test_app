import express from 'express';
import { get } from 'config';
const app = express();
const port = get('server.port');
const host = get('server.host');

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${server.address().port}`);
});