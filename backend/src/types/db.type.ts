import { gigType } from "./gig.type";

export type DBType = { gigs: gigType[]; favorites: { id: string }[] };
