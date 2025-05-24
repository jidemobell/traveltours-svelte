import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".dashboard.svelte-xrxv23{margin-top:200px;margin-bottom:200px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  export let data;\\n  const {user} = data\\n<\/script>\\n\\n<main class=\\"dashboard\\">\\n  <h1>Welcome, {user.uuid} and {user.exp}!</h1>\\n  <h4 style=\\"margin-bottom: 20px;\\">HOME OWNER</h4>\\n  <form method=\\"POST\\" action=\\"?/logout\\">\\n    <button type=\\"submit\\">Logout</button>\\n  </form></main>\\n<style>\\n   .dashboard {\\n    margin-top: 200px;\\n    margin-bottom: 200px;\\n   }\\n</style>"],"names":[],"mappings":"AAYG,wBAAW,CACV,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { user } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="dashboard svelte-xrxv23"><h1>Welcome, ${escape(user.uuid)} and ${escape(user.exp)}!</h1> <h4 style="margin-bottom: 20px;" data-svelte-h="svelte-1wj1v0f">HOME OWNER</h4> <form method="POST" action="?/logout" data-svelte-h="svelte-1jlenhp"><button type="submit">Logout</button></form></main>`;
});
export {
  Page as default
};
