const createBaseURL = () => {
  return `${process.env.NEXT_PUBLIC_BACKEND_BASE || ''}/api`;
};

const baseURL = createBaseURL();

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
  signal,
}: {
  url: string;
  method: string;
  params?: any;
  data?: unknown;
  responseType?: string;
  headers?: HeadersInit | undefined;
  signal?: AbortSignal | undefined;
}): Promise<T> => {
  const response = await fetch(`${baseURL}${url}?` + `${new URLSearchParams(params).toString()}`, {
    method,
    ...(data ? { body: JSON.stringify(data) } : {}),
    headers,
    signal,
  });

  const json = await response.json();

  return json;
};

export default customInstance;
