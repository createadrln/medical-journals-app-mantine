import { useState } from "react";
import {
  MantineProvider,
  Container,
  Paper,
  Group,
  Button,
} from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";
import ThemeCheckbox from "../common/components/FormInputs/Checkbox";
import ThemeSelectMenu from "../common/components/FormInputs/SelectMenu";
import AllCovidSourcesView from "../features/covidResearch/components/AllCovidSourcesView";

import { Articles } from "../classes/articles";
import { handleFetchArticles } from "../data/data";

export default function Root() {
  const [articles, setArticles] = useState<Articles>();

  /* Source Filter */
  const articleSources = ["PubMed", "Doaj"];
  const [filterSources, setFilterSources] = useState(articleSources);

  /* Title Filter */
  const [filterTitle, setFilterTitle] = useState("");

  /* Page Filter */
  const pageSizeSelect = [
    { label: "Show 12", value: "12" },
    { label: "Show 24", value: "24" },
    { label: "Show 60", value: "60" },
  ];
  const [pageSizeSelectOpened, setPageSizeSelectOpened] = useState(false);
  const [pageSizeSelected, setPageSizeSelected] = useState(pageSizeSelect[0]);

  /* Sort Filter */
  const sortBySelect = [
    { label: "Random Order", value: "random" },
    { label: "Newest", value: "newest_first" },
    { label: "Oldest", value: "oldest_first" },
    { label: "Title A-Z", value: "title_az" },
    { label: "Title Z-A", value: "title_za" },
  ];
  const [sortBySelectOpened, setSortBySelectOpened] = useState(false);
  const [sortBySelected, setSortBySelected] = useState(sortBySelect[0]);

  const handleChangeArticleSource = (checkedStatus: boolean, value: string) => {
    if (checkedStatus && !filterSources.find((source) => source == value)) {
      setFilterSources([...filterSources, value]);
    } else {
      const index = filterSources.findIndex((source) => source == value);
      filterSources.splice(index, 1);
      setFilterSources([...filterSources]);
    }
  };

  const getSourceCheckboxes = () => {
    return articleSources.map((source) => {
      return (
        <ThemeCheckbox
          key={source}
          label={source.toUpperCase()}
          value={source}
          defaultCheckedValue={true}
          handleGetCheckedValue={handleChangeArticleSource}
        />
      );
    });
  };

  return (
    <MantineProvider theme={theme}>
      <Header />
      <Container size="lg" my="md">
        <main>
          <Group justify="space-between">
            <h2>Articles</h2>
            <Group align="right">
              <ThemeSelectMenu
                data={sortBySelect}
                selected={sortBySelected}
                opened={sortBySelectOpened}
                setOpened={setSortBySelectOpened}
                setSelected={setSortBySelected}
              />
              <ThemeSelectMenu
                data={pageSizeSelect}
                selected={pageSizeSelected}
                opened={pageSizeSelectOpened}
                setOpened={setPageSizeSelectOpened}
                setSelected={setPageSizeSelected}
              />
            </Group>
          </Group>
          <Paper withBorder radius="md" p="md" mb="20">
            <Group justify="space-between">
              <Group gap="xs">
                <input
                  type="text"
                  placeholder="Filter articles by title"
                  value={filterTitle}
                  onChange={(e) => setFilterTitle(e.target.value)}
                  style={{ padding: "5px", width: "500px" }}
                />
                <Button
                  className="mantine-focus-auto"
                  onClick={() =>
                    handleFetchArticles(
                      "1",
                      pageSizeSelected.value,
                      filterSources,
                      filterTitle,
                      setArticles
                    )
                  }
                >
                  Search
                </Button>
              </Group>
              <Group justify="right">{getSourceCheckboxes()}</Group>
            </Group>
          </Paper>
          <AllCovidSourcesView
            selectedSources={filterSources}
            pageSizeSelected={pageSizeSelected}
            articles={articles}
            setArticles={setArticles}
          />
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
