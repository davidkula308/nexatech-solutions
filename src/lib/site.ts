export const WHATSAPP_NUMBER = "254700000000";
export const EMAIL = "hello@nexatechsolutions.co.ke";
export const LOCATION = "Nairobi, Kenya";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/software", label: "Software" },
  { to: "/cad-engineering", label: "CAD & Engineering" },
  { to: "/gaming", label: "Gaming" },
  { to: "/computer-services", label: "Computer Services" },
  { to: "/digital-services", label: "Digital" },
  { to: "/pricing", label: "Pricing" },
] as const;

export const SERVICE_OPTIONS = [
  "AutoCAD",
  "Revit",
  "Civil 3D",
  "SolidWorks",
  "Autodesk Inventor",
  "ETABS",
  "SAP2000",
  "MATLAB",
  "SketchUp",
  "Adobe Photoshop",
  "Microsoft Office",
  "Complete Laptop Setup",
  "Windows Installation",
  "Gaming PC Setup",
  "CAD Plotting / Printing",
  "Website Development",
];

export const INSTALL_METHODS = ["Remote", "Physical", "License Assistance"];
export const DEVICES = ["Laptop", "Desktop"];
export const OPERATING_SYSTEMS = ["Windows 11", "Windows 10", "macOS"];
