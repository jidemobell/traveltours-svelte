import adapter from '@sveltejs/adapter-cloudflare';
// import vercel from '@sveltejs/adapter-vercel';


// config for cloudflare
export default {
  kit: {
    adapter: adapter()
  }
};