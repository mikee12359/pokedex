<template>
  <div>
    <header class="py-5 px-4">
      <h1 class="">Pokedex</h1>
      <div class="bg-gray-200 rounded-xl flex px-3 py-1">
        <em class="">Search</em>
        <input type="text" class="bg-transparent w-full outline-none px-2">
      </div>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer class="py-20 text-center">
      <p>Michael Angelo P. Autor © 2021</p>
    </footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class DefaultLayout extends Vue {
  
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
