import { useState, useEffect } from "react";
import { Group } from "@mantine/core";

import { Keyword } from "../../../classes/articles";
import { fetchKeywords } from "../../../data/data";

const CovidKeywords = () => {
  const [allKeywords, setAllKeywords] = useState<Keyword[]>([]);

  const handleFetchKeywords = async () => {
    const keywords = await fetchKeywords();
    if (keywords) {
      setAllKeywords(keywords);
    } else {
      console.error("Failed to fetch keywords.");
    }
  };

  useEffect(() => {
    handleFetchKeywords();
  }, []);

  return (
    <>
      <h2>Keywords</h2>
      <Group>
        {allKeywords.map((keywordItem: Keyword) => {
          return <span key={keywordItem.id}>{keywordItem.keyword}</span>;
        })}
      </Group>
    </>
  );
};

export default CovidKeywords;
