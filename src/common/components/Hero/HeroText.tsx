import { Container, Text, Title } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./HeroText.module.css";

export function HeroText({ articleCount }) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Search
          <Text component="span" className={classes.highlight} inherit>
            {" "}
            {articleCount}{" "}
          </Text>
          <u>articles</u>, <u>data</u>, and <u>keywords</u>.
        </Title>
        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            A free application for anyone who wants to learn more about COVID.
          </Text>
        </Container>
      </div>
    </Container>
  );
}
