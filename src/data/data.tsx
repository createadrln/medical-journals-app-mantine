import { Articles } from "../classes/articles";

export const handleFetchArticles = (
  page: string = "1",
  pageSize: string = "12",
  sources: string[],
  title: string = '',
  setData
) => {
  const url = new URL("http://localhost:3000/journals");
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);

  if (sources.length > 0) {
    url.searchParams.append("source", JSON.stringify(sources));
  }

  if (title) {
    url.searchParams.append("title", title);
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
