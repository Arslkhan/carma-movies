<template>
  <select @change="$emit('changed',$event)" class="w-min h-min bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Sort By</option>
    <option value="vote_average.desc">Top Rating First</option>
    <option value="vote_count.desc">Top Voted</option>
    <option value="title.asc">Title A-Z</option>
    <option value="title.desc">Title Z-A</option>
  </select>
</template>
<script>
export default {
  name:"DropDown"
}
</script>

