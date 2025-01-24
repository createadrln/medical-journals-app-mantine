export type Articles = {
  page: number;
  pageSize: number;
  totalCount: number;
  data: Article[];
};

export type Article = {
  id: string;
  title: string;
  authors: Author[];
  source: string;
  pub_date: string;
  pub_timestamp: string;
  link: string[];
};

type Author = {
  name: string;
};

export type Keywords = {
  id: number;
  keyword: string;
  article_id: string;
};
