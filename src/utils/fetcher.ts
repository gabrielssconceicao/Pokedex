export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(String(response.status));
  }

  return response.json() as Promise<T>;
}
