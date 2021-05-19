<template>
  <section
    class="
      bg-white bg-opacity-5
      p-5
      text-white
      mx-auto
      max-w-screen-xs
      rounded-b-3xl
      xs:rounded-3xl
      xs:mt-10
    "
  >
    <header>
      <div class="mx-4">
        <img
          src="../assets/cover.jpg"
          alt=""
          class="w-44 rounded-2xl mx-auto"
        />
        <h1 class="text-xl mt-6">Underscore_</h1>
        <p class="text-white text-opacity-70 mt-1">
          Le talk-show animé par @Micode pour les passionnés de l'IT 🎙<br />
          Entreprenariat, Hacking, Dev, IA 🧑‍💻
        </p>
      </div>
    </header>
    <div class="bg-white bg-opacity-10 rounded-2xl text-white mt-6 py-0.5 px-2">
      <a
        class="
          flex
          justify-between
          items-center
          py-3
          px-4
          my-2
          h-20
          rounded-xl
          bg-white bg-opacity-0
          hover:bg-opacity-10
        "
        v-for="platform in platforms"
        :href="platform.link"
      >
        <img :src="platform.img" alt="" :class="platform.imgClass" />
        <div class="flex items-center uppercase text-sm">
          <span>Listen</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import spotify from '../assets/spotify.png'
import deezer from '../assets/deezer.png'
import googlePodcasts from '../assets/google-podcasts.png'
import applePodcasts from '../assets/apple-podcasts.png'

export default defineComponent({
  setup() {
    const platforms = [
      {
        img: spotify,
        link: 'https://open.spotify.com/show/1sz1NhoHqbpXbzNlpOnFoz',
        imgClass: 'h-10',
      },
      {
        img: deezer,
        link: 'https://www.deezer.com/fr/show/2379352',
        imgClass: 'h-6',
      },
      {
        img: applePodcasts,
        link: 'https://podcasts.apple.com/fr/podcast/underscore/id1556250107',
        imgClass: 'h-6',
      },
      {
        img: googlePodcasts,
        link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL21pY29kZS11bmRlcnNjb3Jl',
        imgClass: 'h-7',
      },
    ]

    return { platforms }
  },
})
</script>

<style></style>
