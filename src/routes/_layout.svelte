<script>
  import Nav from '../components/Nav.svelte';
  export let segment;
</script>

<style>
  main {
    background-color: #f7f8f9;
    height: 100%;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>