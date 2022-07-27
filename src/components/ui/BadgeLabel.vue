<template>
  <span
      :class="`bg-${color}-100 text-${color}-800 text-base font-3xl mr-2 px-2.5 py-1 rounded dark:bg-${color}-200 dark:text-${color}-900 hover:font-bold ${cssClass}`"
      @click="$emit('clicked')"
  >
    {{ title }}
  </span>
</template>

<script>
export default {
  name:'BadgeLabel',
  props:{
    title:{
      type:String,
      required:true
    },
    cssClass:{
      type:String,
      required:true
    },
    color:{
      type:String,
      required:false,
      default: 'red'
    }
  }
}
</script>
