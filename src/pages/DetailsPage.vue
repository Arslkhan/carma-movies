<template>
  <div>
    <div
        id="content_hero"
        class="center-content hero-ontop"
        :style="{
        backgroundImage: 'url(' + imageChecker(movie.poster_path) + ')',
      }"
    >
      <img
          src="https://www.klevermedia.co.uk/html_templates/movie_star_html/images/scroll-arrow.svg"
          alt="Scroll down"
          class="scroll"
      />

      <div class="container">
        <div
            class="row blurb scrollme animateme"
            data-when="exit"
            data-from="0"
            data-to="1"
            data-opacity="0"
            data-translatey="100"
        >
          <div class="col-md-9">
            <span class="title">{{ getGenres }}</span>
            <h1>{{ movie.original_title }}</h1>
            <p>
              {{ movie.overview }}
            </p>
            <span class="title">{{ movie.release_date }}</span>
            <p class="title">
              Runtime: <span class="title">{{ movie.runtime }}</span>
            </p>

            <span class="title">{{ getLang }}</span>
          </div>
        </div>
      </div>
<!--      <movie-rating-->
<!--          :ul-class="`cursor-pointer`"-->
<!--          :score="4"-->
<!--      />-->
    </div>
    <!-- similarMoviesData {{ similarMoviesData }}
    <div v-for="moive in similarMoviesData" :key="movie">
      {{ movie }}
    </div> -->
    <!-- <StarRating /> -->
    <!-- movie {{ movie }} -->
