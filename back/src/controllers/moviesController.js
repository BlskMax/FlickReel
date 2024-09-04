const {post} = require("../server")
const { getMovies, postMovies } = require("../services/moviesService")


const getMoviesController = async (req, res) => {
    const movies = await getMovies();

    res.status(200).json(movies);
};

const postMoviesController = async (req, res) => {
    const movie = req.body;

    console.log(req.body);    

    const postMovie = await postMovies(movie)
    
    res.status(201).json(postMovie)
};

module.exports = {getMoviesController, postMoviesController};