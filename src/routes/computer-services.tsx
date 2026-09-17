import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/computer-services")({
  head: () => ({
    meta: [
      { title: "Windows & Computer Services | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Windows installation and upgrades, drivers, formatting, optimization, virus removal, SSD/RAM upgrades and complete laptop setup in Nairobi.",
      },
      { property: "og:title", content: "Windows & Computer Services" },
      {
        property: "og:description",
        content: "Windows, drivers, optimization, security and full new-laptop setup.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Computer services"
      title="Windows, drivers and a machine that behaves"
      intro="From a fresh Windows install to a slow laptop rescued — setup, cleanup, security and upgrades handled end to end."
      groups={[
        {
          title: "Computer setup",
          items: [
            "Windows installation",
            "Windows upgrades",
            "Driver installation",
            "Computer formatting",
            "Printer setup",
            "Wi-Fi / network setup",
          ],
        },
        {
          title: "Complete Laptop Setup",
          description: "Our most requested package for new machines.",
          items: [
            "Windows configuration",
            "Drivers",
            "Office & PDF reader",
            "Browser & essential apps",
            "Security setup",
            "Updates & performance tuning",
          ],
        },
        {
          title: "Maintenance & repair",
          items: [
            "Laptop optimization",
            "Computer cleanup",
            "Basic troubleshooting",
            "Virus & malware removal",
            "Backup and data transfer",
            "SSD / RAM upgrade assistance",
          ],
        },
        {
          title: "Security",
          items: [
            "Antivirus installation",
            "Security configuration",
            "Account security review",
            "Backup solutions",
          ],
        },
        {
          title: "Remote IT support",
          description: "No need to leave your desk.",
          items: [
            "Secure remote sessions",
            "Software fixes",
            "Email & account setup",
            "Ongoing support plans",
          ],
        },
        {
          title: "Cloud setup",
          items: ["Google Drive", "OneDrive", "Dropbox", "Scheduled backups"],
        },
      ]}
    />
  ),
});
