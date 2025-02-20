import { Card, Text, Button, Flex } from "@mantine/core";
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
      <Flex wrap="nowrap">
        {linksList.map((link: string, index: number) => (
          <Button
            justify="left"
            size="sm"
            key={`card-link-${id}-${index}`}
            component="a"
            href={link}
            mt="20"
          >
            View Article on {source}
          </Button>
        ))}
      </Flex>
    </Card>
  );
};

export default ArticleCard;
