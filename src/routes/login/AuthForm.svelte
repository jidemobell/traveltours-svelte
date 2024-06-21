
<script>
  /** @type {import('./$types').ActionData} */
	export let form  = undefined;
</script>

<main>
   <!-- <form onsubmit={handleSubmit}> -->
  <h1> Firebase Auth + Hasura JWT example </h1>
  <form id="register-form" method="POST" action="?/login">
    Email: <input 
      id="reg-email" 
      type="email"
      name="email"
      />
    Password: <input 
    id="reg-password" 
    type="password" 
    name="password"
    />
    <button type="submit">Login</button>
    <button formaction="?/register">Register</button>
  </form>
  <!-- <button id="get-token"> Get ID token </button> -->
  <!-- <div id="id-token"></div> -->
<!-- </form> -->
 {#if form?.success}
    <h2 style="color: aqua;">FORM WORKED</h2>
 {/if}
</main>
