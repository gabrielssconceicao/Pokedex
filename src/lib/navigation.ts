export const RETURN_KEY = 'pokemon:returnUrl';

export function saveReturnUrl(url: string) {
  sessionStorage.setItem(RETURN_KEY, url);
}

export function getReturnUrl() {
  return sessionStorage.getItem(RETURN_KEY);
}
