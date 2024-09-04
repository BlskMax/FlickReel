class NewMovie {
    constructor(id, title, year, director, duration, genre, rate, imgURL) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.imgURL = imgURL;
    }
}

class Repository {
    constructor() {
        this.newMovies = [];
        this.id = 0;
    }

    getAllNewMovies() {
        return this.newMovies;
    }

    createMovie(title, year, director, duration, genre, rate, imgURL) {
        this.id++;
        const newMovie = new NewMovie(this.id, title, year, director, duration, genre, rate, imgURL);
        this.newMovies.push(newMovie);
    }

    deleteMovie(id) {
        this.newMovies = this.newMovies.filter(movie => movie.id !== id);
        return this.newMovies;
    }
}

const repository = new Repository();

const handleDelete = (id) => {
    repository.deleteMovie(id);
    convertInstancesToElement();
}

function movieToHtml({ title, year, director, duration, genre, rate, imgURL }) {
    const card = document.createElement("span");
    card.className = "nuevaPelicula";

    const cardMovieimgUrl = document.createElement("img");
    cardMovieimgUrl.src = imgURL;
    cardMovieimgUrl.classList.add("poster");
    card.appendChild(cardMovieimgUrl);

    const cardMovieTitle = document.createElement("h3");
    cardMovieTitle.textContent = `Título: ${title}`;
    cardMovieTitle.classList.add("title", "movie-context");
    card.appendChild(cardMovieTitle);

    const cardMovieYear = document.createElement("p");
    cardMovieYear.textContent = `Año: ${year}`;
    cardMovieYear.classList.add("año", "movie-context");
    card.appendChild(cardMovieYear);

    const cardMovieDirector = document.createElement("p");
    cardMovieDirector.textContent = `Director: ${director}`;
    cardMovieDirector.classList.add("director", "movie-context");
    card.appendChild(cardMovieDirector);

    const cardMovieDuration = document.createElement("p");
    cardMovieDuration.textContent = `Duración: ${duration}`;
    cardMovieDuration.classList.add("duracion", "movie-context");
    card.appendChild(cardMovieDuration);

    const cardMovieGenre = document.createElement("p");
    cardMovieGenre.textContent = `Género: ${genre}`;
    cardMovieGenre.classList.add("genero", "movie-context");
    card.appendChild(cardMovieGenre);

    const cardMovieRate = document.createElement("p");
    cardMovieRate.textContent = `Calificación: ${rate}`;
    cardMovieRate.classList.add("calificacion", "movie-context");
    card.appendChild(cardMovieRate);

    card.classList.add("divContainerCard");

    return card;
}

function convertInstancesToElement() {
    const divContainerCards = document.getElementById('divContainerCards');
    divContainerCards.innerHTML = '';

    const newMovies = repository.getAllNewMovies();
    const listNewMovies = newMovies.map(movieToHtml);
    listNewMovies.forEach(lista => divContainerCards.appendChild(lista));

}

function handleSubmit(event) {
    event.preventDefault();
    const inputTitle = document.getElementById("titleForm").value;
    const inputYear = document.getElementById("yearForm").value;
    const inputDirector = document.getElementById("directorForm").value;
    const inputLength = document.getElementById("lengthForm").value;
    const inputGenre = document.getElementById("genreForm").value;
    const inputRate = document.getElementById("rateForm").value;
    const inputPoster = document.getElementById("posterForm").value;


    if (!inputTitle || !inputYear || !inputDirector || !inputLength || !inputGenre || !inputRate || !inputPoster)
        return alert("¡Faltan datos!");

    repository.createMovie(inputTitle, inputYear, inputDirector, inputLength, inputGenre, inputRate, inputPoster);
    convertInstancesToElement();

    resetForm();
}

function resetForm() {
    const inputs = document.getElementsByClassName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ''; 
    }

// window.onload = function(){    
//     document.getElementsByClassName("input").innerHTML = '';

// }
}

const buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", handleSubmit);


const deleteForm = document.getElementById("reset");
deleteForm.addEventListener("click", resetForm);
