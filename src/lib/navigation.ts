export const RETURN_KEY = 'pokemon:returnUrl';

export function saveReturnUrl(url: string) {
  if (!sessionStorage.getItem(RETURN_KEY)) {
    sessionStorage.setItem(RETURN_KEY, url);
  }
}

export function getReturnUrl() {
  if (!sessionStorage.getItem(RETURN_KEY)) return '';
  return sessionStorage.getItem(RETURN_KEY);
}
