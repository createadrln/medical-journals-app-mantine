// import { useState } from "react";
import {
  MantineProvider,
  Container,
  Paper,
} from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";

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
          <Paper withBorder radius="md" p="md" mb="20">
            Keyword functionality is in development
          </Paper>
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
