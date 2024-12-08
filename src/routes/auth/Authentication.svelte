
<script>
  /** @type {import('./$types').ActionData} */
  export let form  = undefined;
</script>

<style>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  /* .login-container h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  } */

  .login-container label {
    display: block;
    margin: 0.5rem 0;
    font-weight: bold;
  }

  .login-container input {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0 1rem 0;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .login-container button {
    width: 100%;
    padding: 0.8rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login-container button:hover {
    background-color: #45a049;
  }

  .error-message {
    color: red;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .loading-spinner {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>


<main style="padding: 2rem; margin-top: 7rem; margin-bottom: 7rem; max-width: 600px; margin-left: auto; margin-right: auto; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; background: white;">
<div class="login-container">
  <form method="POST" action="?/login">
    <div>
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div>
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
      />
    </div>

    <button type="submit" disabled={form?.loading}>
      {#if form?.loading}
        <span class="loading-spinner"></span> Logging in...
      {:else}
        Login
      {/if}
    </button>

    {#if form?.error}
      <div class="error-message">{form.error}</div>
    {/if}
  </form>
</div>
</main>
