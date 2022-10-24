export function preventMainContentScrolling() {
  document.body.style.overflowY = "hidden";
  return () => document.body.style.overflowY = "auto";
}