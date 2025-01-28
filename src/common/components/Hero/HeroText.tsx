import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Search{' '}
          <Text component="span" className={classes.highlight} inherit>
            16891
          </Text>{' '}
          articles, data, and keywords.
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            A free application for anyone who wants to learn more about COVID.
          </Text>
        </Container>

        {/* <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button>
        </div> */}
      </div>
    </Container>
  );
}