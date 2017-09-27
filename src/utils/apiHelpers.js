export function parseJSON(response) {
  return response.json();
}

export function checkStatus(response) {
  if (response.status == 204) {
    const error = new Error('204');
    throw error;
  }

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // Get value from promise and throw error with custom messgae from backend
  return parseJSON(response).then((data) => {
    const error = new Error(data.errors[0].external_message);
    throw error;
  });
}
