// Helper function to construct query parameters
function constructQueryParams(params?: Record<string, string>): string {
  const queryParams = new URLSearchParams(params || {});
  return queryParams.toString();
}

const handleResponseGracefully = async (response: Response) => {
  if (!response.ok) {
    let errorMessage = "An error occurred while fetching data";
    if (response.status >= 400 && response.status < 500) {
      // Client error
      const responseData = await response.json();
      errorMessage =
        responseData?.detail ||
        responseData?.error ||
        responseData?.message ||
        errorMessage;
    } else if (response.status >= 500 && response.status < 600) {
      // Server error
      errorMessage = "Server error, Something wrong with backend service";
    }
    throw new Error(errorMessage);
  }
  const data = await response.json();
  return data;
};

export const DataService = {
  get: async <T>(
    url: string,
    params: Record<string, string> = {}
  ): Promise<T> => {
    const queryParams = constructQueryParams(params);
    const fullUrl = `${url}?${decodeURIComponent(queryParams)}`;

    const response = await fetch(fullUrl);

    return handleResponseGracefully(response);
  },

  post: async <T>(url: string, data?: Record<string, any>): Promise<T> => {
    const queryParams = constructQueryParams();
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return handleResponseGracefully(response);
  },

  put: async <T>(url: string, data: Record<string, any>): Promise<T> => {
    const queryParams = constructQueryParams();
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    return handleResponseGracefully(response);
  },

  delete: async <T>(url: string): Promise<T> => {
    const queryParams = constructQueryParams();
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: "DELETE",
    });

    return handleResponseGracefully(response);
  },
};
