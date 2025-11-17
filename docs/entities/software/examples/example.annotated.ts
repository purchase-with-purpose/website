import { type Software } from "@/entities/software";
import * as u from "@/helpers/utilities";

/**
 * Represents a specific software tool that is presented to a user either via a
 * details page or as one of several in a list page.
 */
const example: Software = {
  /**
   * Matches the slug in `/software/:id` URL path.
   */
  id: u.createBrand("SOFTWARE_ID", "ce61b7c0-b7ba-40bd-adc9-7f99cd7ce6c7")!,

  /**
   * Human-friendly name of the software tool.
   */
  label: "Brave",

  /**
   * The official URL of the software tool's website.
   */
  url: "https://brave.com/",

  /**
   * Features supported by software that user might be interested in.
   *
   * The presence of a feature ID here indicates that it is supported.
   * Non-support is not shown, so if nothing is supported then this will simply
   * be an empty array.
   */
  features: ["search-no-personal-identifiers", "search-ad-free-tier"],

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
    name: "Brave Software, Inc.",

    /**
     * The country where most of the ownership/control of the company resides.
     */
    ownership: "US",

    /**
     * Where the company headquarters are located. If the company does not have
     * a traditional headquarters or if the headquarters is different from
     * ownership location, then this should be `null`.
     */
    headquarters: null,

    /**
     * A link to the the official website where users can learn more about the
     * owner/company.
     */
    url: "https://www.crunchbase.com/organization/brave-software",
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
  indicators: ["privacy", "open-source"],

  /**
   * Additional notes about the software tool. This will be highlighted in
   * different colours depending on the `variant` value.
   */
  notes: [
    {
      variant: "warning",
      value:
        "Reception of the Brave browser has been mixed. The browser has received coverage for its privacy-focused features, including its built-in ad blocker and protections against tracking techniques such as browser fingerprinting, local port enumeration, cross-site leaks, and bounce tracking.",
    },
    {
      variant: "disclaimer",
      value: `In 2020, The New York Times reported that CEO, Brandon Eich's comments about "the policy and science related to the coronavirus" on Twitter caused a backlash within the browser's user base, commenting that this echoed the criticism that led to his resignation from Mozilla.`,
    },
  ],

  logo: "/images/logos/brave.png",
  category: "browser",
  swatch: "#e13927",
  platforms: ["android", "windows"],

  description:
    "Brave is a free and open-source web browser which was first released in 2016. It is developed by US-based Brave Software, Inc. and based on the Chromium web browser. The browser is marketed as a privacy-focused web browser and includes features such as built-in advertisement blocking, protections against browser fingerprinting and a private browsing mode that integrates the Tor anonymity network.",

  evaluations: {
    trustpilot: 2.5,
    ios: 2,
    android: 3.3,
    "privacy-guide": 1,
    "privacy-tools": 1,
  },
};
