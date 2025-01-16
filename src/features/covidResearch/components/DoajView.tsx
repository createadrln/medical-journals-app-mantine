import { Grid } from "@mantine/core";
import ArticleCard from "../../../common/components/ThemeCard/ThemeCard";

import doajData from "../data/doaj.json";

const DoajView = (props) => {
  const { filter, limit } = props;

  // Return a simple message if no data is found
  if (!doajData) {
    return <p>Loading Doaj data...</p>;
  }

  // Extract useful information to display
  const articles = doajData.results.map((article) => article.bibjson);
  const filteredArticles = () => {
    return articles.filter((article, index) => {
      const limitSetting = limit || articles.length + 1;
      if (index < limitSetting) {
        const title = article.title || "";
        if (filter == "") {
          return title;
        }
        return title.toLowerCase().includes(filter.toLowerCase());
      }
    });
  };

  return filteredArticles().length === 0 ? (
    <p>No articles found.</p>
  ) : (
    <Grid grow>
      {filteredArticles().map((article) => (
        <Grid.Col key={article.identifier[0].id} span={{ base: 12, xs: 4 }}>
          <ArticleCard
            title={article.title}
            authors={article.author.map((author) => author.name).join(", ")}
            source={article.title}
            volume={article.journal.volume}
            issue={article.journal.number}
            pubdate={article.year}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default DoajView;
