import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";
import { theme } from "../../theme";

import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";

export default function ErrorPage() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Container size="lg" my="md">
        <main>You have reached this page by accident</main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
