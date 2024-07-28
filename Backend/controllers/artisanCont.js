const { default: mongoose } = require('mongoose');
const Artisan = require('../models/artisan');
// const User = require('../models/user');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


exports.getAllArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.find();
        res.status(200).json(artisans);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.getArtisanByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const artisans = await Artisan.find({ category });
        res.status(200).json(artisans);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.getArtisanById = async (req, res) => {
    try {
        const { artisanId } = req.params;
        console.log('artisanId', artisanId);
        if (!mongoose.Types.ObjectId.isValid(artisanId)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const artisan = await Artisan.findOne({ _id: artisanId });
        console.log(artisan);
        if (!artisan) {
            return res.status(404).json({ error: 'Artisan not found' });
        }
        res.status(200).json(artisan);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

exports.updateArtisan = async (req, res) => {
    try {
        const { artisanId } = req.params;
        const artisan = req.body;
        const updatedArtisan = await Artisan.findByIdAndUpdate(artisanId, artisan, { new: true });
        res.status(200).json(updatedArtisan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.deleteArtisan = async (req, res) => {
    try {
        const { artisanId } = req.params;
        await Artisan.findByIdAndDelete(artisanId);
        res.status(200).json({ message: 'Artisan deleted successfully' });
    } catch (err) {
    res.status(400).json({ error: err.message });
    }
}

exports.searchArtisanByLocation = async (req, res) => {
    try {
        const { location } = req.query;
        console.log(location);
        console.log('query', req.query)
        const artisans = await Artisan.find({ location: new RegExp(location, 'i') });
        // const artisans = await Artisan.find({ location });
        res.status(200).json(artisans);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.searchArtisanByName = async (req, res) => {
    try {
        console.log('params', req.params)
        const { name } = req.params;
        const artisans = await Artisan.find({ name: new RegExp(name, 'i') });
        res.status(200).json(artisans);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.createArtisan = async (req, res) => {
    const artisan = req.body;

    try {
        const newArtisan = await new Artisan(artisan).save();
        res.status(201).json(newArtisan);
        console.log('Artisan created successfully');
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}
