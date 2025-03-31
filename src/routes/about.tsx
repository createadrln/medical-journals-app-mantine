import { MantineProvider, Container, Paper } from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";

export default function AllKeywords() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Container size="lg">
        <main>
          <Paper withBorder radius="md" p="md" mb="20">
            <h2>Mission Statement</h2>
            <p>Our mission is to change the landscape of Long COVID care by creating a comprehensive, diagnostic research platform that bridges the gap between complex clinical data and actionable medical insights. We are committed to empowering physicians and patients with a centralized, AI-enhanced database that consolidates peer-reviewed research on post-acute saquelae of SARS-CoV-2.</p>
            <h2>Current Situation</h2>
            <p>The persistent challenge of Long COVID has created an urgent need for medical professionals to access synthesized clinical data. As patients continue to present with diverse, persistent symptoms, clinicians struggle to incorporate rapidly evolving research into treatment decisions. A comprehensive dashboard would bridge the critical gap between emerging evidence and clinical application, ultimately improving patient outcomes while advancing our understanding of this complex condition.</p>
            <h2>Value Proposition</h2>
            <p>Our goal is to leverge the data and provide insights to rapidly help patients, driving forward our vision of:</p>
            <ul>
                <li>Accellerating diagnostic understanding.</li>
                <li>Facilitating targeted treatment protocols.</li>
                <li>Enabling personalized recovery pathways.</li>
                <li>Translating complex medical research into immediate clinical action.</li>
            </ul>
            <p>Through rigorous aggregation of clinical studies, advanced machine learning analytics, and a patient-centric approach, we are dedicated to turning data into hope, research into recovery, and scientific insights into tangible healing for those impacted by Long COVID.</p>
          </Paper>
        </main>
      </Container>
      <Footer />
    </MantineProvider>
  );
}
