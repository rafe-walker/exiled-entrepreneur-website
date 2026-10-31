---
title: "Off grid power for remote work: sizing the workstation, monitors, router and satellite honestly"
description: "Off grid power for remote work is a worksheet: watts x hours for desk, network and house, then battery for the night and PV for the worst month. With example."
date: "2026-11-03"
updated: "2026-11-03"
category: "off-grid-power"
tags: ["off-grid", "power-budget", "remote-work", "starlink", "battery-sizing", "solar"]
draft: true
targetQuery: "off grid power for remote work"
---

Off grid power for remote work is a worksheet, not a feeling. List every load with its watts and its hours per day, separate the desk from the house, add the inverter's own idle draw, and you get a daily watt-hour number. Battery capacity is that number times the nights you want to cover, divided by the depth of discharge you will tolerate. Array size is that number divided by the worst month's sun hours, with a margin for the days the panels are dirty. Everything else is a product page. Below is the method, the measured numbers I could source, and a worked example from my own shed with the figures I still need to pull from the meter marked **[VERIFY]**.

## Off grid power for remote work: the method in six lines

1. **Inventory.** Every device that plugs in, with its *measured* watts (a plug-in meter, not the nameplate) and realistic hours per day.
2. **Split into three buckets:** desk (what makes money), network (what you cannot work without), house (everything else).
3. **Add the parasitic floor:** inverter idle, chargers, anything with a standby light. Multiply by 24.
4. **Daily Wh = Σ (watts × hours) + floor.** Do it for a workday and a weekend; the workday is the design case.
5. **Battery Wh = daily Wh × nights of autonomy ÷ usable depth of discharge.** For LiFePO4, 80% usable is conservative.
6. **Array W = daily Wh ÷ worst-month peak sun hours ÷ system efficiency (~0.75–0.8 for PV-to-battery-to-AC).**

The reason to split desk from house is that the desk is non-negotiable and small, while the house is negotiable and large. When the battery is low at 4 p.m. in August, you shed the house, not the job.

## Desk: what the equipment actually draws

**Computer.** I am not going to quote a wattage for "a NUC" or "a desktop" because the spread is enormous: a mini PC's integrated GPU alone idles at about 5 W with two screens attached and rises to ~9 W decoding 4K video ([NUC 13 Pro power measurements](https://www.linuxlinks.com/intel-nuc-13-pro-mini-pc-running-linux-power-consumption/)), while a desktop with a discrete GPU can be ten times that. Put a meter on yours for a full workday. That one measurement is worth more than this article. **[VERIFY: Joshua's workstation make/model and measured idle, typical, and peak watts]**

