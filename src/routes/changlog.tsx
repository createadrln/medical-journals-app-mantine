import { MantineProvider, Container, Paper } from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";
import classes from "../styles/core.module.css";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";

export default function Changelog() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Container size="lg">
        <main>
          <Paper
            className={classes.paperWrapper}
            radius="md"
            p="md"
            mb="20"
          >
            <h1>Changelog</h1>
            <h2>3/31/2025</h2>
            <ul>
              <li>Added About Us Page.</li>
              <li>Added Changelog Page.</li>
              <li>Added Springer Data source.</li>
            </ul>
            <h2>5/07/2025</h2>
            <ul>
              <li>Added 2025 and 2024 PubMed articles.</li>
              <li>Added 2023 PubMed articles.</li>
              <li>Enabled mailing list signup.</li>
            </ul>
          </Paper>
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
