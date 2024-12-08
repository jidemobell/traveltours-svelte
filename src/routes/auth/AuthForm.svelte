<script>
  /** @type {import('./$types').ActionData} */
  export let form  = undefined;
</script>


<main style="padding: 2rem; margin-top: 7rem; margin-bottom: 7rem; border: 2px red solid; max-width: 600px; margin-left: auto; margin-right: auto; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; background: white;">
   <form id="register-form" method="POST" action="?/login"
     style="margin-top: 5rem;border: 2px red solid"
   >
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

{#if form?.error}
   <p style="color: red;">{form.error}</p>
 {/if}
</main>