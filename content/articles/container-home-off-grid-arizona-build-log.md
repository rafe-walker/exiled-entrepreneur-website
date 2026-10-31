---
title: "Building an off grid container home in Arizona: two 40 ft high-cubes, the systems in order"
description: "An off grid container home in Arizona is a heat problem first. Build order for two 40 ft high-cubes: roof coating, foam, power, cooling, water, septic."
date: "2026-11-03"
updated: "2026-11-03"
category: "building"
tags: ["container-home", "off-grid", "arizona", "insulation", "mini-split", "spray-foam"]
draft: true
targetQuery: "off grid container home arizona"
---

An off grid container home in Arizona is a heat-rejection project that happens to have walls. Two 40 ft high-cube containers are 16 ft × 40 ft of corrugated steel sitting in a place where Willcox, the nearest climate station to a lot of Cochise County, averages a 96 °F July high and has hit 112 °F, while also recording −7 °F and a 28 °F mean January low ([Willcox climate data](https://en.wikipedia.org/wiki/Willcox,_Arizona)). Steel has essentially no R-value and reaches dew point on the inside face every cool night. Every system decision below follows from that: coat the roof, foam the steel, then size the cooling for what is left.

This is the systems list for my build, in the order the work actually has to happen. Where a number is mine and I have not pulled the receipt or the meter reading yet, it is marked **[VERIFY]**.

## What an off grid container home in Arizona has to survive first: the foundation

The containers sit on concrete pillars roughly two feet off grade. Reasons, in order of weight: airflow under the floor (the container floor is the one surface you cannot coat white or foam from outside), drainage during monsoon, and the fact that a 40 ft HC weighs about 8,600–9,200 lb empty ([40 ft high-cube specs](https://www.conexwest.com/shipping-containers-sale/40ft-high-cube-shipping-containers/amp)) and only needs support at its corner castings plus a few intermediate points. A full slab under 640 sq ft of container is money spent on the strongest part of the box.

The house is permitted under the Cochise County owner-builder opt-out, which waives plan review and county building inspections but not zoning, septic, or floodplain requirements; the pole barn and the solar array each needed their own accessory-structure permit. That is its own article: [Cochise County owner-builder opt-out permit](/articles/cochise-county-owner-builder-opt-out-permit).

**[VERIFY: pillar count, footing size, and how the containers are anchored to the pillars]**

## Roof: silicone coating before anything else goes inside

The first thing that went on the containers was Henry 887 Tropi-Cool, a 100% silicone white roof coating. The tech data sheet gives initial solar reflectance of 0.88, aged 0.73, thermal emittance 0.90, and a Solar Reflectance Index of 111 initial / 90 aged; coverage is about 320 sq ft per 5 gal pail at a minimum 1.5 gal per 100 sq ft and 22 mil dry film, and metal is a listed substrate after wire-brushing rust ([Henry 887 technical data](https://www.henry.com/fileadmin/pdf/current/tds/HE887_techdata.pdf)). Applied between 35 °F and 120 °F, tack-free in one to two hours, and rated for permanent ponding water, which matters on a flat container roof that puddles.

Why this comes first: a bare Corten roof in June is a radiant panel pointed at the ceiling. Reflecting most of that before it becomes heat inside the steel is the cheapest cooling you will buy. Two containers at 8 ft × 40 ft each is 640 sq ft of roof, so roughly two pails at the minimum rate, more if you build film thickness. **[VERIFY: number of pails used and whether the sides got coated too]**

## Insulation: closed-cell foam on the steel, Rockwool in the cavity

The plan is 1 in of closed-cell spray polyurethane foam directly on the interior steel, then Rockwool batts in the framed wall cavity in front of it.

The foam is not primarily there for R-value. Closed-cell SPF runs about R-6.5 per inch at roughly 2 lb/ft³ density ([Conexwest container foam specs](https://www.conexwest.com/container-fabrication/spray-foam-insulation)), so one inch buys R-6.5. What it buys that nothing else does is a continuous, adhered air and vapor barrier on the steel. Container walls hit dew point on cool nights; any air path that lets interior moisture reach that steel produces condensation behind the wall and rust inside the house. One inch of closed-cell foam, with no gaps, is the condensation control layer. If you skip it and stuff batts against bare corrugation, you will find wet insulation within a year.

The Rockwool goes in front for bulk R-value, fire behavior (flame spread 0, smoke developed 0 under ASTM E84; non-combustible under ASTM E136 per [Rockwool](https://www.rockwool.com/north-america/products-and-applications/products/comfortbatt/)), and because it does not care about the occasional wet event the way fiberglass does. Comfortbatt is sold in widths sized for both wood and steel studs.

Interior width is the cost. A 40 ft HC is about 7 ft 8 in wide inside; two side by side with the shared wall removed is about 15 ft 5 in. One inch of foam plus a 3.5 in cavity on each exterior long wall takes roughly 9 in of that. That is the trade in a container: every inch of insulation is an inch of room.

**[VERIFY: framing depth, Rockwool thickness/R-value chosen, ceiling insulation stackup, and whether the floor was foamed from below]**

## Power: ground-mount PV and two 3 kW inverters

Power is a ground-mount solar array built in 2022 feeding two EG4 3000EHV-48 all-in-one inverters in parallel, 120 V only, into an Eaton BR panel. Batteries are mostly Eco-Worthy 48 V server-rack LiFePO4 plus one unit from another brand. Everything lives in a utility shed under 200 sq ft, separate from the house, with Solar Assistant on the older RS232/RS485-equipped inverter revision for monitoring.

The decision to run 120 V only rather than split-phase 240 V was driven by the load list: every planned load in the house is 120 V (mini split, tankless heater controls, pump, workstation). Two 3000EHV-48 in parallel give 6 kW continuous on one leg, with no 240 V loads to strand half the capacity. The inverter itself supports up to 12 units in single-phase parallel or 2 × 6 in split-phase ([EG4 3000EHV-48 spec sheet](https://eg4electronics.com/wp-content/uploads/2024/05/EG4-3000EHV-48-Spec-Sheet.pdf)), so 240 V is a later-reconfiguration option, not a rebuild.

The power system has two dedicated articles: [running two 3000EHV-48 in parallel with Solar Assistant](/articles/eg4-3000ehv-48-parallel-solar-assistant-monitoring) and [Eco-Worthy rack batteries with an EG4 inverter](/articles/eco-worthy-server-rack-battery-eg4-inverter).

**[VERIFY: array size in kW, panel count and model, string configuration, total battery kWh]**

## Cooling: one 12k BTU hybrid mini split

Cooling is an EG4 12k BTU hybrid AC/DC mini split. The spec sheet lists a maximum input of 1,700 W on 115 VAC, a direct DC PV input of 90–350 VDC at up to 14 A (380 Voc max), R32 refrigerant, and a design coverage of about 650 sq ft ([EG4 12K hybrid spec sheet](https://eg4electronics.com/wp-content/uploads/2025/07/EG4-12K-Hybrid-Solar-Powered-Mini-Split-12000BTU-ACDC-Air-Conditioner-Heat-Pump-R32-Spec-Sheet.pdf)). The house is about 640 sq ft gross, less after walls, so one head is a match on paper if the envelope does its job.

The "hybrid" part is the reason it is this unit and not a cheaper standard mini split: the outdoor unit accepts panels directly and draws from AC only when the PV is short. In a climate where cooling demand and solar production peak together, that keeps the heaviest daytime load off the inverters and off the battery.

**[VERIFY: whether the mini split has its own dedicated PV string or runs AC-only; measured daytime and nighttime draw]**

## Hot water: outdoor propane tankless

Hot water is a Rinnai REP160eP, an outdoor non-condensing propane tankless unit: 160,000 BTU max input, 10,400 BTU minimum, 6.6 GPM max flow, 0.4 GPM activation, 0.81 UEF, 120 V at 4 A for the controls and the built-in recirculation pump, 3/4 in gas and water connections, 13 in WC minimum propane pressure, and no venting because it is outdoor-rated ([Ferguson listing](https://www.fergusonhome.com/rinnai-rep160ep/s1898205), [Rinnai RE160eP page](https://www.rinnai.us/residential/product-detail/re160ep)).

Outdoor tankless on an off-grid build solves three problems at once: no electric resistance load on the battery, no combustion air or flue inside a tight foamed box, and no standby loss. Propane started on 100 lb cylinders and moves to a 330 gal tank. **[VERIFY: current propane setup, delivery vendor, and whether the heater's freeze-protection circuit is on an always-on circuit]**

## Water: hauled, pumped, filtered

There is no well. Water is hauled to a storage tank and pressurized by a SEAFLO 55-series 12 V diaphragm pump (5.5 GPM, 60 PSI) feeding a pressure tank, with whole-house filtration ahead of the fixtures. That system is detailed in [Hauled water off-grid](/articles/hauled-water-off-grid-pump-pressure-tank). The short version: at the EPA's figure of 88 gal per person per day for a typical American home ([EPA WaterSense](https://19january2021snapshot.epa.gov/watersense/statistics-and-facts_.html)), hauling makes you very interested in low-flow fixtures and in what the washer drains to.

**[VERIFY: storage tank size and material, and hauled-water cost per load]**

## Wastewater: septic, plus a gray-water diverter for the washer

The septic system was permitted through the county health department, which administers ADEQ's Type 4 general permit for onsite systems under a delegation agreement ([ADEQ–Cochise County delegation](https://public.destinyhosted.com/cochidocs/2025/BOS/20250603_3028/8549%5FCochise%5FCounty%5FFinal%5FADEQ%5FDelegation%5FAgreement%5F10%2E14%2E24%2Epdf)).

A gray-water diverter for the washer is planned. Arizona allows residential gray-water reuse under 400 gal/day with no permit application under the Type 1 general permit at A.A.C. R18-9-711, provided you follow its conditions: irrigation only, no spray, divertable back to the septic, no surface application on food plants except citrus and nut trees, five feet of vertical separation to seasonal high groundwater, and the septic system must still be sized for the full combined flow ([Arizona gray-water rules summary](https://greywateraction.org/arizona-regulations/)). A three-way valve on the washer standpipe satisfies the "divertable" condition and is the lowest-effort reuse there is. **[VERIFY: diverter valve model and where the laundry water will be discharged]**

## Order of operations, condensed

1. Septic design and permit (siting can move the house).
2. Pillars, set containers, cut openings.
3. Roof coating. Do it before the interior is finished and before monsoon.
4. Closed-cell foam on all interior steel, then framing and Rockwool.
5. Utility shed, array, inverters, batteries, panel. Power the build from the system you are building.
6. Rough plumbing with the pump/pressure tank/filtration in a heated or buried location.
7. Mini split and tankless heater.
8. Finish, then gray-water diverter once the washer is in.

Everything on that list exists because steel in the desert is hot in the day, cold at night, and wet in the morning. Design for that and the container stops being the problem.

## Related

- [Cochise County owner builder permit (the opt-out): what the county actually required for a container home](/articles/cochise-county-owner-builder-opt-out-permit)
- [Running two EG4 3000EHV-48 in parallel with Solar Assistant](/articles/eg4-3000ehv-48-parallel-solar-assistant-monitoring)
- [Off grid hauled water system: tank, 12 V pump, pressure tank and filtration without a well](/articles/hauled-water-off-grid-pump-pressure-tank)
- [Off grid power for remote work: the budget worksheet](/articles/remote-work-off-grid-power-budget)
