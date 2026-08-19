import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    inputZip: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});

const User = mongoose.model("User", userSchema);
export default User;