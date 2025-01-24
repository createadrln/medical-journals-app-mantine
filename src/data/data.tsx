export const fetchArticles = async (
  page: string = "1",
  pageSize: string = "12",
  sources: string[],
  title: string = ""
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

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

export const fetchKeywords = async () => {
  const url = new URL("http://localhost:3000/keywords");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};
