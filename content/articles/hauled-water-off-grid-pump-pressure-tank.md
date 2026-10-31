---
title: "Off grid hauled water system: tank, 12 V pump, pressure tank and filtration without a well"
description: "An off grid hauled water system that acts like city water: storage tank, SEAFLO 55 12 V pump, pre-charged pressure tank, filtration, and freeze protection."
date: "2026-11-03"
updated: "2026-11-03"
category: "building"
tags: ["hauled-water", "off-grid", "seaflo", "pressure-tank", "filtration", "arizona"]
draft: true
targetQuery: "off grid hauled water system"
---

An off grid hauled water system is four parts in series: a storage tank the truck fills, a pump that pressurizes the house, a pressure tank that keeps the pump from short-cycling, and filtration between the two because hauled water has been in a truck and a tank. Get the pressure tank pre-charge right and a 12 V diaphragm pump will run a tankless water heater and a shower indistinguishably from a well. Get it wrong and the pump dies young, the heater flickers on and off, and you wonder why anyone lives this way. Here is my system, the numbers behind it, and the pieces I still owe a receipt for, marked **[VERIFY]**.

I have no well. Water is delivered to a storage tank on the property and pressurized by a SEAFLO 55-series 12 V pump through a pressure tank and whole-house filtration.

## Why hauled, and what it costs

