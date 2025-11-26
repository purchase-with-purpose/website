import { type Props, type Item, calcItems } from "@/templates/List";
import { createItem as mockSoftware } from "@/entities/software/__mocking__";

const single: Item = {
  id: "865ea676-74fb-4b1c-a0fb-70998f2dfe0a",
  label: "Brave",
  logo: "/images/logos/brave.png",
  height: 300,
  swatch: "#e13927",
  cells: [
    [
      {
        // If label and value is exact same only value will be shown.
        label: "Environmental",
        value: "Environmental",
        color: "#4CAF50",
        url: null,
        icon: "leaf",
        fill: true,
      },
      {
        label: "Trustpilot Rating",
        value: "14 %",
        color: "red",
        url: "https://www.trustpilot.com/review/www.google.com/chrome",
        icon: "cross",
        fill: false,
      },
    ],
  ],
};

const props: Props = {
  title: "Browsers",
  description: "A list of popular web browsers and their attributes.",
  dispatch: console.log,
  items: [single], // Will usually contain several items

  resources: [
    {
      label: "How Browser Work",
      url: "https://www.howstuffworks.com/internet/browsers.htm",
    },
  ],

  /**
   * The index of the active column to highlight in all rows. If the screen size
   * is smaller than all available columns the entire card will be offset to
   * ensure the column is in view.
   *
   * The index will be applied to the `GROUPED_VARIANTS` collection to determine
   * which specific column is selected.
   */
  column: 1,

  /**
   * The index will be applied to the `CATEGORY_VARIANTS` collection to
   * determine which specific category to show on the page.
   */
  page: 2,

  incumbents: [
    {
      label: "Chrome",
      logo: "/images/logos/chrome.png",
      url: "https://www.google.com/chrome",
    },
    // Will usually have two more incumbents
  ],
};

/**
 * This function should be used to convert `Software` data into an `Item` array
 * (for use in `Props`).
 */
const items = calcItems([mockSoftware(), mockSoftware(), mockSoftware()]);
