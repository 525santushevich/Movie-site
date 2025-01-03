/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = Vue.createApp({
  // This automatically imports your movies.json file and puts it into
  //   the variable: movies
  created() {
    fetch("movies.json")
      .then((response) => response.json())
      .then((json) => {
        this.movies = json;
      });
  },
  data() {
    return {
      // This holds your movies.json data.
      movies: [],
      /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
      title: "Sophia's Top 10 Movies",
      owner: "Sopia",
      github: "https://github.com/525santushevich/Movie-site",
    };
  },
  methods: {
    /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
    getMonthArray: function (datesArray) {
      let months = "";
      switch (datesArray[1]) {
        case 1:
          month = "January";

        case 2:
          month = "February";

        case 3:
          month = "March";

        case 4:
          month = "April";

        case 5:
          month = "May";

        case 6:
          month = "June";

        case 7:
          month = "July";

        case 8:
          month = "August";

        case 9:
          month = "September";

        case 10:
          month = "October";

        case 11:
          month = "November";

        case 12:
          month = "December";
      }
      return month + "" + datesArray[2] + "," + datesArray[0];
    },
    posterClick(index) {
      if (
        this.movies[index].posterindex >
        this.movies[index].posters.length - 1
      ) {
        this.movies[index].posterindex++;
      } else {
        this.movies[index].posterindex = 0;
      }
    },
    timesText(minutes) {
      const hours = Math.trunc(minutes / 60);
      const min = minutes - hours * 60;
      return `${hours}h ${min}m`;
    },
  },
});

vue_app.mount("#vue_app");
