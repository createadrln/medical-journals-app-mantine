import { useState, useEffect } from "react";
import { Group, Button } from "@mantine/core";

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
      <h2>Common Keywords</h2>
      <Group mb="40">
        {allKeywords.map((keywordItem: Keyword, index) => {
          return (
            keywordItem.count > 2 && (
              <Button key={index} variant="default">
                {keywordItem.keyword.charAt(0).toUpperCase() +
                  keywordItem.keyword.slice(1)}{" "}
                ({keywordItem.count})
              </Button>
            )
          );
        })}
        <Button size="lg" mt="20">View All Keywords</Button>
      </Group>
    </>
  );
};

export default CovidKeywords;
