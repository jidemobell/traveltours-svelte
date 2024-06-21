<script>
  /** @type {import('./$types').LayoutData} */
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
   
</script>

<svelte:head>
  <!--<meta charset="utf-8" /> -->
  <!--Responsive -->
  <!--<meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
  <title>JayToursAndTravel</title>

  <!--favicons -->
  <link href="/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/images/favicon/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/images/favicon/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/images/favicon/favicon-16x16.png"
  />
  <link rel="manifest" href="/images/favicon/site.webmanifest" />
  <link
    rel="mask-icon"
    href="/images/favicon/safari-pinned-tab.svg"
    color="#5bbad5"
  />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
  <!--Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="cssheet" />

  <!-- Add the slick-theme.css if you want default styling -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<!--Add the slick-theme.css if you want default styling -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>



    <script src="/js/lib/jquery.min.js"></script>
    <!-- <script src="/js/lib/popper.min.js"></script> -->
    <script src="/js/lib/bootstrap/bootstrap.min.js"></script>
    <script src="/js/lib/jquery-ui.min.js"></script>
    <script src="/js/lib/jquery.fancybox.min.js"></script>
    <script src="/js/lib/isotope.min.js"></script>
    <!--<script src="/js/lib/slick.min.js"></script> -->
    <script src="/js/lib/appear.min.js"></script>
    <script src="/js/lib/wow.min.js"></script>
    <script src="/js/custom-script.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js"></script>
    <!-- <script src="/js/main.js"></script> -->

</svelte:head>

<div>
  <Header />
  <main>
    <slot />
  </main>
  <div class="scroll-to-top scroll-to-target" data-target="html">
    <span class="icon"
      ><img src="/images/icons/arrow-up.svg" alt="" title="Go To Top" /></span
    >
  </div>
  <Footer />
</div>

<style>
  /* @import "../css/variables.css"; */
  /* @import "../css/fonts.css"; */
  /* @import "../css/sections/style.css"; */
  @import "../css/lib/animate.min.css";
  /* @import "../css/lib/slick.min.css"; */
  @import "../css/lib/swiper.min.css";
  @import "../css/lib/jquery-ui.min.css";
  @import "../css/lib/jquery.fancybox.min.css";
  @import "../css/lib/flaticon/css/flaticon.min.css";
  @import "../css/lib/simple-line-icons/css/simple-line-icons.min.css";
  @import "../css/lib/fontawesome/css/brands.css";
  @import "../css/lib/fontawesome/css/solid.css";
  @import "../css/lib/fontawesome/css/fontawesome.min.css";
  @import "../css/lib/bootstrap/bootstrap.min.css"; 
  /* @import "../css/animate.css"; */
  /* @import "../css/global.css"; */
  @import "../css/custom-animate.css";
  @import "../css/responsive.css";

  @import "../css/style.css";
</style>
