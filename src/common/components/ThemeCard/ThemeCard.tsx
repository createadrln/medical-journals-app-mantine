import { Card, Text } from "@mantine/core";
import classes from "./ThemeCard.module.css";

const ArticleCard = (props) => {
  const { id, title, links, source, pubdate } = props;

  /* @TODO: figure out how to use the JSON object with SQLite, or use a different DB */
  const linksList = links.replace(/\[|\]/g, "").split(",");

  /* @TODO: remove articles that don't have links */
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Text>
        <strong>Source:</strong> {source.toUpperCase()}
      </Text>
      <Text>
        <strong>Date:</strong> {pubdate}
      </Text>
      <Text className={classes.title} fw={500} component="a">
        {title}
      </Text>
      <Text mt="5">
        {linksList.map((link: string, index) => (
          <a key={`card-link-${id}-${index}`} href={link.slice(1).slice(0, -1)}>
            {link.slice(1).slice(0, -1)}
          </a>
        ))}
      </Text>
    </Card>
  );
};

export default ArticleCard;
