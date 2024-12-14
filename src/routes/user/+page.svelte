<script>
  export let data;
  const {user} = data
</script>

<main class="dashboard">
  <h1>Welcome, {user.uuid} and {user.exp}!</h1>
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