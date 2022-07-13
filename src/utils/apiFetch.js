const apiFetch = async (articleName) => {
  const response = await fetch(
    articleName
      ? `/.netlify/functions/api/${articleName}`
      : "/.netlify/functions/api"
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export default apiFetch;
