export const updateNameApi = async (data) => {
  const response = await fetch("https://www.testsave/name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
