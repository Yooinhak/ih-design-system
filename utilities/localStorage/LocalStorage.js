export function get(key) {
  if (window === undefined) {
    return;
  }

  return window.localStorage.getItem(key);
}

export function set(key, value) {
  if (window === undefined) {
    return;
  }

  window.localStorage.setItem(key, value);
}

export function remove(key) {
  if (window === undefined) {
    return;
  }

  window.localStorage.removeItem(key);
}

export function clear() {
  if (window === undefined) {
    return;
  }

  window.localStorage.clear();
}