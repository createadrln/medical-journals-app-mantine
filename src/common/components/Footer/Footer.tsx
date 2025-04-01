import { Text, Container, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import { EmailBanner } from "../EmailBanner/EmailBanner";
import classes from "./FooterLinks.module.css";

const data = [
  {
    title: "About",
    links: [
      { label: "Project Description", link: "/about" },
      { label: "Support", link: "#" },
      { label: "Discuss", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Changelog", link: "/changelog" },
      { label: "Releases", link: "#" },
    ],
  },
];

const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link) => (
      <Anchor
        key={link.label}
        className={classes.link}
        component={Link}
        to={link.link}
      >
        {link.label}
      </Anchor>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <>
      <EmailBanner />
      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.groups}>{groups}</div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
