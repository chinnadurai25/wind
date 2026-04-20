const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
        seedAdmin();
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

// User Schema for Authentication
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

// Schema for saved letters in 'admin' collection
const letterSchema = new mongoose.Schema({
    content: String,
    dateSaved: {
        type: Date,
        default: Date.now
    }
}, { collection: 'admin' });

const Letter = mongoose.model('Letter', letterSchema);

// Seed initial admin user if not exists
const seedAdmin = async () => {
    try {
        const adminEmail = 'admin@gmail.com';
        const existingAdmin = await User.findOne({ email: adminEmail });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await User.create({
                email: adminEmail,
                password: hashedPassword
            });
            console.log('Seed: Created initial admin user');
        }
    } catch (error) {
        console.error('Seed error:', error);
    }
};

// Auth Route
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1d' });
        res.json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Middleware to verify token
const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token is not valid' });
    }
};

// API Routes
app.post('/api/letters', auth, async (req, res) => {
    try {
        const { content } = req.body;
        const newLetter = new Letter({ content });
        await newLetter.save();
        res.status(201).json({ message: 'Letter saved successfully', letter: newLetter });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save letter' });
    }
});

app.get('/api/letters', auth, async (req, res) => {
    try {
        const letters = await Letter.find().sort({ dateSaved: -1 });
        res.status(200).json(letters);
    } catch (error) {
        res.status(500).json({ error: 'Failed to Fetch letters' });
    }
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

