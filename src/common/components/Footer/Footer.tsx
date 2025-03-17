import { Text, Container } from "@mantine/core";
import { EmailBanner } from "../EmailBanner/EmailBanner";
import classes from "./FooterLinks.module.css";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Support", link: "#" },
      { label: "Discuss", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
];

const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
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
