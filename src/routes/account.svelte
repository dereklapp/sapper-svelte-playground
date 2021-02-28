<script context="module">
  export async function preload(page, session) {
    // Redirect if no token
    const { token } = session;
    const { email } = session;
    if (!token) {
      return this.redirect(302, "login");
    }

    // Fetch Accounts
    const response = await this.fetch("/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const parsed = await response.json();

    if (parsed.error) {
      error = parsed.error;
    } else {
      return {
        profiles: parsed.profiles,
        session: session
      };
    }
  }
</script>

<script>
  import Card from '../components/Card.svelte';
  export let session;
  export let profiles;
</script>

<style lang="scss">
  @import './../scss/conf.scss';
  
  article {
    @include makeContainer();
    
    header {
      @include makeContainer(vertical);

      h1 {
        @include makeH1();
        color: $brand-primary;
      }

      .account-details {
        margin-top: rem(3);
      }
    }
  }

  ul {
    @include makeUnstyledList();
    margin: (-($gutter / 4));
    @include makeFlex((-($gutter / 4)), wrap, null, null, null);

    li {
      flex: 0 0 calc(50% - #{$gutter / 2});
      margin: ($gutter / 4);
    }
  }
</style>

<svelte:head>
  <title>
    Your Profiles
  </title>
</svelte:head>

<article>
  <header>
    <h1>
      Your Account
    </h1>
    <p class="account-details">
      {session.email}
    </p>
  </header>
  <section>
    <ul>
      {#each profiles as profile}
        <li>
          <Card
            titleKey={profile.profile_name}
            data={profile}
            />
        </li>
      {/each}
    </ul>
  </section>
</article>
