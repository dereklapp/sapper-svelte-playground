<script context="module">
  // export async function preload(page, session) {
  //   // Return session data for conditional display
  //   return {
  //     session: session
  //   };
  // }
</script>

<script>
  // import Nav from '../components/Nav.svelte';

  // export let segment;
  // export let session;
</script>

<style lang="scss">
  @import "./scss/conf.scss";

  main {
    height: 100%;
    background-color: $main-bg-color;
    font-family: $font-stack-helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: $line-height;
    color: $text-color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: rem(320);
  }
</style>

<!-- <Nav
  {segment}
  {session}
  /> -->

<main>
  <slot></slot>
</main>