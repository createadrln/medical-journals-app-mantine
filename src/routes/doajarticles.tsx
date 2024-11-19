import { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";
import { theme } from "../theme";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";
import DoajView from "../features/covidResearch/components/DoajView";

export default function DoajArticlesPage() {
  const [filter, setFilter] = useState("");
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Container size="lg" my="md">
        <main>
          <input
            type="text"
            placeholder="Filter articles by title"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ marginBottom: "20px", padding: "5px", width: "300px" }}
          />
          <DoajView filter={filter} />
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
