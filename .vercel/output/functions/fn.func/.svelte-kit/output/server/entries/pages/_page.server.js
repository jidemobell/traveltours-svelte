async function load({ fetch }) {
  const res = await fetch("https://jelvintours.testmobell.workers.dev/api/packages");
  const packages = res.ok ? await res.json() : [];
  return { packages };
}
export {
  load
};
