<template>
  <Podcast></Podcast>
  <p class="text-white text-opacity-50 text-sm text-center mt-12">
    Underscore_ © 2022 · Made with ❤️ by
    <a href="https://twitter.com/Micode">@micode</a>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Podcast from './components/Podcast.vue'

export default defineComponent({
  name: 'App',
  components: { Podcast },
})
</script>

<style>
html,
body {
  @apply w-full h-full;
}
body {
  @apply bg-gradient-to-br from-gray-900 to-blue-800 bg-fixed;
}
#app {
  @apply pb-5;
}
</style>
