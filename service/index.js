const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:21117/test11');

const userSchema = new mongoose.Schema({
    nickname: String
})

const userModal = mongoose.model('user', userSchema);

exports.userModal = userModal;
