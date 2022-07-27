<template>
<!--  <div class="py-3 sm:max-w-xl sm:mx-auto">-->
<!--    <div class="overflow-visible w-1/3">-->
<!--      <img class="rounded-3xl shadow-lg" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" alt="">-->
<!--    </div>-->
<!--  </div>-->
  <div class="rounded overflow-hidden shadow-lg w-48">
    <img class="w-full" :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`"
         :alt="movie.title">
    <div class="px-2 py-4">
      <div class="font-bold">{{ movie.title || `Movie Title Here` }}</div>
<!--      <p class="text-gray-700 text-base" v-if="movie.overview">-->
<!--        {{ movie.overview }}-->
<!--      </p>-->
    </div>
    <div class="px-4 pt-2 pb-2 flex items-center justify-between">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"> {{movie.release_date.substring(0, 4)}}</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{{ movie.vote_average.toFixed(2) }} / 10</span>
    </div>
  </div>


</template>
<script>
export default {
  name: 'MovieCard',
  props:{
    movie: {
      type: [Object, Array],
      required: true
    }
  }
}
</script>
