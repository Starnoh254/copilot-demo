const express = require('express');
const app = express();
const userRoutes = require('./users');
app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Copilot Demo API 🚀');
});

app.listen(3000, () => console.log('Server running on port 3000'));
