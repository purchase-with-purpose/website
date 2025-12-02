import * as u from "@/helpers/utilities";

const CATEGORY_ID_ARRAY = [
  "browser",
  "email",
  "search-engine",
  "music-streaming",
  "audio-book",
  "office-suite",
  "file-storage",
  "photo-management",
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
  "audio-book": "Audiobooks",
  "music-streaming": "Music Streaming",
};

const CATEGORY_DESCRIPTIONS: Record<Category["id"], string> = {
  "photo-management":
    "These guides aim to help you move away from the big tech monopolies. This can be due to privacy concerns, environmental reasons, treatment of their customers, or their influence on politics.",

  browser:
    "These guides aim to help you move away from the big tech monopolies. By using these browsers you are giving unparalleled access to your data, control how you browse and push their tooling. One recent example is Google's change to their engine that limits the effectiveness of privacy tools and ad-blockers (https://egitech.io/post/the-transition-from-manifest-v2-to-manifest-v3-whats-happening-27642305).\n\nThis category is easy to switch with many excellent options and built-in ways to migrate your current settings.\n\nAdditional resources: Telemetry Analysis (https://sizeof.cat/post/web-browser-telemetry-2025-edition/)",

  email:
    "These guides aim to help you move away from the big tech monopolies. By using these email services you are giving unfiltered access to your data, purchasing habits and your personal network. This is being used to push ads masked as emails and lock you into their other products.\n\nThis category is easy to switch, but should be done over an extended period. Choose from the many excellent options and forward your emails to your new address while you slowly change over your accounts.\n\nTo note:\nIf you like an email provider, but not their apps, consider using one of the email clients listed.",

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
      label: "Amazon Audible",
      logo: "/images/logos/amazon-audible.png",
      url: "",
    },
    {
      label: "Google Books",
      logo: "/images/logos/google-books.png",
      url: "",
    }
  ],
  "file-storage": [
    {
      label: "Microsoft OneDrive",
      logo: "/images/logos/microsoft-onedrive.png",
      url: "",
    },
    {
      label: "Google Drive",
      logo: "/images/logos/google-drive.png",
      url: "",
    },
    {
      label: "Apple iCloud",
      logo: "/images/logos/apple-icloud.png",
      url: "",
    },
  ],
  "music-streaming": [
    {
      label: "Google Music",
      logo: "/images/logos/google-music.png",
      url: "",
    },
    {
      label: "Apple Music",
      logo: "/images/logos/apple-music.svg",
      url: "",
    },
  ],
  "office-suite": [
    {
      label: "Microsoft Office",
      logo: "/images/logos/microsoft-office.png",
      url: "",
    },
    {
      label: "Google Docs",
      logo: "/images/logos/google-docs.png",
      url: "",
    },
  ],
  "photo-management": [
    {
      label: "iCloud Photos",
      logo: "/images/logos/icloud-photos.png",
      url: "",
    },
    {
      label: "Google Photos",
      logo: "/images/logos/google-photos.png",
      url: "",
    },
    {
      label: "Amazon Photos",
      logo: "/images/logos/amazon-photos.png",
      url: "",
    },
  ],
  "search-engine": [
    {
      label: "Google Search",
      logo: "/images/logos/google-search.png",
      url: "",
    },
    {
      label: "Microsoft Bing",
      logo: "/images/logos/microsoft-bing.png",
      url: "",
    },
  ],
  browser: [
    {
      label: "Google Chrome",
      logo: "/images/logos/chrome.png",
      url: "",
    },
    {
      label: "Apple Safari",
      logo: "/images/logos/safari.png",
      url: "",
    },
    {
      label: "Microsoft Edge",
      logo: "/images/logos/edge.png",
      url: "",
    },
  ],
  email: [
    {
      label: "Google Gmail",
      logo: "/images/logos/google-gmail.png",
      url: "",
    },
    {
      label: "iCloud Mail",
      logo: "/images/logos/apple-email.png",
      url: "",
    },
    {
      label: "Microsoft Outlook",
      logo: "/images/logos/microsoft-outlook.svg",
      url: "",
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
