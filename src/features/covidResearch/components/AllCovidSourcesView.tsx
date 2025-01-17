import { useState, useEffect } from "react";
import { Grid, Group } from "@mantine/core";

import { Article } from "../../../classes/articles";
import ArticleCard from "../../../common/components/ThemeCard/ThemeCard";
import Pagination from "../../../common/components/Pagination/pagination";

import { handleFetchArticles } from "../../../data/data";

const AllCovidSourcesView = ({
  selectedSources,
  pageSizeSelected,
  articles,
  setArticles,
}) => {
  const [page, setPage] = useState<string>("1");

  useEffect(() => {
    handleFetchArticles(
      page,
      pageSizeSelected.value,
      selectedSources,
      "",
      setArticles
    );
  }, [page, pageSizeSelected, selectedSources, setArticles]);

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
        onPageChange={setPage}
      />
    </Group>
  );
};

export default AllCovidSourcesView;
