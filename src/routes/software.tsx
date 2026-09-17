import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/software")({
  head: () => ({
    meta: [
      { title: "Software Installation Services | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Microsoft 365, Adobe Creative Cloud, programming tools, PDF utilities and security software installed and configured for you.",
      },
      { property: "og:title", content: "Software Installation Services" },
      {
        property: "og:description",
        content: "Office, creative, programming and utility software installed and ready to use.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Software installation"
      title="Every everyday tool, installed and ready"
      intro="Office, creative, development and utility software installed, updated and configured on your machine — remotely or in person."
      groups={[
        {
          title: "Office & productivity",
          items: [
            "Microsoft 365",
            "Microsoft Office",
            "Microsoft Project",
            "Microsoft Visio",
            "LibreOffice",
          ],
        },
        {
          title: "Creative software",
          items: [
            "Adobe Photoshop",
            "Illustrator",
            "Premiere Pro",
            "After Effects",
            "InDesign",
            "Lightroom",
          ],
        },
        {
          title: "Programming & technical",
          items: [
            "Visual Studio",
            "VS Code",
            "Python",
            "Java / JDK",
            "Node.js",
            "Git",
            "Android Studio",
            "MATLAB",
          ],
        },
        {
          title: "Utilities",
          items: [
            "PDF tools",
            "Compression software",
            "Browsers",
            "Antivirus & security",
            "Drivers",
            "Backup software",
          ],
        },
        {
          title: "Cloud & backup",
          items: ["Google Drive", "OneDrive", "Dropbox", "Automatic backup setup"],
        },
        {
          title: "How it works",
          items: [
            "Remote installation over a secure session",
            "Physical installation at our workshop",
            "License purchase & activation assistance",
          ],
        },
      ]}
      note="Installation service and software licences are separate: if you already hold a valid licence you pay only for our service. Where you need a licence, we help you obtain a legitimate subscription through authorized options."
    />
  ),
});
