import { Group, Menu, UnstyledButton } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

import classes from "./SelectMenu.module.css";

const ThemeSelectMenu = ({
  data,
  setOpened,
  setSelected,
  opened,
  selected,
}) => {
  const items = data.map((item: object) => (
    <Menu.Item onClick={() => setSelected(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default ThemeSelectMenu;
