---
title: "Eco-Worthy battery, EG4 inverter: closed-loop comms or voltage-based settings on a 3000EHV-48?"
description: "Eco-Worthy battery with an EG4 inverter: what closed-loop the 3000EHV-48 really supports, what the BMS speaks, and safe voltage-based LiFePO4 settings."
date: "2026-11-03"
updated: "2026-11-03"
category: "off-grid-power"
tags: ["eco-worthy", "eg4", "lifepo4", "server-rack-battery", "bms", "closed-loop"]
draft: true
targetQuery: "eco-worthy battery eg4 inverter"
---

Run the Eco-Worthy battery with an EG4 inverter in voltage-based User mode unless you have confirmed, on your specific firmware and your specific battery revision, that closed-loop communication both connects and allows discharge. The 3000EHV-48 manual documents closed-loop only for EG4's own batteries; Eco-Worthy lists several inverter protocols but not EG4's; and the one public EG4 forum thread about exactly this pairing ended with the user on open-loop until a firmware update. Below is what each side actually supports, how to wire it if you want to try, and the voltage settings that keep a 16S LiFePO4 pack healthy without any communication at all.

My system is two 3000EHV-48 in parallel on a 48 V bank that is mostly Eco-Worthy server-rack units plus one pack of another brand. A mixed-brand bank is itself a reason to stay voltage-based: closed-loop expects one master BMS speaking for the whole bank.

## Eco-Worthy battery meets EG4 inverter: what the 3000EHV-48 supports

