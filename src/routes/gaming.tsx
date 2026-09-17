import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/gaming")({
  head: () => ({
    meta: [
      { title: "Gaming PC Setup & Game Installation | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Steam, Epic Games, EA app and Ubisoft Connect setup, controller configuration, graphics tuning and gaming PC builds configured properly.",
      },
      { property: "og:title", content: "Gaming PC Setup & Game Installation" },
      {
        property: "og:description",
        content: "Launchers, controllers and graphics settings tuned for smooth play.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Gaming"
      title="Gaming setup that just runs"
      intro="Legitimate games and launchers installed, controllers paired and graphics settings tuned to your hardware."
      groups={[
        {
          title: "Game launchers",
          items: ["Steam", "Epic Games", "EA app", "Ubisoft Connect", "Xbox / Game Pass app"],
        },
        {
          title: "Installation & setup",
          items: [
            "PC game installation",
            "Account & library setup",
            "Controller configuration",
            "Game troubleshooting",
          ],
        },
        {
          title: "Performance",
          items: [
            "Graphics settings optimization",
            "GPU driver installation",
            "Thermal & power tuning",
            "Storage cleanup",
          ],
        },
        {
          title: "Gaming PC Setup Package",
          description: "One visit, fully playable machine.",
          items: [
            "Windows install",
            "All drivers",
            "Graphics configuration",
            "Legitimate launcher setup",
            "Controller configuration",
          ],
        },
      ]}
      note="We only work with legitimate games, licences and official platforms."
    />
  ),
});
