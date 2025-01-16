import { Article } from "../../classes/articles";
import { shuffleArray } from "./Common";

export const filteredArticles = (
  articles,
  limit,
  filter,
  source = "random"
) => {
  const filteredArticles = articles.filter((article: Article, index) => {
    const limitSetting = limit || articles.length + 1;
    if (index < limitSetting) {
      const title = article.title || "";
      if (filter == "") {
        return title;
      }
      return title.toLowerCase().includes(filter.toLowerCase());
    }
  });

  if (source != "random") {
    return filteredArticles.filter(
      (article: Article) => article.source.toLowerCase() == 'pubmed'
    );
  }

  return shuffleArray(filteredArticles);
};
