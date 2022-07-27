<template>
  <div>
    <movie-tiles class="pt-6" :title="`Search Results for '${this.$route.params.searchQuery}'`" :isSearch="true" />
  </div>
</template>
<script>
import MovieTiles from "@/components/Movies/MovieTiles";
export default {
  name: "SearchPage",
  components:{
    MovieTiles
  }
}
</script>
