<script>
   import { ref } from "vue";
  import { useSignInEmailPasswordless } from "@nhost/vue"; 

  export default {
    setup() {
      const email = ref("");
      const { signInEmailPasswordless, error } = x();
      const loading = ref(false);
  
      const handleSignIn = async () => {
        loading.value = true;
        const { error } = await signInEmailPasswordless(email.value);
        if (error) {
          console.error({ error });
          loading.value = false;
          return;
        }
        loading.value = false;
        alert("Magic Link Sent!");
      };
  
      return { email, handleSignIn, loading, error };
    },
  };


  </script>


<template>
  <div>
    <h1>Todo Manager</h1>
    <p>powered by Nhost and Vue</p>
    <form @submit.prevent="handleSignIn">
      <div>
        <input type="email" placeholder="Your email" v-model="email" required />
      </div>
      <div>
        <button :disabled="loading">
          <span v-if="loading">Loading</span>
          <span v-else>Send me a Magic Link!</span>
        </button>
      </div>
      <!-- <p v-if="error">{{ error.message }}</p> -->
      {#if "error"}
        <p>{ error.message }</p>
      {/if}
    </form>
  </div>
</template>


