export const service = (url, method = "get", data) => {
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        return resolve(response.json());
      } else {
        return response.json().then(res => reject(res.error));
      }
    });
  });
};

export const saveToken = token => {
  localStorage.setItem("token", token);
};
