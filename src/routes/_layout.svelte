<style lang="scss">
  @import "./styles/conf.scss";
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

<main>
  <slot></slot>
</main>