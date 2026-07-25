import type { Metadata } from "next";
import { MorsLightExperience } from "./MorsLightExperience";

export const metadata: Metadata = {
  title: "Automating Clinical Nutrition: AI Agents, Web Apps, Predictive Nutrition and Future Technologies",
  description:
    "Disclaimer: These presentation slides were created with the assistance of Google Deep Research, Gemini Notebook, Gemini, and ChatGPT.",
};

export default function Home() {
  return <MorsLightExperience />;
}
