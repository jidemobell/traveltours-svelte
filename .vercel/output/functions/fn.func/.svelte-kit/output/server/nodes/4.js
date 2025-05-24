

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/error/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DiQRV285.js","_app/immutable/chunks/scheduler.D-Nhvq0g.js","_app/immutable/chunks/index.Cqr8rApB.js"];
export const stylesheets = [];
export const fonts = [];
