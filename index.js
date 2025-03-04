const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => { res.json({ message: 'Hello World' }); });

app.listen(443, () => { console.log('Server is running on port 3000'); });