<svelte:head>
	<title>
    Sapper Test
  </title>
</svelte:head>

<style lang="scss">
  @import './../scss/conf.scss';

  article {
    @include makeContainer();

    section {
      @include makeContainer(vertical);

      figure {
        display: block;
        margin: 0;
        text-align: center;

        img {
          display: inline-block;
          vertical-align: baseline;
          width: 90%;
          height: auto;
          max-width: $screen--xs;
        }

        figcaption {
          display: block;
          margin-top: ($gutter / 2);
          font-weight: 700;
          font-style: italic;
          color: $grey--1;
          font-size: rem(36);
        }
      }
    }
  }
</style>

<article>
  <section>
    <figure>
      <img
        alt='Borat'
        src='great-success.png'
        >
        <figcaption>
          Very nice!
        </figcaption>
    </figure>
  </section>
</article>
