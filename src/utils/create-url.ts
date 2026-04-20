import { BASE_URL } from '@/constants/base-url';

type QueryParams = Record<string, string | number | boolean | undefined>;

export function createUrl(route: string, searchParams?: QueryParams): string {
  const url = new URL(`${BASE_URL}/${route}`);

  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  return url.toString();
}
