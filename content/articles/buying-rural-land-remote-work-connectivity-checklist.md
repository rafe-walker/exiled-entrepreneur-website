---
title: "Buying land for remote work checklist: connectivity and power due diligence before you sign"
description: "A buying land for remote work checklist from an off-grid build in Cochise County: internet at the parcel, power path, water, septic, permits, and access."
date: "2026-11-03"
updated: "2026-11-03"
category: "land"
tags: ["rural-land", "due-diligence", "remote-work", "checklist", "off-grid", "cochise-county"]
draft: true
targetQuery: "buying land for remote work checklist"
---

This is the buying land for remote work checklist I wish I had run before closing on five acres in Cochise County, Arizona. The job depends on two things the listing will not tell you: whether a video call survives from that exact spot, and whether you can keep the equipment that makes the call powered through a January night. Everything else, water, septic, permits, access, is the normal rural due diligence, and it still has to be done, because each one changes the power and connectivity answer. Work the list in order; the early items kill deals cheaply.

Items marked with a source link are documented. Items about my own parcel that I have not pulled a record for are marked **[VERIFY]**.

## 1. Connectivity at the parcel, not the town

- **Fiber address check.** Put the parcel address (or the nearest addressed neighbor if the lot is unaddressed) into every local telco's availability tool. In Cochise County that starts with Valley Telecom; an aggregator shows their fiber reaching 78% of addresses in the town of Cochise, which tells you nothing about a parcel two miles out ([BroadbandNow, Cochise AZ](https://broadbandnow.com/Arizona/Cochise)). Only the telco's own tool counts.
- **Carrier home-internet eligibility.** T-Mobile, Verizon, and AT&T gate their 5G home products by address and sector capacity. Check all three. Eligibility can change, so a "yes" today is not a guarantee.
- **WISP line of sight.** Local fixed-wireless operators (TWN, HPAZNET, Simply Bits in this county, per the [county fixed-wireless coverage table](https://bestneighborhood.org/fixed-wireless-internet-cochise-county-az/)) need an unobstructed path to a specific tower. Call and ask which tower serves the area, then look at the terrain between it and the parcel.
- **Starlink obstruction check from the build site.** Download the app, stand where the dish will mount, run the sky scan. A south-facing slope under a ridge can have a clean northern sky or not; the scan knows and the listing does not.
- **Cell signal by carrier, on the ground.** Walk the parcel with phones on at least two carriers. Your failover link is a different carrier from your primary.
- **Latency and jitter, not just speed.** For calls, Zoom needs 2.6 Mbps up / 1.8 down at 720p and 3.8 / 3.0 at 1080p ([Zoom bandwidth requirements](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748)), which almost any option clears; what fails calls is jitter and dropouts. If you can borrow a neighbor's connection for an hour, run a continuous ping.

Deal-killer test: if the answer to fiber, carrier home internet, and WISP is all no, you are a Starlink-only parcel. That is workable, I do it, but go in knowing the dish is also your largest always-on power load.

## 2. Power path

- **Grid distance and line-extension quote.** If there is a utility pole within sight, get a written line-extension estimate from the utility before closing; the number can be a rounding error or more than the land. If the listing says "power nearby," ask for the pole number.
- **Off-grid solar resource.** Run the parcel's coordinates through NREL's PVWatts with a realistic array size and the tilt you will actually build. December output is the design month in southern Arizona because of day length, not cloud.
- **Shade survey.** Trees, ridgelines, and the house you have not built yet. A ground mount gives you placement freedom; a roof mount on a container does not.
- **Load budget before array budget.** A remote tech job's desk draw is small; the satellite terminal (Gen 3 Starlink averages 75–100 W active, about 20 W idle per [measured data](https://www.dishytech.com/how-much-power-does-starlink-use/)) and the inverters' own idle (under 70 W each for an EG4 3000EHV-48, per [spec sheet](https://eg4electronics.com/wp-content/uploads/2024/05/EG4-3000EHV-48-Spec-Sheet.pdf)) are the loads that size the battery. The worksheet is in [the off-grid power budget article](/articles/remote-work-off-grid-power-budget).
- **Equipment shelter.** Inverters and lithium batteries have operating temperature limits (the 3000EHV-48 is rated −10 °C to 55 °C). Plan a shaded, ventilated utility building; mine is under 200 sq ft and separate from the house.
- **Propane access.** If hot water and cooking are propane, confirm a supplier delivers to the road and whether they will set a tank. **[VERIFY: Joshua's propane supplier and delivery arrangement]**

## 3. Water

- **Well, hauled, or community water.** Three different parcels. A well is a drilling quote plus a depth gamble; hauled water is an ongoing cost and a tank; community water is a tap fee and a monthly bill. I have no well; water is hauled to a storage tank and pressurized by a 12 V pump and pressure tank. The system is in [the hauled water article](/articles/hauled-water-off-grid-pump-pressure-tank).
- **Hauled-water cost reality.** Rates vary by region; one Arizona hauler profiled in 2026 charges $85–90 per 1,000 gallons and $110–125 per 2,000 gallons delivered ([Cronkite News on rural water hauling](https://cronkitenews.azpbs.org/2026/09/30/rural-arizona-dry-wells-water-haulers/)). At the EPA's 88 gallons per person per day average ([EPA WaterSense](https://19january2021snapshot.epa.gov/watersense/statistics-and-facts_.html)) that is a real monthly line; low-flow fixtures and gray-water reuse stop being optional. **[VERIFY: Joshua's local hauling rate and tank size]**
- **Neighbor well depths.** Ask. The county and ADWR have well registries; neighbors have invoices.
- **Potable water is a permit condition.** The Cochise County owner-builder amendment requires potable water to be available to the site ([amendment text](https://public.destinyhosted.com/cochidocs/2014/BOS/20141014_733/2062%5FDRAFT%20RURAL%20RESIDENTIAL%20OWNER%2DBUILDER%20AMENDMENT%20MAY%202014%20%282%29%2Epdf)). Hauled counts; "I'll figure it out" does not.

## 4. Wastewater

- **Septic feasibility before design.** Onsite wastewater in Cochise County is an ADEQ Type 4 general permit administered by the county Department of Health & Social Services under a delegation agreement ([ADEQ–Cochise County delegation](https://public.destinyhosted.com/cochidocs/2025/BOS/20250603_3028/8549%5FCochise%5FCounty%5FFinal%5FADEQ%5FDelegation%5FAgreement%5F10%2E14%2E24%2Epdf)). Soils, slope, and setbacks decide where the system goes, and the system decides where the house goes.
- **Gray water is a cheap win in Arizona.** Residential gray-water reuse under 400 gallons per day needs no permit application under A.A.C. R18-9-711 if you follow its conditions (irrigation only, no spray, divertable to septic, five feet to seasonal high groundwater, septic still sized for full flow) ([Arizona gray-water rules](https://greywateraction.org/arizona-regulations/)). A washer diverter is the simplest version.

## 5. Zoning, permits, and the owner-builder question

- **Zoning district and acreage.** Cochise County's owner-builder opt-out requires an RU, SM, or SR district with a four-acre minimum lot size and a parcel of at least four acres ([county work-session material](https://public.destinyhosted.com/cochidocs/2020/WKS/20200128_1884/4977%5F012820%5Foptout%5FBOS%5FWS%2Epdf)). A 3.9-acre parcel is a different permit path entirely. Confirm both on the Assessor record, not the listing.
- **What the opt-out does not waive.** Zoning, septic, floodplain, and state codes. Option 2 (no plan review, no inspections) is not eligible for a certificate of occupancy ([permit rules summary](https://www.jaspector.com/permits/arizona/cochise/unincorporated/)), which matters for financing and insurance. Full detail in [the opt-out article](/articles/cochise-county-owner-builder-opt-out-permit).
- **Accessory structures.** On my build the pole barn and the ground-mount solar array each needed a separate accessory-structure permit. Plan every outbuilding on the first site plan.
- **Floodplain.** Check the FEMA map layer for the parcel. A wash across the lot is a floodplain permit and a siting constraint.
- **Legal access.** Recorded easement or county-maintained road? "Everyone uses that road" is not access.

## 6. Site and climate

- **Heat and UV.** Willcox averages a 96 °F July high and has recorded 112 °F; it also averages a 28 °F January low with a record of −7 °F ([Willcox climate](https://en.wikipedia.org/wiki/Willcox,_Arizona)). Your envelope, your roof coating, and your water lines all have to handle both ends.
- **Dust.** Valley floors get haboobs. Panels need washing; equipment needs filtered ventilation.
- **Monsoon drainage.** Where does water go in a 2-inch hour? Pillars rather than a slab were part of my answer.
- **Elevation and orientation.** South-facing slope for winter sun on the array; shade on the west wall for summer afternoons.

## 7. Data tools that shorten this

Two of these are mine, disclosed as such:

- **AZ Land List** ([azlandlist.com](https://azlandlist.com)) is my vacant-parcel data product for land investors, starting with a Cochise County owner pack; it is for finding and screening parcels, not for replacing the items above.
- **PlotNode** ([plotnode.io](https://plotnode.io)) is my digital-twin tool for rural land: drone orthomosaic and mesh upload, structure placement on 3D terrain. It is useful for the shade survey and siting items once you have a candidate parcel.
- **County Assessor parcel search, ADWR well registry, FEMA flood map, FCC National Broadband Map.** Free, public, and each one answers a line above.

## 8. The buying land for remote work checklist, closing-table version

Before earnest money goes hard, you should be able to answer in one sentence each:

1. Which internet link is primary, which is failover, and have you measured both from the build site?
2. What is the daily watt-hour budget, and how many nights of battery does it imply?
3. Where does water come from, what does it cost per month, and where does it go?
4. Which permit path, which option, and which structures need their own permits?
5. What is the line-extension quote, or the decision to never ask for one?

If any answer is "I'll find out after closing," that is the item that will cost the most.

## Related

- [Rural internet in Cochise County, AZ for remote work (2026)](/articles/rural-internet-remote-work-cochise-county)
- [Off grid power for remote work: the budget worksheet](/articles/remote-work-off-grid-power-budget)
- [Cochise County owner builder permit (the opt-out): what the county actually required for a container home](/articles/cochise-county-owner-builder-opt-out-permit)
- [Off grid hauled water system: tank, 12 V pump, pressure tank and filtration without a well](/articles/hauled-water-off-grid-pump-pressure-tank)
