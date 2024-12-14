<script>
  export let data
  const {user} = data
</script>

<div class="profile_box">
  {#if user}
  <a href="/user" class="profile">
    {user.exp}
  </a>
  {/if}
</div>


<style>
 .profile_box {
    width: 30%;
    height: 30px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 13px 5px 10px 35px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #F48710;
  }

 .profile {
    font-size: 12px;
    color: white;
    font-weight: bolder;
  }
</style>