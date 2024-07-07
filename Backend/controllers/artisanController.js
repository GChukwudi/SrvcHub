const Craft = require('../models/craft');


exports.createCraft = async (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const craft = new Craft({
        artisanId: req.userData.userId,
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        imageType: req.file.imageType
    });
    craft.save()
        .then(result => {
            res.status(201).json({
                message: 'Craft created successfully',
                craft: {
                    ...result,
                    id: result._id,
                    image: url + '/images/' + result._id
                }
            });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

exports.updateCraft = async (req, res) => {
    Craft.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(craft => res.status(200).json({ message: 'Craft updated successfully', craft }))
        .catch(err => res.status(500).json({ error: err }));
}

exports.deleteCraft = async (req, res) => {
    Craft.findByIdAndDelete(req.params.id)
        .then(craft => res.status(200).json({ message: 'Craft deleted successfully', craft }))
        .catch(err => res.status(500).json({ error: err }));
}

exports.listCrafts = async (req, res) => {
    Craft.find()
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}

exports.getCraft = async (req, res) => {
    Craft.findById(req.params.id)
        .then(craft => res.status(200).json(craft))
        .catch(err => res.status(500).json({ error: err }));
}

exports.getCraftsByArtisan = async (req, res) => {
    Craft.find({ artisanId: req.params.artisanId })
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}

exports.getCraftsByCategory = async (req, res) => {
    Craft.find({ category: req.params.category })
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}

exports.getCraftsByRating = async (req, res) => {
    Craft.find({ rating: req.params.rating })
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}

exports.getCraftsByPrice = async (req, res) => {
    Craft.find({ price: req.params.price })
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}

exports.getCraftsBySearch = async (req, res) => {
    Craft.find({ name: req.params.name })
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}


