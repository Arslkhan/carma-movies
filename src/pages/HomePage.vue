<template>
  <div>
    <hero />
    <div class="pt-10">
      <badge-label :color="`indigo`" :title="`Popular`" :css-class="`hover: cursor-pointer`" @clicked="changeMovieCategory(categories[1])" />
      <badge-label :color="`red`" :title="`Top Rated`" :css-class="`hover: cursor-pointer`" @clicked="changeMovieCategory(categories[0])" />
      <badge-label :color="`purple`" :title="`Upcoming`" :css-class="`hover: cursor-pointer`" @clicked="changeMovieCategory(categories[2])" />
    </div>
    <movie-tiles :title="`${selectedCategory.title} Movies`" :category="selectedCategory.category" />
  </div>
</template>

<script>
import Hero from '@/components/MainHero'
import BadgeLabel from "@/components/ui/BadgeLabel";
import MovieTiles from "@/components/Movies/MovieTiles";
export default {
  name: 'HomePage',
  components:{
    BadgeLabel,
    MovieTiles,
    Hero
  },
  data () {
    return {
      categories:[
        { category: 'top_rated', title: 'Top Rated' },
        { category: 'popular', title: 'Popular' },
        { category: 'upcoming', title: 'Upcoming' }
      ],
      selectedCategory:  { category: 'top_rated', title: 'Top Rated' }
    }
  },
  methods:{
    changeMovieCategory (toCategory) {
      this.selectedCategory = toCategory
    }
  },
  mounted () {
    console.log('page has been mounted');

  }
}
</script>

<style lang="scss">
.movieTile {
  background: #192231;
  &__tile {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 2rem 1rem;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #404040;
    }
  }
  &__link {
    position: relative;
    color: #fff;
    text-decoration: none;
    transition: all 50ms ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  &__poster {
    width: 200px;
    height: 300px;
    box-shadow: 0 5px 20px #000;
    &:hover {
      border: 4px solid #40b883;
    }
  }
  &__name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    text-align: center;
    text-shadow: 1px 1px 2px #000000;
    background-color: rgba(#000, 0.2);
  }
  &__year,
  &__rating {
    position: absolute;
    padding: 5px;
    font-size: 12px;
    text-shadow: 1px 1px 2px #000000;
  }
  &__year {
    bottom: 0;
    left: 0;
  }
  &__rating {
    right: 0;
    bottom: 0;
  }
}
</style>