**Monitors.** The Energy Star "Most Efficient" list shows 27-inch panels at roughly 9.8–10.7 W in On mode ([Energy Star certified displays](https://www.energystar.gov/most-efficient/me-certified-computer-monitors/results?page_number=2)). Those are the best-in-class figures; a brighter, higher-refresh, or older 27-inch panel will be higher, so again measure. Two efficient monitors for a 9-hour day is on the order of 180–200 Wh. **[VERIFY: monitor count, models, measured watts]**

**Peripherals.** Dock, webcam, headset charger, desk lamp. Individually trivial, collectively a steady draw that runs all day. Meter the power strip as a unit rather than guessing per device.

## Network: the load you cannot shed

**Satellite.** Starlink's Gen 3 Standard dish averages 75–100 W in use and about 20 W idle; the Gen 2 actuated dish 50–75 W; the High Performance dish 110–150 W ([dishytech power measurements](https://www.dishytech.com/how-much-power-does-starlink-use/)). Call a Gen 3 Standard 75 W × 24 h = 1.8 kWh/day if you never sleep it, or roughly 1.1 kWh/day with a sleep schedule covering 10 overnight hours at ~20 W. That is frequently the single largest 24-hour load in an off-grid office. If your terminal is a Mini or you are on cellular, your number is different; measure it.

**Router and switches.** A router, a managed switch, and a Wi-Fi access point are each small but run 24 hours, so they belong on the meter as a group. Less obvious: a cellular failover modem sitting idle still draws.

**Why it has to be on the battery, not shed:** Zoom's published requirements for a group call are 2.6 Mbps up / 1.8 Mbps down at 720p and 3.8 / 3.0 Mbps at 1080p ([Zoom bandwidth requirements](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748)). Bandwidth is rarely the problem; a dish rebooting because the inverter browned out mid-call is. The network bucket gets the deepest battery reserve.

**[VERIFY: Joshua's terminal generation and plan, router/switch models, and measured network-bucket watts]**

## House: the bucket you size the array for

In a container home in southern Arizona the house bucket is dominated by cooling. The EG4 12k BTU hybrid mini split lists a 1,700 W maximum input on 115 VAC, with a direct 90–350 VDC PV input at up to 14 A ([EG4 12K hybrid spec sheet](https://eg4electronics.com/wp-content/uploads/2025/07/EG4-12K-Hybrid-Solar-Powered-Mini-Split-12000BTU-ACDC-Air-Conditioner-Heat-Pump-R32-Spec-Sheet.pdf)). Maximum is not average; an inverter-driven compressor on a well-insulated box runs well under its max most of the time. The hybrid design also means daytime cooling can come from its own panels and never touch the battery, which is the entire reason to spend the extra on that unit in this climate.

Other house loads with sourced numbers:

- **Hot water:** Rinnai REP160eP outdoor propane tankless, 120 V at 4 A for controls and the recirculation pump ([Ferguson listing](https://www.fergusonhome.com/rinnai-rep160ep/s1898205)). The heating is propane; the electrical load is small but continuous when the recirc pump runs. Turn the recirc schedule off if you are not using it.
- **Water pump:** SEAFLO 55-series, 12 V, 5.5 GPM, 60 PSI ([Overton's listing](https://www.overtons.com/seaflo-55-series-diaphragm-water-pump-12v-5.5-gpm-60-psi-118494.html)). A diaphragm pump only runs while the pressure tank refills; with a correctly pre-charged tank it is a few minutes a day. Negligible, if the pressure tank is right.
- **Refrigerator, lights, laundry:** meter them. The fridge's yellow EnergyGuide label gives an annual kWh figure you can divide by 365 as a starting point; the washer depends entirely on cycle and water temperature. I am not going to assert my specific numbers without the meter log. **[VERIFY: fridge, washer, lighting daily Wh]**

## Parasitic floor: the number people forget

Each EG4 3000EHV-48 idles at under 70 W and under 15 W in standby ([EG4 spec sheet](https://eg4electronics.com/wp-content/uploads/2024/05/EG4-3000EHV-48-Spec-Sheet.pdf)). Two in parallel, always on, is up to 140 W × 24 h = 3.4 kWh/day before anything is plugged in. That is often more than the entire desk bucket. It is the single best argument for not over-paralleling small inverters: a system that needs 6 kW surge for a well pump you do not have pays for it every night.

Options: run one inverter at night with the second in standby, if your loads allow and your firmware supports it cleanly; or accept the floor and size the battery for it. **[VERIFY: measured 3 a.m. total load from Solar Assistant, which is the real floor including Starlink, router, and fridge]**

## Worked example (fill in the brackets)

A 9-hour workday, Gen 3 Standard Starlink with overnight sleep, two efficient monitors, two inverters in parallel:

| Bucket | Item | Watts | Hours | Wh/day |
|---|---|---|---|---|
| Desk | Workstation | **[VERIFY]** | 9 | — |
| Desk | 2 × 27-in monitor | ~21 | 9 | ~190 |
| Desk | Dock + peripherals | **[VERIFY]** | 9 | — |
| Network | Starlink Gen 3 (14 h active / 10 h sleep) | 75 / 20 | 14 / 10 | ~1,250 |
| Network | Router + switch + AP | **[VERIFY]** | 24 | — |
| House | Mini split (AC-side draw) | **[VERIFY]** | **[VERIFY]** | — |
| House | Fridge | **[VERIFY]** | 24 | — |
| House | Tankless controls + recirc | ≤ 480 W nameplate (4 A), far less average | — | **[VERIFY]** |
| House | Pump, lights, misc | **[VERIFY]** | — | — |
| Floor | 2 × inverter idle | ≤ 140 | 24 | ≤ 3,360 |

Even with the blanks, two facts fall out. First, the satellite terminal plus two inverter idles can approach 4.5 kWh/day before a single work or house load. Second, the desk itself, for a typical mini-PC-plus-two-monitors setup, is likely a few hundred watt-hours. The job is cheap to power. The infrastructure around it is not.

## Battery: size for the night, not the day

Take the sum of the network bucket, the floor, and whatever house loads run overnight (fridge, and the mini split if you cool at night). Multiply by the hours between the last useful sun and the first, roughly 14–15 hours in a Cochise County winter. Divide by 0.8 for usable LiFePO4 capacity.

Each Eco-Worthy 48 V 100 Ah rack unit is 5.12 kWh nominal ([battery spec listing](https://shopsolarkits.com/collections/all/products/eco-worthy-48v-51-2v-100ah-server-rack-lithium-battery-5-12kwh)), so about 4.1 kWh usable at 80% DoD. If your overnight draw is, say, 350 W average (two inverters idle, dish sleeping, router, fridge cycling), that is ~5 kWh over 14 hours, or a bit more than one pack. If you also run the mini split through a July night, it is two to three. **[VERIFY: number of packs in Joshua's bank and total kWh]**

One more constraint: the inverters' battery-side current. At 48 V, a 3 kW load is roughly 65 A; two inverters fully loaded can pull 160 A. Each pack's BMS is rated 100 A, so the bank needs at least two packs just to let both inverters run at rated output. Capacity and current are separate limits.

## Array: size for the worst month, then add dirt

Daily Wh ÷ worst-month peak sun hours ÷ ~0.77. Southern Arizona's worst month is December, not because of cloud but because of short days; the exact sun-hour figure depends on tilt and site, and I am not going to state one without the NREL lookup for the specific location, which I am also not publishing. If your daily budget comes out around 8 kWh and you assume 4.5 winter sun hours, that is 8,000 ÷ 4.5 ÷ 0.77 ≈ 2.3 kW of panels at the absolute minimum. Each 3000EHV-48 MPPT accepts up to 5,000 W of PV at 500 Voc max, so two inverters allow up to 10 kW of array, far more than that minimum; the limit is budget and ground, not the inverters. **[VERIFY: Joshua's array kW, panel count, and tilt]**

Then there is dust. A ground mount in a valley that gets haboobs needs hosing down; losses from soiling are real and you will see them per-string in Solar Assistant.

## Practical rules from running this

- Put the desk and the network on the same circuit and treat it as critical. Shed everything else first.
- Sleep the dish at night. It is the cheapest kWh you will ever save.
- Meter before you buy anything. A plug-in meter and a week of Solar Assistant logs replace every nameplate on this page.
- Do not chase a bigger inverter. Chase a smaller floor.

## Related

- [Running two EG4 3000EHV-48 in parallel with Solar Assistant](/articles/eg4-3000ehv-48-parallel-solar-assistant-monitoring)
- [Eco-Worthy server-rack LiFePO4 with an EG4 3000EHV-48](/articles/eco-worthy-server-rack-battery-eg4-inverter)
- [Rural internet in Cochise County, AZ for remote work (2026)](/articles/rural-internet-remote-work-cochise-county)
- [Buying land for remote work checklist: connectivity and power due diligence](/articles/buying-rural-land-remote-work-connectivity-checklist)
