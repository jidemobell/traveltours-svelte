
<script>
  export let destination
  $: data = (destination) ? destination : null
</script>

<style>
   .package-block {
     display: flex;
     max-width: 350px;
     max-height: 700px;
     /* border: yellow 5px solid; */
     margin-left: 10px;
     margin-top: 5px;
   }
</style>


{#if data !== null }
<div class="package-block">
  <div class="inner-box">
    <div class="image-box">
      <div class="image">
        <a href="tour-single.html"
          ><img
            src={data.links}
            alt={data.name}
          /></a
        >
      </div>
    </div>
    <div class="lower-box">
      <div class="p-icon">
        <img src="/images/icons/t-icon-9.png" alt="" />
        <span class="icon flaticon-family"></span>
      </div>
      <div class="location">{data.name}</div>
      <h5>
        <a href="tour-single.html">{data.description}</a>
      </h5>
      <div class="info clearfix">
        <div class="duration">
          <i class="fa-solid fa-clock"></i> 5 Days 6 Nights
        </div>
        <div class="persons">
          <i class="fa-solid fa-user"></i> 2
        </div>
      </div>
      <div class="bottom-box clearfix">
        <div class="rating">
          <a href="/error" class="theme-btn"
            ><i class="fa-solid fa-star"></i><strong>4.8</strong>
            &ensp;<span class="count">1260 Reviews</span></a
          >
        </div>
        <p class="price">
          Start from &ensp;<span class="amount">$199</span>
        </p>
      </div>
    </div>
  </div>
</div>
{/if}