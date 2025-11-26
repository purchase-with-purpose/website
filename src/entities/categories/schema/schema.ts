import * as u from "@/helpers/utilities";

const CATEGORY_ID_ARRAY = [
  "browser",
  "search-engine",
  "office-suite",
  "music-streaming",
  "file-storage",
  "photo-management",
  "audio-book",
  "email",
] as const;

export type Category = {
  id: (typeof CATEGORY_ID_ARRAY)[number];
  label: string;
  description: string;
  incumbers: { label: string; logo: string; url: string }[];
  resources: { label: string; url: string }[];
};

const CATEGORY_LABELS: Record<Category["id"], string> = {
  "photo-management": "Photo Management",
  browser: "Browsers",
  email: "Email",
  "file-storage": "File Storage",
  "office-suite": "Office Suite",
  "search-engine": "Search Engines",
  "audio-book": "Audio Books",
  "music-streaming": "Music Streaming",
};

const CATEGORY_DESCRIPTIONS: Record<Category["id"], string> = {
  "photo-management":
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  browser:
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  email:
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  "file-storage":
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  "office-suite":
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  "search-engine":
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  "audio-book":
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  "music-streaming":
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",
};

const INCUMBENTS: Record<
  Category["id"],
  { label: string; logo: string; url: string }[]
> = {
  "audio-book": [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
  "file-storage": [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
  "music-streaming": [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
  "office-suite": [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
  "photo-management": [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
  "search-engine": [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
  browser: [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
  email: [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome/",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "https://www.apple.com/safari/",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "https://www.microsoft.com/edge/",
    },
  ],
};

const RESOURCES: Record<Category["id"], { label: string; url: string }[]> = {
  "audio-book": [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
  "file-storage": [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
  "music-streaming": [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
  "office-suite": [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
  "photo-management": [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
  "search-engine": [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
  browser: [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
  email: [
    {
      label: "Alternative Browsers",
      url: "https://github.com/sindresorhus/awesome-alternative-browsers",
    },
    {
      label: "Privacy Comparison",
      url: "https://browsers.eff.org/",
    },
  ],
};

export const CATEGORY_VARIANTS = u.fromArray(
  CATEGORY_ID_ARRAY.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    description: CATEGORY_DESCRIPTIONS[id],
    incumbents: INCUMBENTS[id],
    resources: RESOURCES[id],
  }))
);
