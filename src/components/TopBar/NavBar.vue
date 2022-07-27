<template>
  <header class="bg-slate-900 border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
    <!-- Logo text or image -->
    <div class="flex items-center justify-between mb-4 md:mb-0">
      <h1 class="leading-none text-2xl text-grey-darkest">
        <router-link class="text-slate-200 no-underline text-grey-darkest hover:text-slate-400" :to="`/`">
          <span class="text-rose-500">Carma</span> MDB
        </router-link>
      </h1>

      <a class="text-black hover:text-orange md:hidden" href="#">
        <i class="fa fa-2x fa-bars"></i>
      </a>
    </div>
    <!-- END Logo text or image -->


    <!-- Global navigation -->
    <div class="flex justify-between">
    <top-menu class="mr-6 flex items-center" />

    <!-- Search field -->
    <form class="mb-4 w-full md:mb-0">
      <label class="hidden" for="search-form">Search</label>
      <input class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" v-model="searchQuery" placeholder="Search" type="text">
      <button @click.stop.prevent="searchTerm()" class="hidden">Submit</button>
    </form>
    <!-- END Search field -->
    </div>
  </header>
</template>

<script>
import TopMenu from './TopMenu'
export default {
  name: 'NavBar',
  data(){
    return {
      searchQuery: ''
    }
  },
  components: {
    TopMenu
  },
  methods: {
    searchTerm () {
      this.$router.push("/search/" + this.searchQuery);
      this.searchQuery = '';
    }
  }
}
</script>
