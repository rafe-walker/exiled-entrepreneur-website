/**
 * Starlink dish power figures used by /tools/starlink-battery-calculator.
 *
 * Every number here is copied from a Starlink specification sheet published
 * at starlink.com/public-files, retrieved on the date below. Starlink
 * publishes a single "Average" range per kit (antenna + router + power
 * supply) and no separate figure for the snow-melt heater. Do not add a
 * number to this file without a URL that states it.
 */

export const STARLINK_SPECS_RETRIEVED = '2026-10-31';

export interface DishModel {
  id: string;
  label: string;
  /** Low end of Starlink's published "Average" range, watts. */
  avgLowW: number;
  /** High end of Starlink's published "Average" range, watts. */
  avgHighW: number;
  /** Starlink's published snow-melt rate, as printed. */
  snowMelt: string;
  /** Spec sheet the range was read from. */
  sourceUrl: string;
  sourceLabel: string;
  note?: string;
}

export const DISH_MODELS: readonly DishModel[] = [
  {
    id: 'standard',
    label: 'Standard (Gen 3)',
    avgLowW: 75,
    avgHighW: 100,
    snowMelt: 'Up to 40 mm / hour (1.5 in / hour)',
    sourceUrl: 'https://www.starlink.com/public-files/specification_sheet_standard.pdf',
    sourceLabel: 'Starlink Standard specification sheet',
    note: 'Sheet is titled "Standard 4 X"; the figure includes the Gen 3 router and power supply.',
  },
  {
    id: 'mini',
    label: 'Mini',
    avgLowW: 25,
    avgHighW: 40,
    snowMelt: 'Up to 25 mm / hour (1 in / hour)',
    sourceUrl: 'https://www.starlink.com/public-files/specification_sheet_mini.pdf',
    sourceLabel: 'Starlink Mini specification sheet',
    note: 'Input rating 12–48 V DC, 60 W. Running it straight from a 12 V bank skips the inverter; set inverter efficiency to 100 % in that case.',
  },
  {
    id: 'performance',
    label: 'Performance (Gen 3)',
    avgLowW: 75,
    avgHighW: 100,
    snowMelt: 'Up to 85 mm / hour (3.5 in / hour)',
    sourceUrl: 'https://www.starlink.com/public-files/specification_sheet_performance.pdf',
    sourceLabel: 'Starlink Performance specification sheet',
    note: 'Ships with the rack-mountable Advanced Power Supply (AC or DC input).',
  },
  {
    id: 'flat-high-performance',
    label: 'Flat High Performance',
    avgLowW: 110,
    avgHighW: 150,
    snowMelt: 'Up to 75 mm / hour (3 in / hour)',
    sourceUrl: 'https://www.starlink.com/public-files/specification_sheet_flat_high_performance.pdf',
    sourceLabel: 'Starlink Flat High Performance specification sheet',
  },
] as const;

export const DEFAULT_DISH_ID = 'standard';

export function getDishModel(id: string): DishModel {
  return DISH_MODELS.find((m) => m.id === id) ?? DISH_MODELS[0];
}

/**
 * Dish draw assumption. Heater off: midpoint of Starlink's published average
 * range. Heater on: top of the range. Starlink does not publish a heater
 * figure, so "on" is the most pessimistic number the manufacturer stands
 * behind; owners with a meter should override it.
 */
export function assumedDishWatts(model: DishModel, heaterOn: boolean): number {
  return heaterOn ? model.avgHighW : (model.avgLowW + model.avgHighW) / 2;
}

export const NOMINAL_VOLTAGES = [12, 24, 48] as const;
export type NominalVoltage = (typeof NOMINAL_VOLTAGES)[number];

export interface CalculatorInput {
  dishWatts: number;
  extraWatts: number;
  /** 0–100. */
  inverterEfficiencyPct: number;
  batteryWh: number;
  /** 0–100, the share of the bank you refuse to use. */
  reservePct: number;
}

export interface CalculatorResult {
  /** DC watts pulled from the battery, after inverter losses. */
  batteryWatts: number;
  usableWh: number;
  runtimeHours: number;
  whPerDay: number;
  /** Bank size needed for 24 h with the reserve untouched. */
  kwhFor24h: number;
}

export function calculate(input: CalculatorInput): CalculatorResult | null {
  const eff = input.inverterEfficiencyPct / 100;
  const reserve = input.reservePct / 100;
  const loadWatts = input.dishWatts + input.extraWatts;
  if (!(eff > 0) || !(eff <= 1) || !(loadWatts > 0) || reserve < 0 || reserve >= 1) return null;
  if (!(input.batteryWh >= 0)) return null;

  const batteryWatts = loadWatts / eff;
  const usableWh = input.batteryWh * (1 - reserve);
  const whPerDay = batteryWatts * 24;
  return {
    batteryWatts,
    usableWh,
    runtimeHours: usableWh / batteryWatts,
    whPerDay,
    kwhFor24h: whPerDay / (1 - reserve) / 1000,
  };
}
