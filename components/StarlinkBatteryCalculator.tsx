'use client';

import { useId, useMemo, useState } from 'react';
import {
  DEFAULT_DISH_ID,
  DISH_MODELS,
  NOMINAL_VOLTAGES,
  type NominalVoltage,
  assumedDishWatts,
  calculate,
  getDishModel,
} from '@/lib/starlink';

type CapacityMode = 'ah' | 'kwh';

const num = (v: string): number => {
  const n = Number.parseFloat(v);
  return Number.isFinite(n) ? n : Number.NaN;
};

const fmt = (n: number, digits = 0): string =>
  n.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: 0 });

function fmtHours(h: number): string {
  if (!Number.isFinite(h)) return '—';
  if (h >= 240) return `${fmt(h / 24, 1)} days`;
  const whole = Math.floor(h);
  const mins = Math.round((h - whole) * 60);
  if (whole === 0) return `${mins} min`;
  if (mins === 0) return `${whole} h`;
  return `${whole} h ${mins} min`;
}

const inputClass =
  'w-full rounded-lg border border-brand-border bg-brand-dark px-3 py-2.5 text-base text-brand-cream focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20';
const labelClass = 'mb-1.5 block text-sm font-semibold text-brand-cream';
const hintClass = 'mt-1.5 text-xs leading-relaxed text-brand-muted';

