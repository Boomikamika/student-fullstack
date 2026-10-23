
const BASE_URL = import.meta.env.VITE_API_URL;

// Fetch data and handle HTTP errors
export async function getJson(url) {
  const response = await fetch(`${BASE_URL}${url}`);

  let data;
  const text = await response.text();

  // Handle JSON and non-JSON responses
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  // Throw an error if the response is unsuccessful
  if (!response.ok) {
    const message =
      typeof data === "string"
        ? data
        : data?.error || data?.message || response.statusText;

    throw new Error(`HTTP ${response.status}: ${message}`);
  }

  return data;
}

// Get a student by ID
export function getStudent(id) {
  return getJson(`/api/students/${id}`);
}
