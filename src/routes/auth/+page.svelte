<script>
  import { onMount } from "svelte";

  import { auth, provider, signInWithRedirect } from "$lib/firebase.js";

  function handleGoogleLogin() {
    signInWithRedirect(auth, provider);
  }

  onMount(async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        // User is signed in
        const user = result.user;
        const idToken = await user.getIdToken();
        console.log("User info:", user);
        // You can redirect the user to another page or handle the user info as needed
        await fetch("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken }),
        });
      }
    } catch (error) {
      console.error("Error during sign-in with redirect:", error);
    }
  });
</script>

<main class="main-container">
  <div class="login-container centered">
    <!-- Illustration Section -->
    <div class="illustration" id="overlay">
      <img
        src="/images/jelvincoreimages/istockphoto-656582672-612x612.jpg"
        alt="Login Illustration"
      />
    </div>

    <!-- Login Form Section -->
    <div class="login-form">
      <!-- <h1>Welcome to Design School</h1> -->
      <div class="social-login" style="border: red solid 1px;">
        <button on:click={handleGoogleLogin}>
          <img
            src="/images/jelvincoreimages/toursicons/2993685_brand_brands_google_logo_logos_icon.svg"
            alt="Google Icon"
          />
          Login with Google
        </button>
      </div>

      <div class="divider">
        <span></span>
        <p>OR</p>
        <span></span>
      </div>

      <form>
        <input type="email" placeholder="Email" required class="liner" />
        <input type="password" placeholder="Password" required class="liner" />
        <!-- <div class="extra-options">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot Password?</a>
        </div> -->
        <button type="submit">Login</button>
      </form>

      <p>Don’t have an account? <a href="#">Register</a></p>
    </div>
  </div>
</main>

<style>
  .main-container {
    width: 100%;
    height: 100vh;
    /* border: green solid 4px; */
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;
    /* margin: 70px; */
    /* padding-top: 10%; */
    /* padding-bottom: 10%; */
    margin-top: 100px;
  }

  #overlay {
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
  }

  .login-container {
    /* top: 1000px; */
    display: flex;
    /* width: 100%; */
    max-width: 800px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    /* border: red solid 1px; */
    /* overflow-y: auto; */
    /* height: calc(100vh - 60px); */
    margin-top: 300px;
    margin-bottom: 300px;
  }

  .illustration {
    flex: 1;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px red solid; */
    background: url("/images/background/bg-gradient-2.png");
  }

  .illustration img {
    max-width: 100%;
    height: auto;
  }

  .login-form {
    flex: 1;
    padding: 2rem;
  }

  .login-form h1 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .login-form button,
  .login-form input {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0;
    border: 1px solid rgba(128, 128, 128, 0.122);
    border-radius: 4px;
    outline: none;
  }

  .login-form button {
    /* background-color: #6f42c1; */
    background-color: #f48710;
    color: white;
    cursor: pointer;
  }

  .login-form button:hover {
    /* background-color: #5a35a0; */
    /* background-color: #51D77A; */
  }

  .social-login {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .social-login button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    color: #333;
    /* border: 1px solid #ccc; */
    /* color: white; */
    background: white;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    box-shadow: rgba(149, 157, 165, 0.121) 0px 8px 24px;
  }

  .social-login button img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }

  .divider {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }

  .divider span {
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }

  .divider p {
    margin: 0 1rem;
    color: #888;
  }

  .extra-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .extra-options a {
    text-decoration: none;
    color: #6f42c1;
  }

  .extra-options a:hover {
    text-decoration: underline;
  }
</style>
