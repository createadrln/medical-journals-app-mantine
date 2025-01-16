import { Articles } from "../classes/articles";

export const handleFetchArticles = (page = "1", pageSize = "6", sources, setData) => {
  const url = new URL("http://localhost:3000/journals");
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);

  if (sources.length > 0) {
    url.searchParams.append("source", JSON.stringify(sources));
  }

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data: Articles) => setData(data))
    .catch((error) => console.error("Error fetching articles:", error));
};
