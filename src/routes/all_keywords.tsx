// import { useState } from "react";
import { MantineProvider, Container, Paper } from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";
import classes from "../styles/core.module.css";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";

// import { Keywords } from "../classes/articles";

export default function AllKeywords() {
  //   const [keywords, setKeywords] = useState<Keywords>();

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
            Keyword functionality is in development
          </Paper>
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
