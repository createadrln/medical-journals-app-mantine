export const fetchArticles = async (
  page: number = 1,
  pageSize: number = 12,
  sources: string[],
  sort: {value: string, label: string},
  title: string = ""
) => {
  const url = new URL("http://localhost:3000/journals");
  url.searchParams.append("page", page.toString());
  url.searchParams.append("pageSize", pageSize.toString());

  if (sources.length > 0) {
    url.searchParams.append("source", JSON.stringify(sources));
  }

  if (title) {
    url.searchParams.append("title", title);
  }

  if (sort) {
    url.searchParams.append("sort", sort.value.split(",")[0]);
    url.searchParams.append("order", sort.value.split(",")[1]);
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
