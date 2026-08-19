export type ProductOffering = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  summary: string;
  category: string;
  accent: "amber" | "cyan" | "blue" | "coral" | "mint" | "violet";
  whatItIs: string;
  whatItDoes: string[];
  applications: string[];
  specs: string[];
  note?: string;
};

export const productOfferings: ProductOffering[] = [
  {
    slug: "metso",
    number: "01",
    name: "Metso",
    eyebrow: "CRUSHING + MATERIAL PROCESSING",
    summary: "Placeholder product portfolio page for Metso equipment represented by Trinity Enterprises.",
    category: "Crushing & Screening",
    accent: "amber",
    whatItIs: "A dedicated Trinity portfolio page for Metso solutions. Final product families, brochures, technical literature and verified specifications will be inserted during the content pass.",
    whatItDoes: ["Supports material processing workflows", "Can cover crushing and screening applications", "Portfolio can be tailored around customer project requirements"],
    applications: ["Quarries", "Aggregate processing", "Infrastructure projects", "Mining applications"],
    specs: ["Model / series — placeholder", "Capacity — placeholder", "Feed size — placeholder", "Power — placeholder"],
  },
  {
    slug: "mechtech-inframine",
    number: "02",
    name: "MechTech Inframine",
    eyebrow: "CRUSHING + MINING EQUIPMENT",
    summary: "Placeholder portfolio page for MechTech Inframine equipment and solutions.",
    category: "Mining & Aggregate Equipment",
    accent: "blue",
    whatItIs: "A dedicated Trinity page for MechTech Inframine offerings. Verified product descriptions, specifications and project imagery will be added before launch.",
    whatItDoes: ["Supports aggregate and mineral processing", "Provides equipment options for demanding applications", "Can be configured around project needs"],
    applications: ["Mining", "Quarrying", "Aggregate processing", "Infrastructure"],
    specs: ["Model — placeholder", "Capacity — placeholder", "Drive power — placeholder", "Configuration — placeholder"],
  },
  {
    slug: "capious-roadtech",
    number: "03",
    name: "CAPIOUS Roadtech Pvt. Ltd.",
    eyebrow: "ROAD + ASPHALT EQUIPMENT",
    summary: "Placeholder page for CAPIOUS Roadtech plant and road construction equipment.",
    category: "Road Infrastructure",
    accent: "coral",
    whatItIs: "A Trinity portfolio page for CAPIOUS Roadtech offerings, with final plant configurations, photos, brochures and technical specifications to be added.",
    whatItDoes: ["Supports road construction workflows", "Can cover hot mix and allied plant requirements", "Supports project-specific equipment selection"],
    applications: ["Road construction", "Highway projects", "Asphalt production", "Infrastructure works"],
    specs: ["Plant type — placeholder", "Capacity — placeholder", "Fuel / energy requirement — placeholder", "Configuration — placeholder"],
  },
  {
    slug: "saagmo-air-classifier",
    number: "04",
    name: "SAAGMO Air Classifier",
    eyebrow: "AIR CLASSIFICATION",
    summary: "Placeholder page for SAAGMO air classification solutions.",
    category: "Classification & Processing",
    accent: "mint",
    whatItIs: "A dedicated Trinity page for SAAGMO air classifier solutions, with verified technical details and imagery to be inserted later.",
    whatItDoes: ["Supports particle classification workflows", "Can be part of material processing systems", "Supports application-specific separation requirements"],
    applications: ["Mineral processing", "Aggregates", "Industrial powders", "Material classification"],
    specs: ["Classifier model — placeholder", "Feed rate — placeholder", "Particle range — placeholder", "Power — placeholder"],
  },
  {
    slug: "fg-wilson-caterpillar",
    number: "05",
    name: "FG Wilson DG Sets — Caterpillar Brand",
    eyebrow: "POWER GENERATION",
    summary: "Placeholder page for FG Wilson diesel generator sets represented through Trinity's power portfolio.",
    category: "DG Sets & Power",
    accent: "violet",
    whatItIs: "A dedicated Trinity page for FG Wilson DG set offerings. Final ratings, model ranges, technical documents and approved brand messaging will be added later.",
    whatItDoes: ["Provides standby or prime power solutions", "Supports industrial and project-site power requirements", "Can be selected around load and duty requirements"],
    applications: ["Industrial facilities", "Construction sites", "Commercial buildings", "Infrastructure projects"],
    specs: ["kVA rating — placeholder", "Engine — placeholder", "Alternator — placeholder", "Fuel tank / autonomy — placeholder"],
    note: "Brand and trademark language will be finalized against approved company materials before launch.",
  },
  {
    slug: "berger-paints",
    number: "06",
    name: "Berger Paints",
    eyebrow: "COATINGS + PROTECTIVE SOLUTIONS",
    summary: "Placeholder page for Berger Paints solutions in Trinity's industrial and construction portfolio.",
    category: "Coatings & Paints",
    accent: "coral",
    whatItIs: "A dedicated Trinity page for the relevant Berger Paints portfolio. Final product families, application guidance and imagery will be supplied later.",
    whatItDoes: ["Supports protective and decorative coating requirements", "Can be selected for application-specific environments", "Portfolio can be organized by project requirement"],
    applications: ["Construction", "Industrial facilities", "Infrastructure", "Protective coatings"],
    specs: ["Product family — placeholder", "Coverage — placeholder", "Finish — placeholder", "Application method — placeholder"],
  },
  {
    slug: "basf-master-builders-solutions",
    number: "07",
    name: "BASF | Master Builders Solutions",
    eyebrow: "CONSTRUCTION CHEMICALS + ADMIXTURES",
    summary: "Placeholder page for BASF / Master Builders Solutions construction chemicals and admixtures.",
    category: "Construction Chemicals",
    accent: "amber",
    whatItIs: "A Trinity portfolio page for construction chemicals and admixture solutions, with final approved product names, datasheets and imagery to be added.",
    whatItDoes: ["Supports concrete and construction performance requirements", "Provides product-specific solution pathways", "Can be organized around project and material needs"],
    applications: ["Concrete works", "Infrastructure", "Building projects", "Industrial construction"],
    specs: ["Product — placeholder", "Dosage / mix guidance — placeholder", "Performance class — placeholder", "Packaging — placeholder"],
    note: "Final brand wording and current product information should be verified against the approved supplier catalogue.",
  },
  {
    slug: "ika-chemicals",
    number: "08",
    name: "IKA Chemicals",
    eyebrow: "CHEMICAL SOLUTIONS",
    summary: "Placeholder page for IKA Chemicals offerings represented by Trinity Enterprises.",
    category: "Chemical Solutions",
    accent: "cyan",
    whatItIs: "A dedicated Trinity portfolio page for IKA Chemicals, with final product categories, technical documents and imagery to be added.",
    whatItDoes: ["Supports application-specific chemical requirements", "Can organize products around end-use categories", "Provides a structured path to technical enquiry"],
    applications: ["Construction", "Industrial applications", "Process environments", "Specialized requirements"],
    specs: ["Product grade — placeholder", "Application — placeholder", "Packaging — placeholder", "Technical standard — placeholder"],
  },
  {
    slug: "trinity-imports-exports",
    number: "09",
    name: "Trinity Imports / Exports",
    eyebrow: "INTERNATIONAL TRADE SOLUTIONS",
    summary: "A dedicated Trinity international trade solution for sourcing, importing and exporting relevant industrial products and equipment.",
    category: "Imports & Exports",
    accent: "mint",
    whatItIs: "Trinity's international trade offering, created to help clients explore cross-border sourcing and foreign trade opportunities alongside the domestic equipment portfolio.",
    whatItDoes: ["Supports international sourcing conversations", "Can facilitate import / export requirements", "Connects product enquiries with foreign trade opportunities"],
    applications: ["International sourcing", "Equipment imports", "Exports", "Cross-border industrial opportunities"],
    specs: ["Product / commodity — placeholder", "Origin / destination — placeholder", "Trade terms — placeholder", "Documentation / compliance — placeholder"],
    note: "Trade routes, countries, documentation support and product categories will be finalized with Trinity before launch.",
  },
];

export const productOfferingMap = Object.fromEntries(productOfferings.map((item) => [item.slug, item])) as Record<string, ProductOffering>;
