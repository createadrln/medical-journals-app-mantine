import { useState } from "react";
import { Button, Text, TextInput, Title, Container } from "@mantine/core";
import classes from "./EmailBanner.module.css";

import { API_URL } from "../../../data/data";

export function EmailBanner() {
  const [email, setEmail] = useState("");
  const url = new URL(`${API_URL}/subscribe`);

  const handleSubscribe = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Subscription successful!");
        setEmail(""); // Clear the input field
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            />
            <Button
              className={classes.control}
              size="lg"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
