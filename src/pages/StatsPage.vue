<template>
  <div>
    <div class="bg-white p-6 shadow-lg rounded" style="max-width: 100%" v-if="queries.topTenVoted.movies">
      <h2 class="text-left mb-2 text-2xl font-bold text-gray-800">Top 10 rated movies</h2>
      <D3BarChart
          :config="top_rated_config"
          :datum="queries.topTenRated.movies"
      ></D3BarChart>
    </div>
    <div class="bg-white p-6 shadow-lg rounded" style="max-width: 100%" v-if="queries.topTenVoted.movies">
      <h2 class="text-left mb-2 text-2xl font-bold text-gray-800">Top 10 voted movies</h2>
      <D3BarChart
          :config="top_voted_config"
          :datum="queries.topTenVoted.movies"
      ></D3BarChart>
    </div>
  </div>
</template>
<script>
import { D3BarChart } from 'vue-d3-charts';
export default {
  name: "StatsPage",
  components:{
    D3BarChart
  },
  data () {
    return {
      chart_title: 'Your title goes here',
      chart_source: 'Your source goes here',
      top_rated_config: {
        key: 'name',
        currentKey: '2004',
        values: ['total'],
        axis: {
          yTicks: 10
        },
        color: {
          default: '#222f3e',
          current: '#41B882'
        },
        transition: {ease: 'easeBounceOut', duration: 1000}
      },
      top_voted_config: {
        key: 'name',
        currentKey: 'Inception',
        values: ['total'],
        axis: {
          yTicks: 10
        },
        color: {
          default: '#222f3e',
          current: '#41B882'
        }
      },
      queries:{
        topTenRated:{
          sortBy:'vote_average.desc',
          movies:null
        },
        topTenVoted:{
          sortBy:'vote_count.desc',
          movies: null
        }
      }
    }
  },
  methods:{
    async discover (searchQuery) {
      console.log('searchQuery',searchQuery, this.queries[searchQuery].sortBy)
      console.log('sortBy',this.queries[searchQuery])
      await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&sort_by=${this.queries[searchQuery].sortBy}&include_adult=false&with_original_language=en${searchQuery === 'topTenRated'?'&vote_count.gte=20':''}`
      )
          .then((res) => res.json())
          .then((data) => {
            this.queries[searchQuery].movies = data.results.slice(0,10).map(({title,vote_average,vote_count}) => {
              return {
                name:title,
                total: searchQuery === 'topTenRated' ? vote_average : vote_count
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
  async mounted(){
    await this.discover('topTenRated')
    await this.discover('topTenVoted')
  }
}
</script>
<style scoped>
body {
  background-color: grey;
}
</style>
