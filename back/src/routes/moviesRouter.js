const express = require("express");
const {
    getMoviesController,
    postMoviesController
} = require("../controllers/moviesController")
const moviesRouter = express.Router();

moviesRouter.get("/movies", getMoviesController);
moviesRouter.post("/movies", postMoviesController);

module.exports = moviesRouter;