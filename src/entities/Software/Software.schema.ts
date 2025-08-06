import { z } from "zod";
import * as Category from "../Category";
import * as CauseFlags from "../CauseFlags";
import * as Company from "../Company";
import * as Features from "../Features";
import * as FormsAndCommunities from "../ForumsAndCommunities";
import * as MigrationResources from "../MigrationResources";
import * as Origin from "../Origin";
import * as PlatformAvailability from "../PlatformAvailability";
import * as Price from "../Price";
import * as Privacy from "../Privacy";
import * as Reviews from "../Reviews";
import * as Notes from "../Notes";
import * as UserFriendlyRating from "../UserFriendlyRating";

const initial = {
  additional: z.object({
    label: z.string(),
    variant: z.enum(["info", "disclaimer", "resource"]),
    description: z.string(),
    url: z.string().nullish(),
  }),
};

export const validation = {
  ...initial,
  item: z.object({
    id: z.string(),
    label: z.string(),
    logo: z.string(),
    description: z.string(),
    company: Company.validation.item.shape.id,
    category: Category.validation.item.shape.id,
    userFriendlyRating: UserFriendlyRating.validation.item.shape.id,
    causeFlags: z.array(CauseFlags.validation.item.shape.id),
    privacy: Privacy.validation.item.shape.id,
    price: Price.validation.item.shape.id,
    features: Features.validation.item.shape.id,
    platformAvailability: PlatformAvailability.validation.item.shape.id,
    reviews: Reviews.validation.item.shape.id,
    incumbent: z.boolean(),
    additional: z.array(initial.additional),
    origin: Origin.validation.item.shape.id,
    migrationResources: MigrationResources.validation.item.shape.id,
    formsAndCommunities: FormsAndCommunities.validation.item.shape.id,
  }),
};

export type Item = z.infer<typeof validation.item>;
export type Additional = z.infer<typeof initial.additional>;
