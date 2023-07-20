const BASE_URL = "http://localhost:5000/v1/"

export async function $get(endpoint, metadata) {
  return useFetch(endpoint, {
    baseURL: BASE_URL,
    method: "GET",
    initialCache: false,
    ...metadata
  });
}

export async function $exit(endpoint) {
  return useFetch(endpoint, {
    baseURL: "http://localhost:5000/",
    method: "GET",
    initialCache: false,
  });
}

export async function $post(endpoint, body, metadata) {
  return useFetch(endpoint, {
    baseURL: BASE_URL,
    method: "POST",
    body: body,
    initialCache: false,
    ...metadata
  });
}
