export const SITE_URL = 'https://theexiledentrepreneur.com';
export const SITE_NAME = 'The Exiled Entrepreneur';
export const SITE_TAGLINE = 'Technical income from a dead zone';
export const SITE_DESCRIPTION =
  'A laid-off support engineer building an off-grid container home in Cochise County, Arizona, and documenting how to earn a technical living from rural land: power, connectivity, digital products, drone work, land data.';
export const CONTACT_EMAIL = 'contact@theexiledentrepreneur.com';
export const LEGAL_ENTITY = 'Stormhaven Enterprises LLC';
export const GITHUB_URL = 'https://github.com/rafe-walker';
export const AUTHOR_NAME = 'Joshua Bryan';

export const CATEGORIES = [
  'off-grid-power',
  'connectivity',
  'building',
  'land',
  'income',
  'drones',
  'layoff',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  'off-grid-power': 'Off-grid power',
  connectivity: 'Connectivity',
  building: 'Building',
  land: 'Land',
  income: 'Income',
  drones: 'Drones',
  layoff: 'Layoff',
};

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

export interface Venture {
  name: string;
  url: string;
  summary: string;
  detail: string;
  status?: string;
}

/**
 * Every entry here is a real, live site. Descriptions are limited to what has
 * been verified; do not add revenue, user counts or milestones here.
 */
export const VENTURES: Venture[] = [
  {
    name: 'RotorCards',
    url: 'https://www.rotorcards.com',
    summary: 'PDF quick-reference guides for DJI drone pilots.',
    detail:
      'A one-product digital store: PDF quick-reference guides for specific DJI drones. Vercel for hosting, Stripe for checkout, GitHub for source. Blog topics come from Google Search Console queries, so each post answers something people already type into Google.',
  },
  {
    name: 'Stronghold Precision Aerials',
    url: 'https://strongholdprecisionaerials.com',
    summary: 'Drone services company I run with my wife.',
    detail:
      'The drone services company my wife and I run together. This is the field-work side of the drone business: the flying, the clients, the deliverables.',
  },
  {
    name: 'Flycensed',
    url: 'https://flycensed.com',
    summary: 'FAA Part 107 drone pilot exam prep.',
    detail:
      'A study app for the FAA Part 107 remote pilot exam, the certificate required for commercial drone operations in the US. It sits upstream of the drone services business.',
  },
  {
    name: 'AZ Land List',
    url: 'https://azlandlist.com',
    summary: 'Vacant-parcel data for Arizona land investors.',
    detail:
      'Vacant-parcel data for land investors, starting with the Cochise Land Owner Pack. Rural county records are public but awkward to work with; this packages them into something an investor can actually use.',
  },
  {
    name: 'PlotNode',
    url: 'https://plotnode.io',
    summary: 'Digital twin for rural land.',
    detail:
      'Upload drone orthomosaics and meshes of a parcel and place structures on the real 3D terrain. Built for the question every rural owner-builder faces: where on this land does the house, the shed and the solar array go.',
  },
  {
    name: 'IsoKron',
    url: 'https://isokron.ai',
    summary: 'AI agent substrate. Closed alpha.',
    detail:
      'A typed-graph substrate for running AI agents. It is in closed alpha and is the most speculative thing on this list.',
    status: 'Closed alpha',
  },
];
