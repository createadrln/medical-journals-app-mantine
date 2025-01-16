import { useState } from "react";
import { MantineProvider, Container, Paper, Group } from "@mantine/core";
import { theme } from "../theme";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";
import ThemeCheckbox from "../common/components/FormInputs/Checkbox";
import ThemeSelectMenu from "../common/components/FormInputs/SelectMenu";
import AllCovidSourcesView from "../features/covidResearch/components/AllCovidSourcesView";

import "@mantine/core/styles.css";

export default function Root() {
  /* Source Filter */
  const articleSources = ["PubMed", "Doaj"];
  const [filterSources, setFilterSources] = useState(articleSources);

  /* Title Filter */
  const [filterTitle, setFilterTitle] = useState("");

  /* Page Filter */
  const pageSizeSelect = [
    { label: "Show 6", value: 6 },
    { label: "Show 18", value: 18 },
    { label: "Show 36", value: 36 },
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
            <Group justify="left">
              <input
                type="text"
                placeholder="Filter articles by title"
                value={filterTitle}
                onChange={(e) => setFilterTitle(e.target.value)}
                style={{ padding: "5px", width: "500px", marginRight: "20px" }}
              />
              {getSourceCheckboxes()}
            </Group>
          </Paper>
          <AllCovidSourcesView
            selectedSources={filterSources}
            pageSizeSelected={pageSizeSelected}
          />
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
