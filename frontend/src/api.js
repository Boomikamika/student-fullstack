
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// hhandles errors and returns clear messages
function handleError(error) {
  // server response
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;

    // stud not found
    if (status === 404) {
      return typeof data === "string"
        ? data
        : data?.error || data?.message || data;
    }

    // Validation errors
    if (status === 400) {
      return data;
    }

    return data?.error || data?.message || "Request failed";
  }

  // Server is stopped or unreachable
  if (!error.response) {
    return "Server is not reachable";
  }

  return "Something went wrong";
}

// Get all students
export async function getStudents() {
  try {
    const response = await api.get("/api/students");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
}

// Add a student
export async function addStudent(student) {
  try {
    const response = await api.post("/api/students", student);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
}

// Delete a student by ID

export async function deleteStudent(id) {
  try {
    const response = await api.delete(`/api/students/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const data = error.response.data;

      if (error.response.status === 404) {
        return typeof data === "string"
          ? data
          : data?.error || data?.message || `Student not found with id ${id}`;
      }

      if (error.response.status === 400) {
        return data;
      }

      return data?.error || data?.message || "Request failed";
    }

    return "Server is not reachable";
  }
}

export default api;