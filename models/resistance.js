const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    type: {
        type:  String,
        required: "Select Exercise Type"
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

    date: {
        type: Date,
        default: Date.now
      }
    });

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;