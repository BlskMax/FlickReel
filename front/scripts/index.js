const renderData = require("./renderData");
const axios = require("axios");

$(document).ready(async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/Movies");
        console.log(data);
        renderData(data);
    } catch (error) {
        console.log(error); // alert("Algo salió mal");
    }
});

const form = document.querySelector("form");
let genre = [];

// Manejo de checkboxes
function checkboxHandler(e) {
    if (e.target.checked) {
        genre.push(e.target.value);
    } else {
        genre = genre.filter((item) => item !== e.target.value); 
    }
}

const checkboxes = document.querySelectorAll('input[name="genre"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", checkboxHandler);
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    data.genre = genre;
    console.log(data);

    try {
        const response = await axios.post("http://localhost:3000/Movies", data);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});






// const moviesContainer = document.getElementById("movies-container");
// const renderCards = require("./renderCards")
// const axios = require("axios");


// const main = async () => {
//     console.log("Conexión exitosa");
//     const response = await axios.get("http://localhost.3000/movies");
//     renderCards(response.data);
//     moviesContainer(response.data);
// }
// main();






















// $(document).ready(function () {

// const moviesContainer = $("movies-container");

// $.get("https://students-api.up.railway.app/movies", (data, error)=>{
    
//     data.forEach(movie => {
//         // const movieCard = document.createElement("div");
//         // movieCard.classList.add("movie-card");
//         const movieCard = $("<div>").addClass("movie-card");

//         const movieTitle = $("<div>").addClass("movie-card");
//         const movieImage = $("<h3>").text("movie.title")
//         .attr("src", movie.poster) 
//         .attr("alt", movie.title); 
        
//         movieCard.append(movieTitle, movieImage);
//         moviesContainer.append(movieCard);
    
//         movieCard.on("click", () => {
//             movieCard.toggleClass("selected");
    
//         if (movieCard.hasClass("selected")) {
//             const movieDetails = document.createElement("span");
//             movieDetails.classList.add("movie-details");
    
//             const movieYear = document.createElement("p");
//             movieYear.textContent = `Year: ${movie.year}`;
    
//             const movieDirector = document.createElement("p");
//             movieDirector.textContent = `Director: ${movie.director}`;
    
//             const movieDuration = document.createElement("p");
//             movieDuration.textContent = `Year: ${movie.duration}`;
    
//             const movieGenre = document.createElement("p");
//             movieGenre.textContent = `Genre: ${movie.genre.join(", ")}`;
    
//             const movieRate = document.createElement("p");
//             movieRate.textContent = `Rate: ${movie.rate}`;
    
//             movieDetails.appendChild(movieYear);
//             movieDetails.appendChild(movieDirector);
//             movieDetails.appendChild(movieDuration);
//             movieDetails.appendChild(movieGenre);
//             movieDetails.appendChild(movieRate);
//             movieDetails.appendChild(movieDetails);
//         }
    
//         if (!movieCard.classList.contains("selectd")) {
//             const movieDetails = movieCard.querySelector(".movie-details");
//             movieDetails.remove();
//         }
//         })
//     });
// }) 
// })














// class Movie {
//     constructor(id, title, year, director, duration, genre, rate, poster) {
//         this.id = id;
//         this.title = title;
//         this.year = year;
//         this.director = director;
//         this.duration = duration;
//         this.genre = genre;
//         this.rate = rate;
//         this.poster = poster;
//     }
// }

// class Repository {
//     constructor() {
//         this.movies = [];
//         this.id = 0;
//     }

// getAllMovies ( ) {
//     return this.movies
// }
// createMovie (title, year, director, duration, genre, rate, poster) {
//     this.id++
//     const movie = new Movie (this.id, title, year, director, duration, genre, rate, poster);
//     this.movies.push(pelicula);
// }
// deleteMovie (id) {
//     this.movies = this.movies.filter (Movie => Movie.id !== id);
//     return this.movies;
// }

// }



// const repository = new Repository();

// const handleDelete = (id) => {
//     repository.deleteMovie(id);
//     convertInstancesToElement();
// }


// function movieToHtml ({title, year, director, duration, genre, rate, poster}) {
//     const movieTitle = document.createElement("h3");
//     const movieYear = document.createElement("p");
//     const movieDirector = document.createElement("p");
//     const movieDuration = document.createElement("p");
//     const movieGenre = document.createElement("p");
//     const movieRate = document.createElement("p");
//     const moviePoster = document.createElement("img");
//     const card = document.createElement("div");
//     card.className = "nuevaTarjeta"

//     movieTitle.textContent = title;
//     movieYear.textContent = year;
//     movieDirector.textContent = director;
//     movieDuration.textContent = duration;
//     movieGenre.textContent = genre;
//     movieRate.textContent = rate;
//     moviePoster.src = poster;
//     console.log(cardImgUrl);

//     movieTitle.classList.add("tituloPelicula");
//     movieYear.classList.add ("añoPelicula");
//     movieDirector.classList.add("directorPelicula");
//     movieDuration.classList.add("duracionPelicula");
//     movieGenre.classList.add("generoPelicula");
//     movieRate.classList.add("calificacionPelicula");
//     moviePoster.classList.add("posterPelicula");
//     card.classList.add("divContainerCard");

//     card.appendChild(movieTitle)
//     card.appendChild(movieYear)
//     card.appendChild(movieDirector)
//     card.appendChild(movieDuration)
//     card.appendChild(movieGenre)
//     card.appendChild(movieRate)
//     card.appendChild(moviePoster)

//     return card;

//     const listMovies = movies.map(tempData) 
//     listMovies.forEach(lista => divContainerCards.appendChild(llista));

// }


// function convertInstancesToElement() {
//     const divContainerCards = document.getElementById
//     ('divContainerCards')
//     divContainerCards.innerHTML = ''

//     const movies = repository.getAllMovies()
//     console.log(movies);

// // IMPORTANTE
//     const listMovies = movies.map(tempData)
//     console.log(listMovies)
//     listMovies.forEach(lista => divContainerCards.appendChild(llista));
//     console.log(divContainerCards);

// }