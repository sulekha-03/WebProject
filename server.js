const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/workerConnect', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Add your login logic here
    res.json({ message: 'Login successful' });
});

app.post('/book', (req, res) => {
    const { workerType, date, time } = req.body;
    // Add your booking logic here
    res.json({ message: 'Booking successful' });
});

app.post('/pay', (req, res) => {
    const { cardNumber, expiryDate, cvv } = req.body;
    // Add your payment logic here
    res.json({ message: 'Payment successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});