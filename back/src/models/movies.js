const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        require: true,
    },
    year: {
        type: Number,
        min: 1895,
        max: new Date().getFullYear(),
    },
    director: String,
    duration: String,
    genre: {
        type:[String],
        enum: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Thriller",
            "Sci-Fi",
        ],
    },
    rate: {
        type: Number,
        min:0,
        max:10,
        // get: (v)=>{v.toFixed(1)},
        // set: (v)=>{v.toFixed(1)},
    },
    poster: {
        type: String,
        validate:{
            validator: function (v){
                return /^(http|https):\/\/[^ "]+$/.test(v)
            },
        },
    },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;

