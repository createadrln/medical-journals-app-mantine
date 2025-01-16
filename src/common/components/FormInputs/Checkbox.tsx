import { useState } from "react";
import { Checkbox } from "@mantine/core";

const ThemeCheckbox = ({
  defaultCheckedValue,
  label,
  value,
  handleGetCheckedValue,
}) => {
  const [checkedvalue, setCheckedValue] = useState(
    defaultCheckedValue || false
  );

  const handleOnChange = (value) => {
    setCheckedValue(!checkedvalue);
    handleGetCheckedValue(!checkedvalue, value);
  };

  return (
    <Checkbox
      label={label}
      checked={checkedvalue}
      onChange={() => handleOnChange(value)}
      tabIndex={-1}
      size="md"
      mr="xl"
      styles={{ input: { cursor: "pointer" } }}
      aria-hidden
    />
  );
};

export default ThemeCheckbox;
