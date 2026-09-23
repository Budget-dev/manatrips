// Client-side authentication storage for Mana Trips
export function brokeredPreviewStorage() {
  if (typeof window === "undefined") return undefined;
  return window.localStorage;
}
