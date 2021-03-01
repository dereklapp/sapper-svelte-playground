<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    // Return session data for conditional display
    return {
      token: token
    };
  }
</script>

<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
  export let token;
</script>

<style lang="scss">
  @import "./scss/conf.scss";

  main {
    min-height: 100vh;
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

<Nav
  {segment}
  {token}
  />

<main>
  <slot></slot>
</main>