From the V2 manual ([EG4 3000EHV-48 V2 manual](https://eg4electronics.com/wp-content/uploads/2024/04/EG4-3000EHV-48-V2-Manual.pdf)):

- **Program 05, battery type:** AGM (default), Flooded, User-Defined, EG4 protocol, and "customized protocols." Closed-loop is documented only for EG4 batteries over the "Li4"/EG4 battery protocol. Pylontech is not named; the "customized protocol" options are not described further.
- **BMS port:** RS485, listed with a USB Type A connector; the BMS cable is RJ45-to-USB-A.
- **With comms working:** Programs 43/44/45 set SOC-based return-to-utility (default 50%), return-to-battery (default 95%), and low-DC-cutoff (default 20%). These only apply when communication is established.
- **Without comms:** the manual's lithium guidance is to set Program 05 to User-Defined, set bulk voltage to the BMS max charge voltage minus 0.5 V, and set cutoff to the BMS discharge-protection voltage plus 2 V.

The spec sheet confirms the charger side: bulk defaults of 58.4 V (flooded) and 56.4 V (AGM/gel), 54.0 V float, 63 V overcharge protection, 80 A max PV charge, 60 A max AC charge, 80 A combined ([spec sheet](https://eg4electronics.com/wp-content/uploads/2024/05/EG4-3000EHV-48-Spec-Sheet.pdf)).

So the inverter can do closed-loop, but the documented path is EG4-to-EG4. Everything else is a "customized protocol" you discover by trial.

## What the Eco-Worthy BMS speaks

Eco-Worthy's 48 V 100 Ah server-rack battery (5.12 kWh, 51.2 V nominal, 100 A BMS, 58.4 V max charge, 40–58 V operating range, up to 32 in parallel on V3) exposes CAN, RS485, and RS232, plus Bluetooth and Wi-Fi app monitoring on the newer revisions ([retailer spec listing](https://shopsolarkits.com/collections/all/products/eco-worthy-48v-51-2v-100ah-server-rack-lithium-battery-5-12kwh)). Eco-Worthy's own technical write-up says the inverter-facing protocols are selected by DIP switch or by PC software and names Growatt, Deye, Victron, Voltronic, SRNE, and Pylontech protocol compatibility; RS485 is also the battery-to-battery bus in a master/slave group, with one master talking to the inverter ([Eco-Worthy communication features](https://ca.eco-worthy.com/blogs/blog/article-page-may-27-09-33-17)). Its closed-loop configuration guide is generic (identify pinouts, match the cable, set one master, configure the inverter per its manual) and does not mention EG4 ([Eco-Worthy closed-loop guide](https://www.eco-worthy.com/blogs/lithium-battery/how-to-configure-the-battery-for-closed-loop-communication-with-an-inverter)).

Two of those names matter here. "Voltronic" is the protocol family the 3000EHV-48 descends from (the Solar Assistant integration calls it "Sumry"). "Pylontech" is the de facto generic lithium protocol that most inverters accept under some lithium option number. Whether either maps onto a "customized protocol" slot in Program 05 on your firmware is the open question.

## What actually happened when someone tried it

The EG4 community forum has a thread titled almost exactly like this problem: a 3000EHV-48 paired with an Eco-Worthy 51.2 V rack battery, no AC output in "LI 2" mode ([EG4 forum thread](https://forum.eg4electronics.com/community/inverters/eg4-3000ehv-48-no-ac-out-with-eco-worthy-server-rack-battery-and-setting-5-in-li-2-mode/)). Summary:

- In LI 2 the battery did communicate: unplugging the RS485 cable threw error 19 on the inverter and reconnecting cleared it. The inverter charged the battery to 100% from AC but would not invert from it.
- In User mode it inverted fine but was charging on the User-mode voltage settings, not on BMS data.
- EG4 staff asked for the values of programs 1, 2, 3, 43, 44, and 45, suggested trying other protocols the battery offered, and if that failed said to use User mode with the battery maker's recommended voltages. For EG4's own batteries he cited bulk 56.2 V, float 54.0 V, low-DC cutoff 47 V, and explicitly said non-EG4 batteries need their own values.
- The poster reported the issue was resolved by updating a V1 unit to V2 firmware.

Separately, on a 6000XP with an Eco-Worthy rack battery, a forum member reported the battery "uses Pylon" and that battery code 2 worked, with code 6 (Luxpower) also working ([6000XP thread](https://forum.eg4electronics.com/community/6000xp/how-do-i-get-my-6000xp-to-recognize-my-eco-worthy-server-rack-battery)). That is a different inverter with a different lithium menu; it is evidence the Eco-Worthy BMS speaks Pylontech on CAN, not evidence that the 3000EHV-48 will accept it.

The pattern: "communicating" and "working" are different states. A link that shows SOC on the LCD but blocks discharge, or that charges to a BMS-reported 100% and then refuses to invert, is worse than no link.

## If you want to try closed-loop anyway

Do this with the loads off and a meter on the bus.

1. **Confirm firmware.** Older 3000EHV-48 units shipped with V1 firmware; the forum fix above was a firmware update. Get the current file from EG4 support for your exact hardware revision before anything else. **[VERIFY: firmware version on both of Joshua's units]**
2. **One master.** Set the Eco-Worthy DIP switches so exactly one pack is master and the rest are slaves on RS485. Any pack of another brand cannot be in that group; it has to sit in parallel on the DC bus only, which already means the BMS data the inverter would receive does not describe the whole bank.
3. **Cable.** The inverter BMS jack is RS485 on its documented cable; the battery has both CAN and RS485 jacks. You need the pinout for both ends from the two manuals and a cable made to match. Do not assume a straight Ethernet patch cable; several vendors put CAN on pins 4/5 and RS485 on 7/8 but not all, and I am not going to state Eco-Worthy's pinout from memory. Their pinout diagrams are images in the manual.
4. **Protocol.** On the battery, try the Voltronic selection first (the 3000EHV-48 lineage), then Pylontech. On the inverter, step through the lithium options in Program 05 beyond the EG4 one.
5. **Test discharge, not just display.** With comms showing, pull the AC input, put a known load on, and confirm the inverter actually inverts from battery and that programs 43/44/45 behave. Then watch a full charge to see whether the BMS-reported 100% causes a charge cutoff before the pack is balanced.
6. **Parallel inverters.** Only the master inverter should be cabled to the battery; the parallel CAN bus shares the information. **[VERIFY: whether a BMS cable is connected on Joshua's system at all, and to which inverter]**

If step 5 fails on either count, go back to User mode and stop. The gain from closed-loop on a well-set voltage system is small; the failure mode is a dark house.

## Voltage-based settings that are actually safe for 16S LiFePO4

A 48 V rack battery is 16 cells in series. Full is 3.65 V/cell (58.4 V) at the BMS protection level, but you do not want to live there. Reasonable settings, cross-checked against the EG4 manual's lithium guidance and a published inverter settings guide ([PowMr LiFePO4 charging settings](https://powmr.com/blogs/news/solar-inverter-charging-voltage-settings-guide-for-lifepo4-batteries)):

| Program | Setting | Value | Why |
|---|---|---|---|
| 05 | Battery type | User-Defined (USE) | Disables lead-acid curves and BMS dependency |
| 26 | Bulk / C.V. | 56.0–56.8 V (3.50–3.55 V/cell) | Below the 58.4 V BMS ceiling with margin for cell imbalance; EG4's own batteries use 56.2 V |
| 27 | Float | 54.0–54.4 V (3.375–3.40 V/cell) | Above resting voltage so it holds, low enough not to hammer full cells all afternoon |
| 29 | Low DC cutoff | 46.0–47.0 V (2.875–2.94 V/cell) | Well above the pack's 40 V protection floor; EG4 uses 47 V |
| 12 | Back to utility | ~48 V | Only matters with a generator or grid on AC input |
| 13 | Back to battery | ~53 V | Likewise |
| 02 | Max charge current | ≤ 0.5C of the bank, and ≤ 100 A per pack BMS | 80 A max from one inverter; two in parallel can exceed one pack's BMS if the bank is small |
| — | Equalization | Off | LiFePO4 does not equalize; this is a lead-acid feature |

Two notes. First, charge current: each inverter can push up to 80 A. With two in parallel and, say, four 100 Ah packs, that is 160 A into a 400 Ah bank (0.4C) and 40 A per pack, fine. With two packs it is 80 A per pack at the BMS limit, so cap Program 02. Second, the mixed-brand pack: set the bulk voltage to the *lower* of the two brands' recommended maximums and the cutoff to the *higher* of their minimums. The settings protect the weakest pack, not the average one.

**[VERIFY: Joshua's actual values for programs 02, 05, 26, 27, 29; number of Eco-Worthy packs and the other-brand pack's model and Ah]**

## Monitoring the BMS without closed-loop

You do not need the inverter to read the battery to see the battery. Eco-Worthy's write-up names three ways to pull BMS data: the JBD PC host software over RS232/USB, Solar Assistant on a Raspberry Pi, and Home Assistant through the BMS_BLE-HA library over Bluetooth. Solar Assistant can run the inverters as Sumry devices and the battery as a separate BMS device at the same time, which gets you cell voltages, pack temperature, and a real coulomb-counted SOC next to the inverter data. How I have that wired is in the [Solar Assistant article](/articles/eg4-3000ehv-48-parallel-solar-assistant-monitoring). **[VERIFY: whether Joshua reads the Eco-Worthy BMS in Solar Assistant and over which interface]**

Once you can see the cells, you can tune Program 26 by evidence: if the highest cell hits 3.60 V while the pack is at 56.4 V, your imbalance is 0.1 V/cell and bulk should come down. That feedback loop is worth more than any protocol handshake.

## Bottom line

- Closed-loop between an Eco-Worthy rack battery and a 3000EHV-48 is undocumented on both sides and has at least one public failure that only cleared with firmware.
- A mixed-brand bank cannot be fully represented by one BMS anyway.
- User mode at 56.0–56.8 V bulk, 54.0–54.4 V float, 46–47 V cutoff, equalization off, and charge current capped per pack is boring and correct.
- Read the BMS directly for cell data; do not route your safety through the inverter's lithium menu.

## Related

- [Running two EG4 3000EHV-48 in parallel with Solar Assistant: setup, ports, and what you can actually see](/articles/eg4-3000ehv-48-parallel-solar-assistant-monitoring)
- [Off grid power for remote work: the budget worksheet](/articles/remote-work-off-grid-power-budget)
- [Building an off grid container home in Arizona: two 40 ft high-cubes, the systems in order](/articles/container-home-off-grid-arizona-build-log)
