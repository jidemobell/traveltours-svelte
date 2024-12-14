<script>
  import PackagesNew from "./components/PackagesNew.svelte";
  import TrendingDestinations from "./components/TrendingDestinations.svelte";


  export let data;
  const {packages} = data
</script>

<style>
   /* @import "../styles/utils/style.css"; */
</style>

<main>
  <!--Menu Backdrop-->
  <!-- {#if user}
  <p>Welcome, {user}!</p>
{:else}
  <p>You are not logged in.</p>
{/if} -->

  <div class="menu-backdrop" style="border: 5px black solid"></div>

  <!-- Hidden Navigation Bar -->
  <div class="hidden-bar">
    <!-- Hidden Bar Wrapper -->
    <div class="hidden-bar-wrapper">
      <div class="hidden-bar-closer">
        <span class="icon">
          <svg class="icon-close" role="presentation" viewBox="0 0 16 14">
            <path
              d="M15 0L1 14m14 0L1 0"
              stroke="currentColor"
              fill="none"
              fill-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div class="nav-logo-box">
        <!-- logo will be copied here ! -->
      </div>

      <!-- .Side-menu -->
      <nav class="side-menu">
        <!-- main-menu will be copied here! -->
      </nav>
      <!-- .side-menu -->

      <div class="links-box clearfix">
        <div class="clearfix">
          <div class="link">
            <a href="contact.html" class="theme-btn btn-style-one"
              ><span>Login / Signup</span></a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- / Hidden Bar Wrapper -->
  </div>
  <!-- / Hidden Bar -->

  <!-- Banner Section -->
  <div class="banner-section">
    <div class="banner-container">
      <div
        class="banner-arrow wow slideInLeft"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <img src="/images/background/banner-arrow.png" alt="" title="" />
      </div>
      <div class="auto-container">
        <div class="row clearfix">
          <div class="left-col col-lg-6 col-md-12">
            <div class="inner">
              <div class="clearfix">
                <div class="content">
                  <div class="bg-image">
                    <!-- <img src="/images/background/bg-gradient-1.png" alt="" title=""> -->
                  </div>
                  <h3>Start Travelling Now</h3>
                  <h1>
                    <i class="d-icon">
                      <!-- <img src="/images/elements/yellow-1.png" alt=""
                           title=""> -->
                    </i>Explore the Top Destinations of Ghana
                  </h1>
                  <p class="travilo-text">
                    Embrace the journey; Travel with passion and purpose.
                  </p>
                  <!-- <div class="form-box site-form">
                         <form method="post" action="index.html">
                           <div class="row clearfix">
                             <div
                               class="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12"
                             >
                               <div class="field-label">Destination</div>
                               <div class="field-inner">
                                 <input
                                   type="text"
                                   name="field-name"
                                   value=""
                                   placeholder="Where to go?"
                                   required
                                 />
                                 <i class="alt-icon fa fa-map-marker-alt"></i>
                               </div>
                             </div>
                             <div
                               class="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12"
                             >
                               <div class="field-label">Start</div>
                               <div class="field-inner">
                                 <input
                                   class="datepicker"
                                   type="text"
                                   name="field-name"
                                   value=""
                                   placeholder="Check in"
                                   required
                                 />
                                 <i class="alt-icon fa fa-calendar-alt"></i>
                               </div>
                             </div>
                             <div
                               class="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12"
                             >
                               <div class="field-label">End</div>
                               <div class="field-inner">
                                 <input
                                   class="datepicker"
                                   type="text"
                                   name="field-name"
                                   value=""
                                   placeholder="Check out"
                                   required
                                 />
                                 <i class="alt-icon fa fa-calendar-alt"></i>
                               </div>
                             </div>
                             <div
                               class="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12"
                             >
                               <div class="field-label">Guests</div>
                               <div class="field-inner">
                                 <input
                                   type="text"
                                   name="field-name"
                                   value=""
                                   placeholder="Guests"
                                   required
                                 />
                                 <i class="alt-icon fa fa-user"></i>
                               </div>
                             </div>
                           </div>
                           <button type="submit" class="theme-btn f-btn">
                             <span
                               >Search <i class="fa-solid fa-search"></i
                             ></span>
                           </button>
                         </form>
                       </div> -->
                  <!-- <p class="lower-text"><span>3200</span> tour packages waiting for you</p> -->
                </div>
              </div>
            </div>
          </div>
          <div class="right-col col-lg-6 col-md-12">
            <div
              class="inner wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div
                class="image-layer"
                style="
                       background-image: url(/images/resources/misc/ghanawall.jpg);
                     "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End Banner Section -->

  <!--Intro Section-->
  <!-- <div class="intro-section" style="border: 5px black solid;"> -->
  <div class="intro-section">
    <div class="auto-container">
      <div class="row clearfix justify-content-center">
        <!--Block-->
        <div class="intro-block col-lg-4 col-md-6 col-sm-12">
          <div
            class="inner-box wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div class="icon">
              <span><img src="/images/icons/intro-1.png" alt="" /></span>
            </div>
            <h4>Most Popular Destinations</h4>
            <p class="travilo-text">
              Discover the pristine beaches of Cape Coast and the breathtaking
              beauty of Kakum National Park, offering an unforgettable journey
              through Ghana's vibrant culture and natural wonders. Embark on an
              adventure of a lifetime and immerse yourself in the captivating
              charm of Ghana's most sought-after destinations.
            </p>
          </div>
        </div>
        <!--Block-->
        <div class="intro-block col-lg-4 col-md-6 col-sm-12">
          <div
            class="inner-box wow fadeInUp"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div class="icon">
              <span><img src="/images/icons/intro-2.png" alt="" /></span>
            </div>
            <h4>Budget Friendly Packages</h4>
            <p class="travilo-text">
              Explore the vibrant streets of Accra, delve into the rich history
              of Cape Coast, and unwind on the pristine beaches of Busua—all
              within your budget. With carefully curated itineraries and
              cost-effective options, embark on a memorable journey through
              Ghana without compromising on quality or experience.
            </p>
          </div>
        </div>
        <!--Block-->
        <div class="intro-block col-lg-4 col-md-6 col-sm-12">
          <div
            class="inner-box wow fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div class="icon">
              <span><img src="/images/icons/intro-3.png" alt="" /></span>
            </div>
            <h4>Satisfaction Guarranted</h4>
            <p class="travilo-text">
              From exploring historic landmarks to immersing yourself in vibrant
              culture, our expertly crafted tours are designed to delight and
              inspire. Discover the beauty of Ghana with confidence, knowing
              that your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--About Us Section-->
  <div class="about-section">
    <div class="bg-grad-right">
      <img src="/images/background/bg-gradient-2.png" alt="" title="" />
    </div>
    <div class="auto-container">
      <div class="row clearfix">
        <!--Text Col-->
        <div class="text-col col-lg-6 col-md-12 col-sm-12">
          <div
            class="inner wow fadeInRight"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div class="d-elem-1">
              <img src="/images/elements/green-1.png" alt="" />
            </div>
            <div class="title-box">
              <div class="subtitle">Let’s Explore Ghana with you</div>
              <!-- <h2><span>We Make Your Travel More Enjoyable</span></h2> -->
              <p class="travilo-text">
                Embrace a worry-free travel experience with us as we strive to
                make your journey more enjoyable. From seamless itineraries to
                handpicked accommodations, we take care of every detail, leaving
                you free to savor every moment and create unforgettable
                memories.
              </p>
            </div>
            <!-- <div class="features">
                 <div class="row clearfix">
                   <div class="f-block col-lg-6 col-md-6 col-sm-12">
                     <div class="inner-box">
                       <div class="icon">
                         <img src="/images/icons/f-icon-1.png" alt="">
                       </div>
                       <h6>Award winning tour & travel arranger</h6>
                     </div>
                   </div>
                   <div class="f-block col-lg-6 col-md-6 col-sm-12">
                     <div class="inner-box">
                       <div class="icon">
                         <img src="/images/icons/f-icon-2.png" alt="">
                       </div>
                       <h6>Most popular booking solution provider</h6>
                     </div>
                   </div>
                 </div>
               </div> -->
            <div class="lower-text">
              <div class="travilo-text">
                <ul>
                  <li>
                    Personalized Itineraries: Tailored to your preferences and
                    interests.
                  </li>
                  <li>
                    Hand picked premium Accommodations that guarantee comfort
                    and relaxation.
                  </li>
                  <li>
                    Dedicated 24/7 support team ready to assist you at any
                    moment.
                  </li>
                </ul>
              </div>
              <div class="link-box">
                <a href="about.html" class="theme-btn btn-style-one"
                  ><span>Read More</span></a
                >
              </div>
            </div>
          </div>
        </div>
        <!--Image Col-->
        <div class="image-col col-lg-6 col-md-12 col-sm-12">
          <div
            class="inner wow fadeInLeft"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div class="bg-grad-left">
              <img
                src="/images/background/bg-gradient-26.png"
                alt=""
                title=""
              />
            </div>
            <div class="image-box clearfix">
              <div class="image">
                <img
                  src="/images/jelvincoreimages/360_F_341274506_Ole4lgpQxgidB4wBLoFTjoPZvi7E5cyK.jpg"
                  alt="Tickets"
                  title="Tickets"
                />
              </div>
              <div class="image">
                <img
                  src="/images/jelvincoreimages/depositphotos_61521107-stock-photo-independence-arch-accra-ghana.jpg"
                  alt=""
                  title=""
                />
              </div>
            </div>
            <div class="exp">
              <span
                style="
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       justify-content: center;
                       margin-top: 50px;
                     "
              >
                Akwaaba
              </span>
              <!-- Akwaaba  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Packages Section-->
     <PackagesNew {packages} />
  <!--Trending Destinations Section-->
    <TrendingDestinations />
  <!--Tour Types Section-->
  
  <!--Why Us Section-->
  <div class="why-us">
    <div class="bg-grad-left">
      <img src="/images/background/bg-gradient-6.png" alt="" title="" />
    </div>
    <div class="bg-grad-right">
      <img src="/images/background/bg-gradient-5.png" alt="" title="" />
    </div>
    <div class="auto-container">
      <div class="row clearfix">
        <!--Text Col-->
        <div class="text-col col-lg-7 col-md-12 col-sm-12">
          <div
            class="inner wow fadeInRight"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div class="d-elem-1">
              <img src="/images/elements/purple-1.png" alt="" />
            </div>
            <div class="title-box">
              <div class="subtitle">Why Choose Travello</div>
              <h2>
                <span>We Let Your Sweet Memory Ever Unforgottable</span>
              </h2>
            </div>
            <div class="features">
              <div class="row clearfix">
                <div class="f-block-two col-lg-6 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="icon">
                      <img src="/images/icons/f-icon-3.png" alt="" />
                    </div>
                    <h4>Expert Travel Agent</h4>
                    <p class="travilo-text">
                      Trust in the guidance of our seasoned travel agents, to
                      curate your perfect journey.
                    </p>
                  </div>
                </div>
                <!-- .f-block-two -->

                <div class="f-block-two col-lg-6 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="icon">
                      <img src="/images/icons/f-icon-4.png" alt="" />
                    </div>
                    <h4>Easy Booking Options</h4>
                    <p class="travilo-text">
                      With our user-friendly booking platform, planning your
                      dream vacation becomes a breeze.
                    </p>
                  </div>
                </div>
                <!-- .f-block-two -->

                <div class="f-block-two col-lg-6 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="icon">
                      <img src="/images/icons/f-icon-5.png" alt="" />
                    </div>
                    <h4>World Class Service</h4>
                    <p class="travilo-text">
                      Immerse yourself in a world of unparalleled service, for
                      unforgettable travel experience.
                    </p>
                  </div>
                </div>
                <!-- .f-block-two -->

                <div class="f-block-two col-lg-6 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="icon">
                      <img src="/images/icons/f-icon-6.png" alt="" />
                    </div>
                    <h4>Total Secured Travel</h4>
                    <p class="travilo-text">
                      Rest assured as we prioritize your safety and peace of
                      mind, your travel is fully protected.
                    </p>
                  </div>
                </div>
                <!-- .f-block-two -->
              </div>
            </div>
          </div>
        </div>

        <!--Image Col-->
        <div class="image-col col-lg-5 col-md-12 col-sm-12">
          <div
            class="inner wow fadeInLeft"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div class="d-elem-2">
              <img src="/images/elements/yellow-2.png" alt="" />
            </div>
            <div class="image-box">
              <img
                src="/images/jelvincoreimages/istockphoto-656582672-612x612.jpg"
                alt=""
                title=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Facts Section-->
  <div class="facts-section">
    <div class="video-box wow fadeInUp">
      <div class="image-box">
        <img
          src="/images/jelvincoreimages//kwame-nkrumah-memorial-park-night-accra-ghana-knmp-national-named-osagyefo-dr-48817021.webp"
          alt=""
          title=""
        />
        <a
          href="https://www.youtube.com/watch?v=abwfc0tKCKI"
          class="lightbox-image vid-btn"
          ><span class="icon fa fa-play"><i class="ripple"></i></span></a
        >
      </div>
    </div>
    <div class="auto-container">
      <div class="fact-counter">
        <div class="row clearfix">
        
        </div>
      </div>
    </div>
  </div>

  <!--Testimonials Section-->
  <div class="testimonials-section">
    <div class="auto-container">
      <div class="title-box centered">
        <div class="subtitle">Testimonials</div>
        <h2><span>What Travelers Say</span></h2>
      </div>

      <div
        class="carousel-box wow fadeInUp"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <div class="bg-grad-left">
          <img src="/images/background/bg-gradient-8.png" alt="" title="" />
        </div>
        <div class="bg-grad-right">
          <img src="/images/background/bg-gradient-7.png" alt="" title="" />
        </div>
        <div class="d-elem-1">
          <img src="/images/elements/pink-2.png" alt="" />
        </div>
        <div class="testimonial-carousel">
          <!--Block-->
          <div class="testi-block-one">
            <div class="inner-box">
              <div class="icon">
                <span class="flaticon-left-quote"></span>
              </div>
              <p class="travilo-text">
                Exploring Ghana with this travel service was incredible! The
                itinerary was perfectly tailored to our interests, and our guide
                was both knowledgeable and friendly. We experienced the vibrant
                culture, beautiful landscapes, and rich history in a way we
                never could have on our own. Highly recommend for an
                unforgettable adventure in Ghana!
              </p>
              <div class="info">
                <div class="image">
                  <img
                    src="/images/resources/thumbnails/testi-1.jpg"
                    alt="Testimonial 1"
                  />
                </div>
                <div class="rating">
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <div class="name">Alex M, London UK</div>
                <!-- <div class="designation">London Uk</div> -->
              </div>
            </div>
          </div>
          <!-- .testi-block-one -->

          <!--Block-->
          <div class="testi-block-one">
            <div class="inner-box">
              <div class="icon">
                <span class="flaticon-left-quote"></span>
              </div>
              <p class="travilo-text">
                Our trip to Ghana was simply amazing! The tour was
                well-organized, and our guide was fantastic—so knowledgeable and
                friendly. We loved exploring the historic sites and beautiful
                landscapes. Everything exceeded our expectations. Highly
                recommended!
              </p>
              <div class="info">
                <div class="image">
                  <img
                    src="/images/resources/thumbnails/testi-2.jpg"
                    alt="Testimonial 2"
                  />
                </div>
                <div class="rating">
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <div class="name">Emily R, Canada</div>
                <!-- <div class="designation">Journalist</div> -->
              </div>
            </div>
          </div>
          <!-- .testi-block-one -->

          <!--Block-->
          <div class="testi-block-one">
            <div class="inner-box">
              <div class="icon">
                <span class="flaticon-left-quote"></span>
              </div>
              <p class="travilo-text">
                Exploring Ghana with this tour service was phenomenal! Our
                itinerary was well-planned, showcasing both popular sites and
                hidden gems. The guides were friendly and knowledgeable, making
                the experience truly enriching. The accommodations were
                comfortable and the entire trip was hassle-free. Highly
                recommend for an authentic Ghanaian adventure!
              </p>
              <div class="info">
                <div class="image">
                  <img
                    src="/images/resources/thumbnails/testi-3.jpg"
                    alt="Testimonial 3"
                  />
                </div>
                <div class="rating">
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <div class="name">John D, London UK</div>
                <!-- <div class="designation">Photographer</div> -->
              </div>
            </div>
          </div>
          <!-- .testi-block-one -->

          <!--Block-->
          <div class="testi-block-one">
            <div class="inner-box">
              <div class="icon">
                <span class="flaticon-left-quote"></span>
              </div>
              <p class="travilo-text">
                Exploring Ghana with this travel service was amazing! The
                itinerary was well-planned, showcasing both vibrant cities and
                beautiful landscapes. Our guide was friendly and knowledgeable,
                making each site visit memorable. Accommodations were
                comfortable and conveniently located. Highly recommend for an
                authentic Ghanaian adventure!
              </p>
              <div class="info">
                <div class="image">
                  <img
                    src="/images/resources/thumbnails/testi-4.jpg"
                    alt="Testimonial 4"
                  />
                </div>
                <div class="rating">
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <div class="name">Emily R. London UK</div>
                <!-- <div class="designation">Solo Adventurist</div> -->
              </div>
            </div>
          </div>
          <!-- .testi-block-one -->

  <!--Subscribe Section-->
  <div class="subscribe-section">
    <div class="auto-container">
      <div
        class="outer-box wow fadeInUp"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <div class="bg-grad-left">
          <!-- <img src="/images/background/bg-gradient-13.png" alt="" title=""> -->
        </div>
        <div class="bg-grad-right">
          <!-- <img src="/images/background/bg-gradient-14.png" alt="" title=""> -->
        </div>
        <div class="content-box">
          <!-- <div class="bg-layer"
               style="background-image: url(/images/resources/featured/banner-7.jpg);">
             </div> -->
          <div class="row clearfix">
            <div class="text-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="inner">
                <div class="title-box">
                  <div class="subtitle">Let’s Explore the World</div>
                  <h2>Get Special Offers in Your Inbox</h2>
                </div>
              </div>
            </div>
            <div class="form-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="inner">
                <div class="form-box subscribe-form">
                  <form method="post" action="contact.html">
                    <div class="form-group">
                      <div class="field-inner">
                        <input
                          type="email"
                          name="email"
                          value=""
                          placeholder="Submit your email"
                          required
                        />
                      </div>
                      <button type="submit" class="theme-btn">
                        <i class="icon fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
