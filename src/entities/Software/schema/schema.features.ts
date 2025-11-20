import * as u from "@/helpers/utilities";
import { type GeneralIconVariant, type IconVariant } from "@/entities/icons";

export type Feature = {
  id: (typeof ARRAY)[number];
  label: string;
  description: string;
  icon: IconVariant;
};

const ARRAY = [
  "browser-non-google-engine",
  "browser-native-add-blocking",
  "browser-built-in-vpn",
  "browser-ai-helper",
  "browser-ecosystem-support",
  "browser-good-user-support",
  "email-alias-creation",
  "email-easy-unsubscribe",
  "email-schedule-send",
  "email-automatic-categorization",
  "email-ecosystem-support",
  "email-good-user-support",
  "search-independent-index",
  "search-no-personal-identifiers",
  "search-ad-free-tier",
  "search-ai-summaries",
  "search-ecosystem-support",
  "search-good-user-support",
  "music-generous-artist-royalties",
  "music-purchaseable-content",
  "music-high-res-streaming",
  "music-ai-content-flagged",
  "music-ecosystem-support",
  "music-good-user-support",
  "audiobooks-drm-free",
  "audiobooks-subscription",
  "audiobooks-rentals",
  "audiobooks-ecosystem-support",
  "audiobooks-good-support",
  "office-online-service",
  "office-mobile-app",
  "office-own-software",
  "office-ai-assistance",
  "office-good-support",
  "photos-live-images",
  "photos-facial-recognition",
  "photos-file-storage-support",
  "photos-good-support",
] as const;

const LABELS: Record<Feature["id"], string> = {
  "browser-non-google-engine": "Non-Google Engine",
  "browser-native-add-blocking": "Native Ad Blocking",
  "browser-built-in-vpn": "Built-in VPN",
  "browser-ai-helper": "AI Assistant",
  "browser-ecosystem-support": "Ecosystem Support",
  "browser-good-user-support": "Good User Support",
  "email-alias-creation": "Alias Creation",
  "email-easy-unsubscribe": "Easy Unsubscribe",
  "email-schedule-send": "Schedule Send",
  "email-automatic-categorization": "Auto Categorization",
  "email-ecosystem-support": "Ecosystem Support",
  "email-good-user-support": "Good User Support",
  "search-independent-index": "Independent Index",
  "search-no-personal-identifiers": "No Personal Tracking",
  "search-ad-free-tier": "Ad-Free Tier",
  "search-ai-summaries": "AI Summaries",
  "search-ecosystem-support": "Ecosystem Support",
  "search-good-user-support": "Good User Support",
  "music-generous-artist-royalties": "Generous Artist Royalties",
  "music-purchaseable-content": "Purchaseable Content",
  "music-high-res-streaming": "High-Res Streaming",
  "music-ai-content-flagged": "AI Content Flagged",
  "music-ecosystem-support": "Ecosystem Support",
  "music-good-user-support": "Good User Support",
  "audiobooks-drm-free": "DRM-Free",
  "audiobooks-subscription": "Subscription Model",
  "audiobooks-rentals": "Rental Options",
  "audiobooks-ecosystem-support": "Ecosystem Support",
  "audiobooks-good-support": "Good User Support",
  "office-online-service": "Online Service",
  "office-mobile-app": "Mobile App",
  "office-own-software": "Own Your Software",
  "office-ai-assistance": "AI Assistance",
  "office-good-support": "Good User Support",
  "photos-live-images": "Live Images",
  "photos-facial-recognition": "Facial Recognition",
  "photos-file-storage-support": "File Storage Support",
  "photos-good-support": "Good User Support",
} as const;

