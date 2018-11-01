const mongoose = require('mongoose');
mongoose.connect('mongodb://39.106.43.59:21117/test11');

const userSchema = new mongoose.Schema({
    nickname: String
})

const userModal = mongoose.model('user', userSchema);

exports.userModal = userModal;
