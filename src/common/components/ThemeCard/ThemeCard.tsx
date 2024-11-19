// import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  Card,
  // Image,
  Text,
  // ActionIcon,
  // Badge,
  Group,
  Center,
  // Avatar,
  // rem,
} from "@mantine/core";
import classes from "./ThemeCard.module.css";

const ArticleCard = (props) => {
  const { title, link, authors, source, volume, issue, pages, pubdate } = props;

  return (
    <Card withBorder radius="md" className={classes.card}>
      {/* <Card.Section>
        <a href{...linkProps}>
          <Image src="https://i.imgur.com/Cij5vdL.png" height={180} />
        </a>
      </Card.Section> */}

      {/* <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        outstanding
      </Badge> */}

      <Text>{pubdate}</Text>
      <Text className={classes.title} fw={500} component="a">
        {title}
      </Text>

      <a href={link}>Article Link</a>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Text fz="sm" inline>
            {authors}
          </Text>
        </Center>
        <Center>
          <Text fz="sm" inline>
            <strong>Journal:</strong> {source}, <strong>Volume:</strong>{" "}
            {volume}, <strong>Issue:</strong> {issue}
          </Text>
        </Center>
        {pages && (
          <Center>
            <Text fz="sm" inline>
              <strong>Pages:</strong> {pages}
            </Text>
          </Center>
        )}

        {/* <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </ActionIcon>
        </Group> */}
      </Group>
    </Card>
  );
};

export default ArticleCard;
