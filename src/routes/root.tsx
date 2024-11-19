import { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";
import { theme } from "../theme";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";
import PubMedView from "../features/covidResearch/components/PubMedView";
import DoajView from "../features/covidResearch/components/DoajView";

import { Button } from "@mantine/core";

export default function Root() {
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
          <>
            <h2>PubMed Articles</h2>
            <PubMedView filter={filter} limit={6} />
            <Button>View All</Button>
          </>
          <>
            <h2>DOAJ Articles</h2>
            <DoajView filter={filter} limit={6} />
            <Button>View All</Button>
          </>
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
