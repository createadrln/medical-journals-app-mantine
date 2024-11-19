import { Grid } from "@mantine/core";
import ArticleCard from "../../../common/components/ThemeCard/ThemeCard";

import pubMedData from "../data/pubmed_detail.json";

const PubMedView = (props) => {
  const { filter, limit } = props;

  if (!pubMedData) {
    return <p>Loading PubMed data...</p>;
  }

  const { uids } = pubMedData.result;
  const articles = uids.map((uid) => pubMedData.result[uid]);

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
        <Grid.Col key={article.uid} span={{ base: 12, xs: 4 }}>
          <ArticleCard
            title={article.title}
            link={`https://pubmed.ncbi.nlm.nih.gov/${article.uniqueId}`}
            authors={article.authors.map((author) => author.name).join(", ")}
            source={article.source}
            volume={article.volume}
            issue={article.issue}
            pages={article.pages}
            pubdate={article.pubdate}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default PubMedView;
