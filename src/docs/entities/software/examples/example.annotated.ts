import { type Software } from "@/entities/software";
import * as u from "@/helpers/utilities";

/**
 * Represents a specific software tool that is presented to a user via Purchase
 * with Purpose.
 */
const example: Software = {
  /**
   * Matches the slug in `/software/:id` URL path.
   */
  id: u.createBrand("SOFTWARE_ID", "ce61b7c0-b7ba-40bd-adc9-7f99cd7ce6c7")!,

  /**
   * Human-friendly name of the software tool.
   */
  label: "Chrome",

  /**
   * The official URL of the software tool's website.
   */
  url: "https://jubilant-place.com",

  /**
   * Features supported by software that user might be interested in.
   *
   * The presence of a feature ID here indicates that it is supported.
   * Non-support is not shown, so if nothing is supported then this will simply
   * be an empty array.
   */
  features: ["search-no-personal-identifiers", "audiobooks-subscription"],

  /**
   * Whether the current tool is considered as one of the leading, commercial
   * "big-tech" software tools within its category.
   */
  incumbent: false,

  /**
   * Information related to the person, group or organization that
   * owns/maintains the tool.
   */
  company: {
    /**
     * The human-readable name of the owner/maintainer. If a company, then the
     * trading name should be used here. If an individual, then their full name
     * should be used.
     */
    name: "Schumm LLC",

    /** Where the company headquarters are located. If the company does not have
     * a traditional headquarters, then this should be `null`.
     */
    headquarters: "BV",

    /**
     * A link to the the official website where users can learn more about the
     * owner/company.
     */
    url: "https://proper-nephew.com/",

    /**
     * Where the primary owner or stakeholder/s are located.
     */
    ownership: "BS",
  },

  /**
   * The specific tiers of usage available for the software tool. In most cases
   * this will coincide with pricing plans, but will not always be the case.
   */
  tiers: {
    free: "Non-commercial Usage",
    basic: "$ 15 / mo",
    premium: "$ 35 / mo",
  },

  /**
   * This is used primarily used* to indicate whether a software tool adheres to
   * one of the core areas of concerns highlighted within Purchase with Purpose.
   */
  indicators: ["environmental", "open-source"],

  /**
   * Additional notes about the software tool. This will be highlighted in
   * different colours depending on the `variant` value.
   */
  notes: [
    {
      variant: "disclaimer",
      value:
        "Ultio cultellus defluo ducimus trepide angelus stultus sunt aegre. Delego arguo cogo ascisco crapula ducimus. Bestia conor deserunt attollo.",
    },
  ],

  logo: "/images/logos/chrome.png",
  category: "email",
  swatch: "#e13927",
  platforms: ["android", "windows"],

  description:
    "Eveniet coepi conspergo valeo una torqueo creator vulnero talis. Comburo cernuus curto pecco aufero vomer argumentum. Censura tandem quibusdam victoria viriliter.\nIpsum contego termes nihil laboriosam umquam torqueo nihil. Quo agnosco substantia aranea socius ad vociferor benigne. Amitto decumbo curis quisquam barba comprehendo thalassinus.\nVeritas tergeo sponte tego torqueo caries bardus arcus. Alius auxilium coniecto valetudo vinculum officia. Concedo strues condico celebrer quisquam fuga suffragium tersus facere accusantium.",

  evaluations: {
    trustpilot: 2.5,
    ios: 2,
    android: 3.3,
    "privacy-guide": 0,
    "privacy-tools": 0,
  },
};
