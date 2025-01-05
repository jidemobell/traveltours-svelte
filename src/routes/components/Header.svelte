<script>
  import ProfileBox from "./ProfileBox.svelte";

  export let data = undefined;
  const {user} = data

  $: loginVisible = (user) ? "is_not_visible" : "is_visible"
  $: headerFixed  = (user) ? "main-header" : "main-header header-fixed"
  $: lowerHeaderFixed  = (user) ? "header-upper" : "header-upper header-fixed"
  // console.log(data)
</script>

<div>
  <header class={headerFixed}> 
      <!-- Header Upper -->
  <div class={lowerHeaderFixed}>
    <div class="auto-container">
      <!-- Main Box -->
      <div class="main-box clearfix">
        <!--Logo-->
        <div class="logo-box">
          <div class="logo">
            <a href="/" title="Travilo"
              ><img
                src="/images/jaytours.svg"
                alt="Travilo Logo"
                title="Travilo Logo"
              /></a
            >
          </div>
        </div>

        <div class="nav-box clearfix">
          <!--Nav Outer-->
          <div class="nav-outer clearfix">
            <nav class="main-menu">
              <ul class="navigation clearfix">
                <li class="dropdown">
                  <a href="/">Tours</a>
                 </li>
                <li class="dropdown">
                  <a href="/error">Destination</a>
                </li>
                <li>
                  <a href="/error">About</a>
                </li>
                <li class="dropdown">
                  <a href="/error">News</a>
                </li>
                <li>
                  <a href="/error">Contact</a>
                </li>
              </ul>
            </nav>
            <!-- .main-menu -->
          </div>
          <!--Nav Outer End-->
        </div>

        <!-- Hidden Nav Toggler -->
        <div class="nav-toggler">
          <button class="hidden-bar-opener">
            <span class="icon"
              ><img src="/images/icons/menu-icon.svg" alt="" /></span
            >
          </button>
        </div>

        <div class="links-box clearfix  links-flex">
          <div class="link login">
                <a href="/auth" class="{loginVisible}">
                  Login
                </a>
          </div>
          <div class="link social">
            <ul class="social-links clearfix">
              <li>
                <a href="/error" class="facebook"
                  ><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="/error" class="twitter"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="/error" class="linkedin"
                  ><i class="fab fa-linkedin-in"></i></a
                >
              </li>
              <li>
                <a href="/error" class="youtube"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
          
          <div class="link call-to">
            <a href="tel:+233547255814"
              ><i class="icon fa-solid fa-phone"></i> Call Us
              <span class="nmbr">+233547255814</span></a
            >
          </div>
          {#if user !== null }
          <ProfileBox {data} />
          {/if}
        </div>
      </div>
    </div>
  </div>
  <!-- End Header Upper -->
  </header>

</div>

<style>
  .header-fixed {
    position: fixed;
    /* border: red spx solid;
    background: blue; */
  }
  .is_visible{
    visibility: unset;
  }
  .is_not_visible{
    visibility: hidden;
  }

  .social {
    /* border: purple solid 2px; */
  }

  .social-links {
    /* margin-right: 80px; */
    /* border: red solid 2px; */
    display: flex;
  }

  .links-flex {
    display: flex;
    /* justify-content: space-between; */
  }
</style>
