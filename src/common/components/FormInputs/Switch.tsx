import { Group, Switch } from "@mantine/core";
import classes from "./CustomSwitch.module.css";

export default function CustomSwitch(props) {
  const { label } = props;
  return (
    <Group justify="center" p="md">
      <Switch label={label} classNames={classes} />
    </Group>
  );
}
