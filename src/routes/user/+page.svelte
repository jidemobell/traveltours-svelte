<script>
  export let data;
  // export let form  = undefined;
  const {user} = data
</script>

<main class="dashboard">
  <h1>Welcome, {user.uuid} and {user.google_id}!</h1>
  <h4 style="margin-bottom: 20px;">HOME OWNER</h4>
  <form method="POST" action="?/logout">
    <button type="submit">Logout</button>
  </form></main>
<style>
   .dashboard {
    margin-top: 200px;
    margin-bottom: 200px;
   }
</style>