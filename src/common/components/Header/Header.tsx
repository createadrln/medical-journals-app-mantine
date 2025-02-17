import { useState } from "react";
import { Burger, Container, Group, Button, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";

const links = [{ link: "/about", label: "About" }];

export default function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <NavLink
      component={Link}
      to={link.link}
      label={link.label}
      variant="default"
      active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    />
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <h1>COVID Research</h1>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
