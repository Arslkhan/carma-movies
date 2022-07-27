<template>
  <nav>
    <ul class="list-reset md:flex md:items-center">
      <menu-item :title="`Home`" :to="`/`" />
      <menu-item :title="`Stats`" :to="`/stats`" />
    </ul>
  </nav>
</template>
<script>
import MenuItem from './MenuItem'
export default {
  name: 'TopMenu',
  components:{
    MenuItem
  }
}
</script>
