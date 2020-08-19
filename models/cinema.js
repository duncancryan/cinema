const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.getTitles = function() {
//   const filmTitles = [];

//   for(let film of this.films) {
//     filmTitles.push(film.title);
//   }
//   return filmTitles;
// }

Cinema.prototype.getTitles = function () {
  const titles = [];
  this.films.forEach((film) => {
    titles.push(film.title);
  });
  return titles;
}

Cinema.prototype.findByTitle = function (title) {
  const foundFilm = this.films.find((film) => {
    return film.title === title;
  })
  return foundFilm;
}

Cinema.prototype.filterByGenre = function (genre) {
  const foundFilms = this.films.filter((film) => {
    return film.genre === genre;
  }) 
  return foundFilms;
};

Cinema.prototype.filterByProperty = function (property, value) {
  const foundFilms = this.films.filter((film) => {
      return film[property] === value
    })
  return foundFilms;
};


Cinema.prototype.checkYear = function(year) {
  const result = this.films.some((film) => {
    return film.year === year;
  });
  return result;
};


Cinema.prototype.checkBaseLength = function(length){
  const result = this.films.every((film) => {
    return film.length >= length;
  })
  return result;
};

Cinema.prototype.getTotalRunningTime = function() {
  let totalRuntime = this.films.reduce((total, film) => {
    return total + film.length;
  }, 0);
  return totalRuntime;
}


module.exports = Cinema;
