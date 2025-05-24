

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.5OAmFHq1.js","_app/immutable/chunks/scheduler.D-Nhvq0g.js","_app/immutable/chunks/index.Cqr8rApB.js"];
export const stylesheets = ["_app/immutable/assets/3.BF5WUWeW.css"];
export const fonts = [];
