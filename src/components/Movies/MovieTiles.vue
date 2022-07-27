<template>
  <div class="movieTiles">
    <div class="px-44 flex justify-between">
      <h1 class="lg:text-5xl md:text-2xl bg-gradient-to-r bg-gradient-to-r from-slate-400 p-4 rounded text-slate-900" v-if="title">{{title}}</h1>
      <template v-if="!isSearch">
        <drop-down @changed="updateSorting" />
      </template>
    </div>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
    <router-link
        v-for="(movie, index) in !isSearch?movies:searchedData"
        :key="movie.id"
        :to="{ name: 'Details', params: { id: movie.id } }"
        class="movieTile__links"
    >
      <movie-card :key="index" :movie="movie" />
    </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from '@/components/MovieCard';
import DropDown from '@/components/ui/DropDown';
export default {
  name:"MovieTiles",
  components: { MovieCard, DropDown },
  data () {
    return {
      searchedData: []
    }
  },
  props:{
    title: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false,
      default: 'top_rated'
    },
    isSearch: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters(["movies"])
  },
  watch: {
    category: function (to, from) {
      if (to !== from && !this.isSearch) {
        this.fetchMovies([this.category]);
      }
    }
  },
  methods: {
    ...mapActions({
      fetchMovies: "fetchMovies"
    }),
    updateSorting(event){
      console.log('sorting updated', event.target.value);
      this.fetchMovies([this.category, event.target.value]);
    },
    async searchMovies (searchQuery) {
      await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&query=${searchQuery}&include_adult=false`
      )
          .then((res) => res.json())
          .then((data) => {
            this.searchedData = data.results;
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
  created () {
    if (!this.isSearch) {
      this.fetchMovies([this.category]);
    }
  },
  mounted () {
    console.log('page has been mounted');
    if (this.isSearch) {
      this.searchMovies(this.$route.params.searchQuery)
    }
  }
}
</script>
<style>
.movieTile__links{
  display: inline-block;
}
</style>
