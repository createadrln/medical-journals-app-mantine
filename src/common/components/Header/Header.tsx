import {
  Burger,
  Container,
  Group,
  Anchor,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
];

export default function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Anchor
      component={Link}
      to={link.link}
      ml="20"
      key={link.label}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Anchor c="black" component={Link} to="/" underline="never">
          <h1>COVID Research</h1>
        </Anchor>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