There is no well on the parcel, and the permit path for the house required only that potable water be available to the site, which hauled water satisfies ([Cochise County owner-builder amendment](https://public.destinyhosted.com/cochidocs/2014/BOS/20141014_733/2062%5FDRAFT%20RURAL%20RESIDENTIAL%20OWNER%2DBUILDER%20AMENDMENT%20MAY%202014%20%282%29%2Epdf)). Hauling turns a capital cost into an operating one. **[VERIFY: why no well — cost quote, depth risk, or timing]**

The operating cost depends on your hauler and distance. One Arizona hauler profiled in 2026 charges $85–90 per 1,000 gallons and $110–125 per 2,000 gallons delivered from a 2,035-gallon truck ([Cronkite News, rural water hauling](https://cronkitenews.azpbs.org/2026/09/30/rural-arizona-dry-wells-water-haulers/)). That is a Chino Valley number, not a Cochise County one; use it as the shape of the cost, not the figure. **[VERIFY: Joshua's hauler rate per load, load size, and delivery frequency]**

The EPA puts average American home use at 88 gallons per person per day ([EPA WaterSense](https://19january2021snapshot.epa.gov/watersense/statistics-and-facts_.html)). Two people at that rate drain a 2,000-gallon delivery in about 11 days. Nobody on hauled water uses 88 gallons a day; the first month teaches you where it goes. Low-flow fixtures, a front-load washer, and a gray-water diverter on the washer are the standard responses, and the diverter is legal in Arizona without a permit application under 400 gallons per day if you follow the Type 1 general permit conditions ([Arizona gray-water rules](https://greywateraction.org/arizona-regulations/)).

## 1. Storage tank

Sizing is delivery interval × daily use × margin. If the hauler comes every two weeks and you use 60 gallons a day between two people, you need 840 gallons plus a reserve for the week the truck does not come. Tanks are sold in round sizes; the next size up is the right one.

Three things matter more than brand:

- **Potable-rated and opaque.** Sunlight through a translucent tank grows algae. Black or dark green polyethylene, NSF/ANSI 61 rated for drinking water.
- **Fill access the driver can reach without getting out twice.** A hauler charges by time as much as by gallon.
- **Outlet height and a drain.** The outlet should sit a few inches above the floor of the tank so sediment stays in the tank, with a separate bottom drain for flushing.

Burying or shading the tank keeps the water cool, which matters in a place that sees 112 °F ([Willcox climate](https://en.wikipedia.org/wiki/Willcox,_Arizona)). **[VERIFY: tank capacity, material, above/below grade, and whether it is shaded]**

## 2. Pump: SEAFLO 55-series, 12 V

The pump is a SEAFLO 55-series diaphragm pump: 12 V DC, 5.5 GPM, 60 PSI ([Overton's listing](https://www.overtons.com/seaflo-55-series-diaphragm-water-pump-12v-5.5-gpm-60-psi-118494.html)). It is an RV-class pump, which is exactly right for a one-bathroom container house on hauled water:

- **Self-priming.** Diaphragm pumps lift water on their own, unlike a centrifugal pump that must be flooded. When the tank runs dry (it will), the pump pulls air rather than cavitating; how long it tolerates that is in SEAFLO's documentation, not the retailer page, so check the dry-run rating for your exact model.
- **12 V DC** means it runs from a small dedicated battery or a DC converter, not from the inverters. The house water does not go down when the inverter does. **[VERIFY: how the pump is powered — dedicated 12 V battery, DC-DC converter from the 48 V bank, or an AC power supply]**
- **Built-in pressure switch at 60 PSI.** The pump itself decides when to run, which is why the pressure tank pre-charge below has to be set relative to the pump's switch, not an external one.

Its limits: 5.5 GPM is one shower plus one sink, not a household running a washer and two showers at once. The Rinnai REP160eP tankless heater activates at 0.4 GPM and runs to 6.6 GPM ([Ferguson listing](https://www.fergusonhome.com/rinnai-rep160ep/s1898205)), so a 5.5 GPM pump can never starve it on flow, but a pump that cycles on and off every few seconds will cycle the heater's flame with it. That is the pressure tank's job to prevent.

The pump's current draw at pressure is on its label and in SEAFLO's own documentation; I am not quoting it here because the retailer pages I could find do not list it. **[VERIFY: pump amp draw at cut-off pressure, and fuse size]**

## 3. Pressure tank: pre-charge is everything

A bladder pressure tank stores a few gallons under air pressure so that small draws (a faucet, a toilet fill, the tankless heater's flow sensor) pull from the tank instead of starting the pump. The pump then runs once, for longer, to refill it. Long runs and few starts are what keep a diaphragm pump alive.

The one setting that decides whether this works is the air pre-charge, measured with the tank empty of water. The rule from the well industry: set the pre-charge about 2 psi below the pump's cut-in pressure, so the bladder never fully empties before the pump starts ([The Driller, pressure tank drawdown](https://www.thedriller.com/articles/87216-tech-topics-calculating-and-controlling-pressure-tank-drawdown)). If the pre-charge is above cut-in, pressure at the faucet drops to zero for a moment before the pump catches up, which is the "flicker" you feel in a shower. If it is far below, the bladder holds almost no usable water and the pump short-cycles.

Drawdown, the water you actually get between pump cycles, is a fraction of tank volume:

> Drawdown = (P1/P2 − P1/P3) × V, with P1 = pre-charge, P2 = cut-in, P3 = cut-out, all in absolute pressure (gauge + 14.7 psi).

For a typical 40/60 switch and 38 psi pre-charge that works out to roughly 26% of the tank's nominal volume; for 30/50 and 28 psi about 30% (same source). A "20-gallon" tank gives you five or six gallons of draw. That is enough to flush a toilet and wash hands without the pump starting, which is the whole point.

Complication with the SEAFLO: its internal switch is set by the factory around 60 PSI cut-off with a cut-in some tens of psi below; the exact cut-in is on the pump's datasheet. Set the pre-charge 2 psi under *that* cut-in. **[VERIFY: pressure tank nominal volume, the pump's actual cut-in pressure, and the pre-charge Joshua set]**

Check the pre-charge yearly with a tire gauge, tank drained. Bladders lose air slowly, and a tank that was right in year one short-cycles in year three.

## 4. Filtration: sediment first, then taste

Hauled water is municipal or well water that has been through a truck tank and sat in yours. The failure mode is sediment and the occasional algae bloom, not chemistry, unless your hauler's source is unusual. A reasonable whole-house stack:

1. **Spin-down or 50-micron sediment pre-filter** at the tank outlet, before the pump. It protects the pump's check valves, which is where grit kills a diaphragm pump.
2. **5-micron sediment cartridge** after the pressure tank.
3. **Carbon block** for taste and chlorine if your hauler fills from a chlorinated municipal source.
4. **Optional UV** if you are not confident in the source. UV adds a continuous electrical load and needs clear water (hence the sediment stages first).

Put the housings where you can change cartridges without crawling, with isolation valves and a pressure gauge before and after the cartridges; a rising differential is your change indicator. **[VERIFY: Joshua's actual filter stages, micron ratings, and whether there is UV]**

## 5. Freeze protection in southeast Arizona

People assume the desert does not freeze. Willcox averages a 28 °F January low and has recorded −7 °F ([Willcox climate](https://en.wikipedia.org/wiki/Willcox,_Arizona)). A pressure tank, a filter housing, and a 12 V pump are small masses of water that freeze fast and split.

- **Pump, pressure tank, and filters indoors or in an insulated, heated box.** Never on an exterior wall or in an unheated shed in this climate. **[VERIFY: where Joshua's pump/tank/filters are located and how that space is kept above freezing]**
- **Storage tank:** large volume, so it freezes slowly; the vulnerable parts are the outlet fitting and the first few feet of pipe. Bury or insulate the outlet run.
- **Exposed supply lines:** bury below the local frost line or heat-trace and insulate. Heat tape is a continuous load; on an off-grid system size it into the winter power budget.
- **Outdoor tankless heater:** Rinnai's product page for the RE160eP lists it as outdoor-rated but does not state a freeze-protection temperature ([Rinnai RE160eP](https://www.rinnai.us/residential/product-detail/re160ep)); the rating and its conditions are in the installation manual. Tankless freeze-protection circuits in general depend on the unit having electrical power, so if the heater sits on a circuit that can go dark, drain it before a hard freeze. The manual, not this article, is the authority on your model.
- **Hose bibs and the tank fill:** frost-free or drain them.

## 6. What an off grid hauled water system feels like day to day

Done right, you turn a tap and water comes out at 50-something psi, the heater lights, and nothing cycles. The things you notice that a well owner does not: you know your gallons per day to within ten, you check the tank level before a guest weekend, and you text the hauler a week ahead of empty. A float switch or a pressure transducer on the storage tank feeding Solar Assistant or Home Assistant turns that last item into an alert. **[VERIFY: whether Joshua monitors tank level and how]**

## Related

- [Building an off grid container home in Arizona: two 40 ft high-cubes, the systems in order](/articles/container-home-off-grid-arizona-build-log)
- [Cochise County owner builder permit (the opt-out): what the county actually required for a container home](/articles/cochise-county-owner-builder-opt-out-permit)
- [Buying land for remote work checklist: connectivity and power due diligence](/articles/buying-rural-land-remote-work-connectivity-checklist)
