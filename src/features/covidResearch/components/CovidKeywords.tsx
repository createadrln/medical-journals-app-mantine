import { useState, useEffect } from "react";
import { Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { Keyword } from "../../../classes/articles";
import { fetchKeywords } from "../../../data/data";

const CovidKeywords = ({ setKeywordFilter }) => {
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
      <Group mb="20">
        {allKeywords.map((keywordItem: Keyword, index) => {
          return (
            keywordItem.count > 2 && (
              <Button
                key={index}
                variant="default"
                onClick={() => setKeywordFilter(keywordItem.keyword)}
              >
                {keywordItem.keyword.charAt(0).toUpperCase() +
                  keywordItem.keyword.slice(1)}{" "}
                ({keywordItem.count})
              </Button>
            )
          );
        })}
      </Group>
      <Button component={Link} to="/all-keywords" size="lg" mb="40">
        View All Keywords
      </Button>
    </>
  );
};

export default CovidKeywords;
