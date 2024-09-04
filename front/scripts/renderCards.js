
const renderCards = (data) => {
    const moviesContainer = document.getElementById("movies-container");
    
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.innerHTML = movie.title;
        
        const poster = document.createElement("img");
        poster.classList.add("card-image");
        poster.src = movie.poster;

        const year = document.createElement("p");
        year.classList.add("card-text");
        year.innerHTML = movie.year;

        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(year);

        moviesContainer.appendChild(card);

        // Usar jQuery para manipular eventos y clases
        $(card).on("click", () => {
            $(card).toggleClass("selected");
            if ($(card).hasClass("selected")) {
                const movieDetails = $("<span>").addClass("movie-details");
                // const movieYear = $("<p>").text(`Year: ${movie.year}`);
                const movieDirector = $("<p>").text(`Director: ${movie.director}`);
                const movieDuration = $("<p>").text(`Duration: ${movie.duration}Min`);
                const movieGenre = $("<p>").text(`Genre: ${movie.genre.join(", ")}`);
                const movieRate = $("<p>").text(`Rate: ${movie.rate}`);
                movieDetails.append (
                    // movieYear,
                    movieDirector,
                    movieDuration,
                    movieGenre,
                    movieRate
                );
                $(card).append(movieDetails);
            } else {
                const movieDetails = $(card).find(".movie-details");
                movieDetails.remove();
            }
        })
    });

};

module.exports = renderCards;

