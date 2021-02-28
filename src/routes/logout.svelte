<script context="module">
  export async function preload(page, session) {
    // Redirect if no token
    const { token } = session;
    if (!token) {
      return this.redirect(302, "login");
    }

    console.log('kill session');
    // Submit to Logout
    const response = await this.fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: '',
    });

    const parsed = await response.json();

    if (parsed.error) {
      error = parsed.error;
    } else {
      return {
        response: parsed
      };
    }
  }
</script>

<script>
  import { goto, stores } from "@sapper/app";
  const { session } = stores();

  export let response;
  $session.token = response.token;
    $session.email = response.email;
  console.log(response);
  // goto("/login");
</script>

logout
