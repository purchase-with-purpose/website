import * as Software from "@/entities/Software";

export const calcHeight = (props: { item: Software.Item }) => {
  const { item } = props;

  // const platformGaps =
  //   item.platforms.length === 0 ? 0 : (item.platforms.length - 1) * 0.25;

  // const platformPadding = item.platforms.length > 0 ? 1 : 0;
  // const platformItems = item.platforms.length * 1.75;

  // const platforms = platformGaps + platformItems + platformPadding;

  // const companyItems =
  //   2 + (item.company.ownership ? 2 : 0) + item.indicators.length * 1.75;

  // const companyPadding = item.indicators.length > 0 ? 1 : 0;

  // const companyGaps =
  //   item.platforms.length === 0 ? 0 : (item.indicators.length - 1) * 0.25;

  // const company = companyItems + companyPadding + companyGaps;

  const platforms = 3;
  const company = 3;

  const features =
    item.features.length * 2 + (item.features.length > 0 ? 1 : 0);

  return Math.max(platforms, company, features) + 4 + 2;
};

export const calcSplit = () => window.innerWidth / 2;

export const calcOffset = (props: {
  active: number;
  split: number;
  total: number;
}) => {
  const { active, split, total } = props;
  return split;

  // const offset = 16 * active;

  // return offset + split;

  // return 16 * (active - split) + 8;

  // if (active < split) {
  //   return 0;
  // }

  // if (split < 16) {
  //   return 16 * active;
  // }

  // const startClamp = total - split;

  // if (active >= startClamp) {
  //   const all = total * 16;
  //   const mitage = window.innerWidth / 16 - 5;
  //   return all - mitage;
  // }

  // return 16 * (active - split) + 8;
};
