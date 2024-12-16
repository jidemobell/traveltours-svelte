// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-cloudflare';


// export default {
// 	kit: {
// 		// default options are shown
// 		adapter: adapter({
// 			// if true, will create a Netlify Edge Function rather
// 			// than using standard Node-based functions
// 			edge: false,

// 			// if true, will split your app into multiple functions
// 			// instead of creating a single one for the entire app.
// 			// if `edge` is true, this option cannot be used
// 			split: false
// 		})
// 	}
// };

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// See below for an explanation of these options
// 			routes: {
// 				include: ['/*'],
// 				exclude: ['<all>']
// 			},
// 			platformProxy: {
// 				configPath: 'wrangler.toml',
// 				environment: undefined,
// 				experimentalJsonConfig: false,
// 				persist: false
// 			}
// 		})
// 	}
// };

export default {
  kit: {
    adapter: adapter({
      // options
      pages: 'build', // Output directory for Cloudflare
      assets: 'build', // Directory for static assets
      fallback: null // Set to "index.html" for SPA behavior
    }),
    prerender: {
      default: true // Prerender all pages
    }
  }
};