export default function StarlinkBatteryCalculator() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const [dishId, setDishId] = useState<string>(DEFAULT_DISH_ID);
  const [heater, setHeater] = useState(false);
  const [dishWattsOverride, setDishWattsOverride] = useState<string | null>(null);
  const [extraWatts, setExtraWatts] = useState('0');
  const [capacityMode, setCapacityMode] = useState<CapacityMode>('ah');
  const [ah, setAh] = useState('100');
  const [volts, setVolts] = useState<NominalVoltage>(12);
  const [kwh, setKwh] = useState('1.28');
  const [efficiency, setEfficiency] = useState('90');
  const [reserve, setReserve] = useState('20');

  const model = getDishModel(dishId);
  const publishedWatts = assumedDishWatts(model, heater);
  const dishWattsText = dishWattsOverride ?? String(publishedWatts);
  const dishWatts = num(dishWattsText);

  const batteryWh = capacityMode === 'ah' ? num(ah) * volts : num(kwh) * 1000;

  const result = useMemo(
    () =>
      calculate({
        dishWatts,
        extraWatts: num(extraWatts) || 0,
        inverterEfficiencyPct: num(efficiency),
        batteryWh,
        reservePct: num(reserve),
      }),
    [dishWatts, extraWatts, efficiency, batteryWh, reserve],
  );

  const ahFor24h = result ? (result.kwhFor24h * 1000) / volts : Number.NaN;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form
        className="card-dark space-y-6 hover:border-brand-border hover:shadow-none"
        onSubmit={(e) => e.preventDefault()}
        aria-labelledby={id('inputs-heading')}
      >
        <h2 id={id('inputs-heading')} className="mb-0 text-xl font-bold text-brand-cream">
          Inputs
        </h2>

        <fieldset className="space-y-4">
          <legend className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Dish
          </legend>

          <div>
            <label htmlFor={id('model')} className={labelClass}>
              Dish model
            </label>
            <select
              id={id('model')}
              className={inputClass}
              value={dishId}
              onChange={(e) => {
                setDishId(e.target.value);
                setDishWattsOverride(null);
              }}
            >
              {DISH_MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label} — {m.avgLowW}–{m.avgHighW} W published
                </option>
              ))}
            </select>
            {model.note && <p className={hintClass}>{model.note}</p>}
          </div>

          <div className="flex items-start gap-3">
            <input
              id={id('heater')}
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 accent-brand-gold"
              checked={heater}
              onChange={(e) => {
                setHeater(e.target.checked);
                setDishWattsOverride(null);
              }}
            />
            <div>
              <label htmlFor={id('heater')} className="mb-0 text-sm font-semibold text-brand-cream">
                Heating / snow melt active
              </label>
              <p className={hintClass}>
                Starlink publishes no heater figure. On uses the top of the published range (
                {model.avgHighW} W); off uses the midpoint ({(model.avgLowW + model.avgHighW) / 2} W).
                Override below if you have a meter reading.
              </p>
            </div>
          </div>

          <div>
            <label htmlFor={id('dish-watts')} className={labelClass}>
              Dish draw (W)
            </label>
            <div className="flex gap-2">
              <input
                id={id('dish-watts')}
                type="number"
                inputMode="decimal"
                min={1}
                step={1}
                className={inputClass}
                value={dishWattsText}
                onChange={(e) => setDishWattsOverride(e.target.value)}
                aria-describedby={id('dish-watts-hint')}
              />
              {dishWattsOverride !== null && (
                <button
                  type="button"
                  onClick={() => setDishWattsOverride(null)}
                  className="shrink-0 rounded-lg border border-brand-border px-3 text-xs font-semibold text-brand-muted hover:border-brand-gold hover:text-brand-gold"
                >
                  Reset
                </button>
              )}
            </div>
            <p id={id('dish-watts-hint')} className={hintClass}>
              Starlink&apos;s figure covers the antenna, its router and the power supply.
            </p>
          </div>

          <div>
            <label htmlFor={id('extra')} className={labelClass}>
              Other loads on the same battery (W)
            </label>
            <input
              id={id('extra')}
              type="number"
              inputMode="decimal"
              min={0}
              step={1}
              className={inputClass}
              value={extraWatts}
              onChange={(e) => setExtraWatts(e.target.value)}
              aria-describedby={id('extra-hint')}
            />
            <p id={id('extra-hint')} className={hintClass}>
              Laptop, monitor, a second router, lights. Leave at 0 to size for the dish alone.
            </p>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Battery and inverter
          </legend>

          <div>
            <span className={labelClass} id={id('cap-mode-label')}>
              Battery capacity
            </span>
            <div
              role="radiogroup"
              aria-labelledby={id('cap-mode-label')}
              className="mb-3 inline-flex rounded-lg border border-brand-border p-0.5 text-sm"
            >
              {(
                [
                  ['ah', 'Ah at nominal volts'],
                  ['kwh', 'kWh'],
                ] as const
              ).map(([mode, label]) => (
                <button
                  key={mode}
                  type="button"
                  role="radio"
                  aria-checked={capacityMode === mode}
                  onClick={() => setCapacityMode(mode)}
                  className={`rounded-md px-3 py-1.5 font-semibold transition-colors ${
                    capacityMode === mode
                      ? 'bg-brand-gold text-brand-dark'
                      : 'text-brand-muted hover:text-brand-gold'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {capacityMode === 'ah' ? (
              <div className="grid grid-cols-[minmax(0,1fr)_7rem] gap-2">
                <div>
                  <label htmlFor={id('ah')} className="sr-only">
                    Amp-hours
                  </label>
                  <input
                    id={id('ah')}
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={1}
                    className={inputClass}
                    value={ah}
                    onChange={(e) => setAh(e.target.value)}
                    placeholder="Ah"
                  />
                </div>
                <div>
                  <label htmlFor={id('volts')} className="sr-only">
                    Nominal battery voltage
                  </label>
                  <select
                    id={id('volts')}
                    className={inputClass}
                    value={volts}
                    onChange={(e) => setVolts(Number(e.target.value) as NominalVoltage)}
                  >
                    {NOMINAL_VOLTAGES.map((v) => (
                      <option key={v} value={v}>
                        {v} V
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor={id('kwh')} className="sr-only">
                  Kilowatt-hours
                </label>
                <input
                  id={id('kwh')}
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step={0.1}
                  className={inputClass}
                  value={kwh}
                  onChange={(e) => setKwh(e.target.value)}
                  placeholder="kWh"
                />
              </div>
            )}
            <p className={hintClass}>
              {Number.isFinite(batteryWh) ? `${fmt(batteryWh)} Wh nominal. ` : ''}
              Use the nameplate number; the reserve below is where you account for what you will
              not drain.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={id('eff')} className={labelClass}>
                Inverter efficiency (%)
              </label>
              <input
                id={id('eff')}
                type="number"
                inputMode="decimal"
                min={1}
                max={100}
                step={1}
                className={inputClass}
                value={efficiency}
                onChange={(e) => setEfficiency(e.target.value)}
                aria-describedby={id('eff-hint')}
              />
              <p id={id('eff-hint')} className={hintClass}>
                100 if the dish runs on DC.
              </p>
            </div>
            <div>
              <label htmlFor={id('reserve')} className={labelClass}>
                Reserve (%)
              </label>
              <input
                id={id('reserve')}
                type="number"
                inputMode="decimal"
                min={0}
                max={99}
                step={1}
                className={inputClass}
                value={reserve}
                onChange={(e) => setReserve(e.target.value)}
                aria-describedby={id('reserve-hint')}
              />
              <p id={id('reserve-hint')} className={hintClass}>
                Share of the bank you keep. 20 is typical for LiFePO4, 50 for lead-acid.
              </p>
            </div>
          </div>
        </fieldset>
      </form>

      <section
        aria-labelledby={id('results-heading')}
        className="card-dark hover:border-brand-border hover:shadow-none lg:sticky lg:top-28 lg:self-start"
      >
        <h2 id={id('results-heading')} className="mb-6 text-xl font-bold text-brand-cream">
          Results
        </h2>

        {/* One short line for screen readers instead of announcing every card on each keystroke. */}
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {result
            ? `Runtime ${fmtHours(result.runtimeHours)}. ${fmt(result.whPerDay)} watt-hours per day. ${fmt(result.kwhFor24h, 2)} kilowatt-hours needed for 24 hours.`
            : 'No result: check the inputs.'}
        </p>

        {result ? (
          <dl className="space-y-6">
            <div className="rounded-xl border border-brand-gold/40 bg-brand-gold/5 p-5">
              <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Runtime on this battery
              </dt>
              <dd className="mb-0 text-4xl font-black tracking-tight text-brand-cream sm:text-5xl">
                {fmtHours(result.runtimeHours)}
              </dd>
              <p className="mb-0 mt-2 text-sm text-brand-muted">
                {fmt(result.usableWh)} usable Wh ÷ {fmt(result.batteryWatts, 1)} W from the battery, no
                sun and no charging.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-brand-border p-4">
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  Draw from battery
                </dt>
                <dd className="mb-0 text-2xl font-bold text-brand-cream">
                  {fmt(result.batteryWatts, 1)} W
                </dd>
                <p className="mb-0 mt-1 text-xs text-brand-muted">
                  {fmt(dishWatts + (num(extraWatts) || 0))} W of load ÷ {efficiency}% inverter.
                </p>
              </div>
              <div className="rounded-lg border border-brand-border p-4">
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  Energy per day
                </dt>
                <dd className="mb-0 text-2xl font-bold text-brand-cream">
                  {fmt(result.whPerDay)} Wh
                </dd>
                <p className="mb-0 mt-1 text-xs text-brand-muted">
                  {fmt(result.whPerDay / 1000, 2)} kWh every 24 h, which your solar has to put back.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-brand-border p-4">
              <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                To run 24 h you need
              </dt>
              <dd className="mb-0 text-2xl font-bold text-brand-cream">
                {fmt(result.kwhFor24h, 2)} kWh
                <span className="ml-2 text-base font-medium text-brand-muted">
                  ≈ {fmt(ahFor24h)} Ah at {volts} V
                </span>
              </dd>
              <p className="mb-0 mt-1 text-xs text-brand-muted">
                Nameplate capacity, with your {reserve}% reserve left untouched at the end of the
                day.
              </p>
            </div>
          </dl>
        ) : (
          <p className="mb-0 text-brand-muted" role="status">
            Enter a dish draw above zero, an inverter efficiency between 1 and 100, and a reserve
            below 100 to see a result.
          </p>
        )}
      </section>
    </div>
  );
}
