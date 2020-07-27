const mongoose = require('mongoose');
const Schema = monggose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
}, {
    timestamps: ture
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