const DESCRIPTIONS: Record<Feature["id"], string> = {
  "browser-non-google-engine":
    "Uses an independent rendering engine, not based on Chromium/Blink",
  "browser-native-add-blocking":
    "Built-in ad blocking without requiring extensions",
  "browser-built-in-vpn": "Integrated VPN service for enhanced privacy",
  "browser-ai-helper":
    "AI-powered features to assist with browsing and productivity",
  "browser-ecosystem-support":
    "Compatible with popular extensions and web standards",
  "browser-good-user-support":
    "Responsive customer support and active community",
  "email-alias-creation": "Create email aliases to protect your main address",
  "email-easy-unsubscribe": "Simple one-click unsubscribe from mailing lists",
  "email-schedule-send": "Schedule emails to be sent at specific times",
  "email-automatic-categorization": "AI-powered email sorting and organization",
  "email-ecosystem-support":
    "Compatible with popular email clients and standards",
  "email-good-user-support": "Responsive customer support and help resources",
  "search-independent-index":
    "Maintains its own search index, not relying on third parties",
  "search-no-personal-identifiers":
    "Does not track or store personal identifiers",
  "search-ad-free-tier": "Offers ad-free search experience in paid tier",
  "search-ai-summaries": "AI-generated summaries of search results",
  "search-ecosystem-support": "Integrates well with other tools and browsers",
  "search-good-user-support": "Quality customer support and documentation",
  "music-generous-artist-royalties": "Pays above-average royalties to artists",
  "music-purchaseable-content":
    "Allows purchasing music for permanent ownership",
  "music-high-res-streaming": "Offers high-resolution audio streaming options",
  "music-ai-content-flagged": "Clearly identifies AI-generated content",
  "music-ecosystem-support": "Works with various devices and platforms",
  "music-good-user-support": "Responsive customer service and help resources",
  "audiobooks-drm-free":
    "Audiobooks without digital rights management restrictions",
  "audiobooks-subscription": "Unlimited access through monthly subscription",
  "audiobooks-rentals": "Rent audiobooks for a limited time at lower cost",
  "audiobooks-ecosystem-support": "Compatible with various devices and apps",
  "audiobooks-good-support": "Quality customer support and user resources",
  "office-online-service": "Web-based access without software installation",
  "office-mobile-app": "Full-featured mobile applications available",
  "office-own-software": "Purchase and own the software permanently",
  "office-ai-assistance": "AI-powered features for productivity and automation",
  "office-good-support": "Comprehensive support and documentation",
  "photos-live-images": "Support for animated photos and live image formats",
  "photos-facial-recognition": "Automatic face detection and tagging features",
  "photos-file-storage-support": "Integration with cloud storage services",
  "photos-good-support": "Reliable customer support and help resources",
};

const ICONS: Record<Feature["id"], IconVariant> = {
  "browser-non-google-engine": "cpu",
  "browser-native-add-blocking": "shield-check",
  "browser-built-in-vpn": "shield",
  "browser-ai-helper": "brain",
  "browser-ecosystem-support": "link",
  "browser-good-user-support": "user-check",
  "email-alias-creation": "tag",
  "email-easy-unsubscribe": "check-circle",
  "email-schedule-send": "calendar",
  "email-automatic-categorization": "filter",
  "email-ecosystem-support": "link",
  "email-good-user-support": "user-check",
  "search-independent-index": "database",
  "search-no-personal-identifiers": "eye-off",
  "search-ad-free-tier": "award",
  "search-ai-summaries": "brain",
  "search-ecosystem-support": "link",
  "search-good-user-support": "user-check",
  "music-generous-artist-royalties": "trending-up",
  "music-purchaseable-content": "shopping-cart",
  "music-high-res-streaming": "headphones",
  "music-ai-content-flagged": "info",
  "music-ecosystem-support": "link",
  "music-good-user-support": "user-check",
  "audiobooks-drm-free": "unlock",
  "audiobooks-subscription": "play-circle",
  "audiobooks-rentals": "clock",
  "audiobooks-ecosystem-support": "link",
  "audiobooks-good-support": "user-check",
  "office-online-service": "globe",
  "office-mobile-app": "smartphone",
  "office-own-software": "package",
  "office-ai-assistance": "brain",
  "office-good-support": "user-check",
  "photos-live-images": "camera",
  "photos-facial-recognition": "scan-face",
  "photos-file-storage-support": "cloud-upload",
  "photos-good-support": "user-check",
};

export const FEATURE_VARIANTS = u.fromArray(
  ARRAY.map(
    (id): Feature => ({
      id,
      label: LABELS[id],
      description: DESCRIPTIONS[id],
      icon: ICONS[id],
    })
  )
);
