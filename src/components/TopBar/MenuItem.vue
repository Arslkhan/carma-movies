<template>
  <li class="md:ml-4">
    <router-link class="text-slate-200 block no-underline py-2 hover:text-rose-400 md:border-none md:p-0" :to="to">
      {{this.title}}
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>
