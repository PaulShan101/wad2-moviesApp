const { Card } = require("@material-ui/core");

let movieId = 335983; // The movie Venom
let movie;
let reviews;

describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      });
  });
  beforeEach(() => {
    cy.visit(`/movies/${movie.id}`);
  });
  describe("Base tests", () => {
    it("should display movie title in the page header", () => {
      cy.get("h3").contains(movie.title);
    });
    describe("Base tests", () => {
        it("should display movie title in the page header", () => {
            cy.get("h3").contains(movie.title);
        });
       
        describe("Base tests", () => {
          it("should display movie pictures", () => {
            cy.get("div").contains("https://image.tmdb.org/t/p/w500"+movie.poster_path);
          });
    
          it("should display the movie's details", () => {
            cy.get("h3").contains("Overview");
            cy.get("h3").next().contains(movie.overview);
            cy.get("ul")
              .eq(1)
              .within(() => {
                const genreChips = movie.genres.map((g) => g.name);
                genreChips.unshift("Genres");
                cy.get("span").each(($card, index) => {
                  cy.wrap($card).contains(genreChips[index]);
              });
            });
        });
        });
      });
    });
  })
