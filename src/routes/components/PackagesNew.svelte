<script>
  export let packages;
  
  import Packagecard from "./Packagecard.svelte";

  $: allDestination = (packages) ? packages : []
</script>

<style>
  .packages-carousel {
    display: flex;
    /* border: 4px red solid; */
  }
</style>



<div>
  <div class="packages-section">
    <div
      class="bg-layer"
      style="background-image: url(/images/background/pattern-1.png)"
    ></div>
    <div class="auto-container">
      <div class="title-box">
        <div class="subtitle">Packages</div>
        <h2><span>Travel Packages</span></h2>
      </div>
      <div class="carousel-box">
        <div class="packages-carousel">
          {#each allDestination as destination}
             <Packagecard {destination} />
          {/each}
        </div>
      </div>
    </div>
  </div>

</div>