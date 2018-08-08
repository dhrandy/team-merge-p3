const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    prescriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'Prescription'
    }]
})

const User = module.exports = mongoose.model("User", UserSchema)

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback)
}

module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username}
    User.findOne(query, callback)
}
