import { AxiosError } from "axios";

export function handleError<T>(error: AxiosError<T>): string {
  if (error.response) {
    return `Error: ${error.response.status} - ${
      error.response.data || "No message available"
    }`;
  } else if (error.request) {
    return "Network error: No response received from server";
  } else {
    return `An unexpected error occurred: ${error.message || "Unknown error"}`;
  }
}