<!--    <star-rating />-->
<!--    <AwesomeVueStarRating-->
<!--        :star="this.star"-->
<!--        :disabled="this.disabled"-->
<!--        :maxstars="this.maxstars"-->
<!--        :starsize="this.starsize"-->
<!--        :hasresults="this.hasresults"-->
<!--        :hasdescription="this.hasdescription"-->
<!--        :ratingdescription="this.ratingdescription"-->
<!--    />-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { imageChecker } from "@/mixins";
// import MovieRating from "@/components/MovieRating";
// import StarRating from 'vue-star-rating'
// import AwesomeVueStarRating from "awesome-vue-star-rating";
// import StarRating from "vue-star-rating";
export default {
  name: "DetailsPage",
  components: [
      // AwesomeVueStarRating,
      // MovieRating
  ],
  data() {
    return {
      id: this.$route.params.id,
      similarMoviesData: [],
    };
  },
  computed: {
    ...mapGetters(["movie"]),
    getGenres() {
      let genreNames = [];
      this.movie.genres.map((genre) => {
        genreNames.push(genre.name);
      });
      return genreNames.join(", ");
    },
    getLang() {
      let langs = [];
      this.movie.spoken_languages.map((lang) => {
        langs.push(lang.name);
      });
      return langs.join(", ");
    },
  },
  methods: {
    ...mapActions({
      fetchMovie: "fetchMovie",
    }),
    async similarMovies() {
      console.log(
          "similarMovies",
          `https://api.themoviedb.org/3/trending/movie/155/similar?api_key=d3fbd4de0e952517e321d232a4d98367&language=en-US&page=1`
      );
      await fetch(
          `https://api.themoviedb.org/3/trending/movie/` +
          this.id +
          `/similar?api_key=d3fbd4de0e952517e321d232a4d98367&language=en-US&page=1`
      )
          .then((res) => res.json())
          .then((data) => {
            this.similarMoviesData = data.results;
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
  created() {
    this.fetchMovie([this.id]);
    this.similarMovies();
  },
  mixins: [imageChecker],
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/css?family=Montserrat");

$white: rgb(255, 255, 255);
$yellow: rgb(220, 190, 0);
$gray: rgb(115, 115, 115);
$light-background: rgb(245, 245, 245);

.hero {
  //background-position: center;
  text-align: center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 445px;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    opacity: 0.7;
  }
}

.mv-single-hero {
  background-repeat: no-repeat;
  height: 598px;
}

.center-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: auto;
}

.hero-ontop {
  z-index: 1;
}

a,
a:active,
a:visited {
  cursor: pointer;
  transition: all 300ms ease-in-out;
  text-decoration: none;
  color: #ec7532;
  outline: none;
  box-shadow: none;
}

.btn {
  font-size: 13px;
  font-weight: normal;
  position: relative;
  overflow: hidden;
  width: auto;
  padding: 12px 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #fff;
  border-width: 2px;
  border-radius: 30px;
}

.btn i,
.btn:hover i {
  position: relative;
  z-index: 1;
  display: inline-flex;
  vertical-align: middle;
  color: #fff;
}

.btn-default {
  border: none;
  background-image: linear-gradient(to right, #fbbd61, #ec7532);
}

.btn-default span,
.btn-default span:hover,
.btn-ghost span:hover {
  position: relative;
  z-index: 1;
  color: #fff;
}

.btn-default:hover:before {
  width: 140%;
}

.btn-default:before,
.btn-ghost:before {
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: -15px;
  width: 0;
  height: 100%;
  content: "";
  transition: 0.4s;

  transform: skewX(30deg);
  background: #ec7532;
}

.btn-primary {
  border: none;
  background: #ec7532;
}

.btn-ghost {
  transition: all 300ms ease-in-out;
  color: #ec7532;
  border-color: #ec7532;
  background: transparent;
}

.btn-ghost:hover span {
  color: #fff;
}

.btn-ghost:hover:before {
  z-index: -1;
  width: 140%;
}

.btn-ghost:hover {
  color: #fff;
}

button.btn-default,
button.btn-primary {
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}

button.btn-default:before,
button.btn-primary:before {
  display: none;
}

button.btn-default:hover,
button.btn-primary:hover {
  color: #fff;
  background: #fbbd61;
}

a.arrow-button {
  font-size: 12px;
  position: relative;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ec7532;
}

a.arrow-button:after {
  font-family: "Material Icons";
  font-weight: bold;
  position: absolute;
  top: -1px;
  content: "chevron_right";
  text-transform: none;
  -webkit-font-feature-settings: "chevron_right";
}

a.arrow-button:hover {
  color: #101010;
}

.star-rating {
  display: inline-block;
}

.star-rating i {
  font-size: 18px;
  display: inline-block;
  width: 18px;
  color: #fbbd61;
}

i.material-icons {
  display: inline-flex;
  vertical-align: middle;
}

#content_hero .scroll {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  margin-left: -45px;

  animation: ScrollDown 1.5s infinite;
}
#content_hero:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  content: "";
  background-image: linear-gradient(
          to top,
          rgb(0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 100%
  );
}

#content_hero .container .blurb {
  position: relative;
  width: 100%;
  margin-top: 50px;
  animation: Blurb 0.5s 0.5s forwards;
  text-align: left;
  //opacity: 0;
}

#content_hero .container .blurb h1 {
  font-size: 52px;
  font-weight: 300;
  padding: 0;
  animation: Heading 0.5s 0.5s forwards;
  letter-spacing: 3px;
  opacity: 0;
  color: #fff;
  border: none;
}

#content_hero .container .blurb p {
  font-size: 18px;
  color: #fff;
}

#content_hero .container .blurb .certificate {
  font-size: 13px;
  font-weight: bold;
  //line-height: 48px;
  line-height: 43px;
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-right: 8px;
  transform: translateY(2px);
  text-align: center;
  color: #fff;
  border: solid 2px #fff;
  border-radius: 50%;
}

#content_hero {
  position: relative;
  transition: all 300ms ease-in-out;
  background-position: center;
  background-size: cover;
}

#content_hero:before {
  top: auto;
  height: 70%;
}

#content_hero .container .blurb {
  margin-top: 200px;
  margin-bottom: 100px;
}

#content_hero .container .blurb h1 {
  animation: none;
  opacity: 1;
}

#content_hero .buttons .btn {
  margin-right: 15px;
}

span.title {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fbbd61;
}
</style>
