<svelte:head>
	<title>
    StarWars
  </title>
</svelte:head>

<style lang="scss">
  @import './../styles/conf.scss';
  figure {
    display: block;
    margin: 0;
    padding: $gutter;
    text-align: center;
    
    img {
      width: 100%;
      max-width: 400px;
      margin: 0;
      vertical-align: baseline;
    }
  }
  
  p {
    text-align: center;
  }
</style>

<figure>
  <img
    alt='Borat'
    src='great-success.png'
    >
</figure>

<p>
  <strong>
    <em>
      Very nice!
    </em>
  </strong>
</p>
