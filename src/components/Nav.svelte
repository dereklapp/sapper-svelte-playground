<script>
  export let segment;
  export let session;
</script>

<style lang="scss">
  @import './../scss/conf.scss';
  @import './../scss/conf/navbar.scss';

  nav {
    background-color: $navbar-bgcolor;
    font-family: $font-stack-helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: $line-height;
    color: $text-color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @include makeContainer();
    height: $navbar-height;

    @include min-screen($screen--md) {
      height: $navbar-height--md;
    }
  }

  ul {
    @include makeUnstyledList();
    @include makeFlex((-($gutter / 4)), wrap, null, null, null);
    height: 100%;

    li {
      flex: 0 0 auto;
      height: 100%;

      &[aria-current] {
        a {
          @include makeTextLink($grey--2, $grey--2, none);

          &::after {
            content: '';
            position: absolute;
            height: rem(2);
            background-color: $brand-primary;
            right: ($gutter / 4);
            bottom: 0;
            left: ($gutter / 4);
          }
        }
      }

      a {
        display: block;
        height: 100%;
        padding-right: ($gutter / 2);
        padding-left: ($gutter / 2);
        position: relative;
        line-height: $navbar-height;
        @include makeTextLink($action-color, $action-color--hover, none);
        font-weight: 700;

        @include min-screen($screen--md) {
          line-height: $navbar-height--md;
        }
      }
    }
  }
</style>

<nav>
  <ul>
    <li aria-current="{segment === undefined ? 'page' : undefined}">
      <a href=".">
        Home
      </a>
    </li>
    {#if session.token !== undefined}
      <li aria-current="{segment === 'account' ? 'page' : undefined}">
        <a
          rel=prefetch
          href="account"
          >
          My Account
        </a>
      </li>
      <li aria-current="{segment === 'logout' ? 'page' : undefined}">
        <a
          rel=prefetch
          href="logout"
          >
          Logout
        </a>
      </li>
    {:else}
      <li aria-current="{segment === 'login' ? 'page' : undefined}">
        <a
          rel=prefetch
          href="login"
          >
          Login
        </a>
      </li>
    {/if}
  </ul>
</nav>
