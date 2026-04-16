const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'Wind'
        });
        console.log('MongoDB connected to Wind DB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

// Schema for saved letters in 'admin' collection
const letterSchema = new mongoose.Schema({
    content: String,
    dateSaved: {
        type: Date,
        default: Date.now
    }
}, { collection: 'admin' });

const Letter = mongoose.model('Letter', letterSchema);

// API Routes
app.post('/api/letters', async (req, res) => {
    try {
        const { content } = req.body;
        const newLetter = new Letter({ content });
        await newLetter.save();
        res.status(201).json({ message: 'Letter saved successfully', letter: newLetter });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save letter' });
    }
});

app.get('/api/letters', async (req, res) => {
    try {
        const letters = await Letter.find().sort({ dateSaved: -1 });
        res.status(200).json(letters);
    } catch (error) {
        res.status(500).json({ error: 'Failed to Fetch letters' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
