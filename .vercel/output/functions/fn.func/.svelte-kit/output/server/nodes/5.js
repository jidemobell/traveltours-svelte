import * as server from '../entries/pages/user/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/user/+page.server.js";
export const imports = ["_app/immutable/nodes/5.DGiI9iU_.js","_app/immutable/chunks/scheduler.D-Nhvq0g.js","_app/immutable/chunks/index.Cqr8rApB.js"];
export const stylesheets = ["_app/immutable/assets/5.BAPsEpfK.css"];
export const fonts = [];
