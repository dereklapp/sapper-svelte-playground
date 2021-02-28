<script>
  export let titleKey;
  export let data;
</script>

<style lang="scss">
  @import './../scss/conf.scss';
  .card {
    @include makeCard();

    &__title {
      color: $grey--1;
    }

    address {
      .name {
        display: block;
        margin-bottom: ($gutter / 2);
      }
    }
  }
</style>

<span class="card">
  <span class="card__inner">
    <span class="card__title">
      {titleKey}
    </span>
    <address>
      <span class="name">
        <span class="name">
          {data.f_name} {data.l_name}
        </span>
        {#if data.address !== 'PICKUP'}
          {data.address}, {data.city}, {data.postal}
        {:else}
          {data.address}
        {/if}
        {#if data.apt[0].length}
          Apt/Unit: {data.apt}<br>
        {/if}
        {#if data.buzz[0].length}
          Buzzer: {data.buzz}<br>
        {/if}
        {#if data.phone[0].length}
          Phone: {data.phone}
        {/if}
      </span>
    </address>
  </span>
</span>
