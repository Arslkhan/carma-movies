<template>
  <div id="app">
    <top-bar />
    <router-view />
  </div>
</template>
<script>
import TopBar from './components/TopBar/NavBar'
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'App',
  components: { TopBar },
  computed: {
    ...mapGetters(["languageCurrent", "languageList"])
  },
  methods: {
    ...mapActions({
      changeCurrentLanguage: "changeCurrentLanguage",
      fetchLanguages: "fetchLanguages"
    }),
    updateCurrentLanguage(event) {
      this.changeCurrentLanguage(event.target.value);
    }
  },
  created() {
    this.fetchLanguages();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
