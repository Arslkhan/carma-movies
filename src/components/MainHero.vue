<template>
  <div class="antialiased bg-gray-200 font-sans grid items-center justify-center">
    <div id="hero-section" class="w-screen flex flex-col justify-center px-10">
      <h2 class="text-5xl font-bold text-white text-left">John Wick!</h2>
      <p class="max-w-xl text-slate-200 text-left">An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainHero'
}
</script>

<style scoped>
#hero-section {
  height: 436px;
  background-image: url(https://images3.alphacoders.com/103/1033561.jpg);
  background-position: right center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
