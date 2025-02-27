import { useState } from "react";
import {
  MantineProvider,
  Container,
  Paper,
  Group,
  Button,
  Select,
} from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";
import { HeroText } from "../common/components/Hero/HeroText";
import ThemeCheckbox from "../common/components/FormInputs/Checkbox";
import CovidArticles from "../features/covidResearch/components/CovidArticles";

import { Articles } from "../classes/articles";

import { SelectItem } from "../classes/inputs";

export default function Root() {
  const [articles, setArticles] = useState<Articles>();

  /* Source Filter */
  const articleSources = ["PubMed", "Doaj", "Europe PMC"];
  const [filterSources, setFilterSources] = useState(articleSources);

  /* Title Filter */
  const [filterTitle, setFilterTitle] = useState("");

  /* Page Filter */
  const pageSizeSelect = [
    { label: "Show 12", value: "12" },
    { label: "Show 24", value: "24" },
    { label: "Show 60", value: "60" },
  ];
  const [pageSizeSelected, setPageSizeSelected] = useState<SelectItem>(
    pageSizeSelect[0]
  );

  /* Sort Filter */
  const sortBySelect = [
    { label: "Newest", value: "pub_date,DESC" },
    { label: "Oldest", value: "pub_date,ASC" },
    { label: "Title A-Z", value: "title,ASC" },
    { label: "Title Z-A", value: "title,DESC" },
  ];
  const [sortBySelected, setSortBySelected] = useState<SelectItem>(
    sortBySelect[0]
  );

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
      <HeroText articleCount={`${articles?.totalCount || "N/A"}`} />
      <Container size="lg">
        <main>
          <Group justify="right" mb="20">
            <Select
              placeholder={sortBySelected.label}
              data={sortBySelect}
              onChange={(selection: string) => {
                const sortBySelectValue = sortBySelect.find(
                  (sortByValue: SelectItem) => sortByValue.value === selection
                );
                sortBySelectValue && setSortBySelected(sortBySelectValue);
                return;
              }}
            />
            <Select
              placeholder={pageSizeSelected.label}
              data={pageSizeSelect}
              onChange={(selection: string) => {
                const pageSizeSelectValue = pageSizeSelect.find(
                  (pageSizeValue: SelectItem) => pageSizeValue.value === selection
                );
                pageSizeSelectValue && setPageSizeSelected(pageSizeSelectValue);
                return;
              }}
            />
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
                  onClick={() => setFilterTitle("")}
                >
                  Clear
                </Button>
              </Group>
              <Group justify="right">{getSourceCheckboxes()}</Group>
            </Group>
          </Paper>
          <CovidArticles
            selectedSources={filterSources}
            selectedSort={sortBySelected}
            filterTitle={filterTitle}
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
