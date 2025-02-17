import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mantine/core";

import { Article } from "../../../classes/articles";
import ArticleCard from "../../../common/components/ThemeCard/ThemeCard";

import CovidKeywords from "./CovidKeywords";

import { fetchArticles } from "../../../data/data";
import { formatTimestamp } from "../../../utils/dateUtils";

const CovidArticles = ({
  selectedSources,
  selectedSort,
  filterTitle,
  pageSizeSelected,
  articles,
  setArticles,
}) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const handleFetchArticles = async () => {
      const articles = await fetchArticles(
        page,
        pageSizeSelected.value,
        selectedSources,
        selectedSort,
        filterTitle
      );
      if (articles) {
        setArticles(articles);
      } else {
        console.error("Failed to fetch articles.");
      }
    };
    handleFetchArticles();
  }, [
    page,
    pageSizeSelected,
    filterTitle,
    selectedSources,
    selectedSort,
    setArticles,
  ]);

  if (!articles) {
    return <p>Something went wrong...</p>;
  }

  if (!articles.data) {
    return <p>No journal data available...</p>;
  }

  return articles.data.length === 0 ? (
    <p>No articles found.</p>
  ) : (
    <>
      <Grid>
        {articles.data.map((article: Article) => (
          <Grid.Col key={article.id} span={{ base: 12, xs: 4 }}>
            <ArticleCard
              id={article.id}
              title={article.title}
              links={article.link}
              authors={article.authors}
              source={article.source}
              pubdate={formatTimestamp(parseFloat(article.pub_timestamp))}
            />
          </Grid.Col>
        ))}
      </Grid>
      <Pagination
        mt="20"
        mb="40"
        total={articles!.totalCount}
        value={articles!.page}
        onChange={setPage}
      />
      <CovidKeywords />
    </>
  );
};

export default CovidArticles;
