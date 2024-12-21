<script>
  import { onMount } from 'svelte';

  import Authentication from "./Authentication.svelte";

  import { auth, signInWithEmailAndPassword, provider } from "$lib/firebase";
  import { signInWithRedirect, getRedirectResult } from 'firebase/auth';

  import { goto } from '$app/navigation';

  // const VITE_API_GOOGLE_API_KEY =  import.meta.env.VITE_API_GOOGLE_API_KEY


  let user = null;
  let error = null;

  // import AuthForm from "./AuthForm.svelte";
  // import GoogleLogin from "./GoogleLogin.svelte";
  // import LoginWithGoogle from "./LoginWithGoogle.svelte";

  onMount(async () => {
    // Check if we're returning from a redirect
    const result = await getRedirectResult(auth).catch((err) => (error = err.message));
    if (result) {
      user = result.user;
      // If you want to store user info in session cookies or server, you can do so here.
      // For now, just redirect to the home page.
      goto('/');
    }
  });


  function loginWithGoogle() {
    signInWithRedirect(auth, provider);
  }
</script>
<!-- <AuthForm /> -->
<!-- <Authentication /> open this --> 
<!-- <GoogleLogin /> -->

{#if user}
  <p>Welcome {user.displayName}!</p>
{:else}
  <button on:click={loginWithGoogle}>Login with Google</button>
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
{/if}