import { useState, useEffect } from "react";
import { Grid, Group } from "@mantine/core";
import { Articles, Article } from "../../../classes/articles";
import ArticleCard from "../../../common/components/ThemeCard/ThemeCard";
import Pagination from "../../../common/components/Pagination/pagination";

const AllCovidSourcesView = ({ selectedSources, pageSizeSelected }) => {
  const [articles, setArticles] = useState<Articles>();

  const handleUpdateArticles = (pageSizeSelected) => {
    const url = `http://localhost:3000/journals?page=${1}&pageSize=${pageSizeSelected}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Articles) => setArticles(data))
      .catch((error) => console.error("Error fetching journals:", error));
  };

  useEffect(() => {
    handleUpdateArticles(pageSizeSelected.value);
  }, [pageSizeSelected, selectedSources]);

  if (!articles) {
    return <p>Something went wrong...</p>;
  }

  if (!articles.data) {
    return <p>No journal data available...</p>;
  }

  return articles.data.length === 0 ? (
    <p>No articles found.</p>
  ) : (
    <Group>
      <Grid>
        {articles.data.map((article: Article) => (
          <Grid.Col key={article.id} span={{ base: 12, xs: 4 }}>
            <ArticleCard
              id={article.id}
              title={article.title}
              links={article.link}
              authors={article.authors}
              source={article.source}
              pubdate={article.pub_timestamp}
            />
          </Grid.Col>
        ))}
      </Grid>
      <Pagination
        currentPage={articles!.page}
        totalPages={articles!.totalCount}
        onPageChange={handleUpdateArticles}
      />
    </Group>
  );
};

export default AllCovidSourcesView;
