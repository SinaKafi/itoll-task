export function handleError(error: any): string {
  if (error.response) {
    return `Error: ${error.response.status} - ${
      error.response.data?.message || "No message available"
    }`;
  } else if (error.request) {
    return "Network error: No response received from server";
  } else {
    return "An unexpected error occurred";
  }
}
