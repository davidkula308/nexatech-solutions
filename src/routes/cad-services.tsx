import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/cad-services")({
  head: () => ({
    meta: [
      { title: "CAD Drafting, Plotting & Printing | NexaTech Solutions" },
      {
        name: "description",
        content:
          "2D drafting, floor plans, structural and MEP drawings, DWG/DXF and PDF conversions, A1–A3 CAD plotting, scanning and binding.",
      },
      { property: "og:title", content: "CAD Drafting, Plotting & Printing" },
      {
        property: "og:description",
        content: "Drafting, conversions and large-format plotting for students and practices.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Printing & CAD"
      title="Drafting, conversions and large-format plotting"
      intro="Bring us a sketch, a PDF or a DWG — leave with clean drawings, correct sheet sizes and printed copies."
      groups={[
        {
          title: "Drafting",
          items: [
            "2D drafting",
            "Floor plans",
            "Structural drawings",
            "Site plans",
            "Electrical drawings",
            "Plumbing drawings",
          ],
        },
        {
          title: "Conversions",
          items: [
            "PDF → CAD",
            "CAD → PDF",
            "DWG / DXF conversion",
            "Drawing corrections",
            "Sheet & title block setup",
          ],
        },
        {
          title: "Printing",
          items: [
            "A1 printing",
            "A2 printing",
            "A3 printing",
            "CAD plotting",
            "Scanning",
            "Binding",
            "Document printing",
          ],
        },
      ]}
    />
  ),
});
