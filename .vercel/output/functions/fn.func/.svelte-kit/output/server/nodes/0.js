import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.C5jIgDBA.js","_app/immutable/chunks/scheduler.D-Nhvq0g.js","_app/immutable/chunks/index.Cqr8rApB.js"];
export const stylesheets = ["_app/immutable/assets/0.re84NU7-.css"];
export const fonts = ["_app/immutable/assets/flaticon.HrcbWWyW.ttf","_app/immutable/assets/flaticon.BBW151El.woff","_app/immutable/assets/flaticon.DcUHerSg.woff2","_app/immutable/assets/Simple-Line-Icons.D0KobG-u.woff2","_app/immutable/assets/Simple-Line-Icons.mVuQrdSX.ttf","_app/immutable/assets/Simple-Line-Icons.BAgH0-Pt.woff","_app/immutable/assets/fa-brands-400.C-jaCRNI.woff2","_app/immutable/assets/fa-brands-400.D7HcTrzQ.ttf","_app/immutable/assets/fa-solid-900.tLH6XCuf.woff2","_app/immutable/assets/fa-solid-900.f4MajOib.ttf"];
