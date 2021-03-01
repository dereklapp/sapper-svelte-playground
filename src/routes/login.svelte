<script context="module">
  export async function preload(page, session) {
    // Redirect if no token
    const { token } = session;
    if (token) {
      return this.redirect(302, "/account");
    }
  }
</script>

<script>
  import { stores } from "@sapper/app";
  const { session } = stores();

  let password = "";
  let email = "";
  let error;

  const handleLogin = async () => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const parsed = await response.json();

    if (parsed.error) {
      error = parsed.error;
    } else {
      $session.token = parsed.token;
      $session.email = parsed.email;
      // goto("/account");
      location.replace("/account");
    }
  };
</script>

<style lang="scss">
  @import './../scss/conf.scss';

  article {
    @include makeContainer();
  }

  form {
    @include makeContainer(vertical);
    @include makeForm();

    fieldset {
      > label {
        @include min-screen($screen--xs) {
          flex-basis: calc(50% - #{($gutter / 2)});
        }
      }
    }

    button {
      @include makeButton(
        inline-block,
        rem(36),
        ($gutter / 2),
        $gutter,
        $grey--5,
        $grey--4
      );
      @include makePrimaryButton();
    }
  }
</style>

<svelte:head>
	<title>
    Log in to your account
  </title>
</svelte:head>

<article>

  <form
    on:submit|preventDefault="{handleLogin}"
    method="post"
    autocomeplete="on"
    >
    <fieldset>
      <legend>
        Login Form
      </legend>
      <label>
        Email:
        <input
          type="email"
          title="Email Address"
          aria-label="Email Address"
          autocomplete="email"
          bind:value="{email}"
          />
      </label>
      <label>
        Password:
        <input
          type="password"
          title="Email Address"
          aria-label="Email Address"
          autocomplete="current-password"
          bind:value="{password}"
          />
      </label>
    </fieldset>
    <button
      type="submit"
      title="Login"
      aria-label="Login"
      >
      <span>
        Login
      </span>
    </button>
  </form>

  {#if error}
    <p>{error}</p>
  {/if}

</article>
