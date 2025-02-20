import { Button, Text, TextInput, Title, Container } from "@mantine/core";
import classes from "./EmailBanner.module.css";

export function EmailBanner() {
  return (
    <Container size="lg" my="md">
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Subscribe for updates</Title>
          <Text fz="sm">We will update you when we release new features.</Text>
          <div className={classes.controls}>
            <TextInput
              size="lg"
              placeholder="Your email"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            />
            <Button className={classes.control} size="lg">Subscribe</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
