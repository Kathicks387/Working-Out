const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    type: {
        type:  String,
        required: true
    },
    name: {
        type: String,
        required: "Activity name is required"
    },

    weight: {
        type: Number,
        required: true
    },

    sets: {
        type: Number,
        required: true
    },

    reps: {
        type:  Number,
        required: true
    },

    duration: {
        type:  Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;