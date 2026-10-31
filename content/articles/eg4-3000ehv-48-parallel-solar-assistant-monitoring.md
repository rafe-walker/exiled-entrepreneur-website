---
title: "Running two EG4 3000EHV-48 in parallel with Solar Assistant: setup, ports, and what you can actually see"
description: "EG4 3000EHV-48 Solar Assistant setup for two parallel inverters: which port, one cable per unit, Sumry protocol, MQTT topics, and what the data shows."
date: "2026-11-03"
updated: "2026-11-03"
category: "off-grid-power"
tags: ["eg4", "3000ehv-48", "solar-assistant", "mqtt", "parallel-inverters"]
draft: true
targetQuery: "eg4 3000ehv-48 solar assistant"
---

Solar Assistant talks to the EG4 3000EHV-48 over the inverter's RS232 port using the Voltronic/"Sumry" protocol, and in a parallel system each inverter needs its own cable back to the Raspberry Pi. That is the whole setup. The useful details are which physical port is which (the manual is inconsistent), what the parallel install needs, and what you can and cannot see once the data is flowing. This is the EG4 3000EHV-48 Solar Assistant configuration I run on two inverters in parallel, 120 V only, in a utility shed in Cochise County.

## The hardware, briefly

The 3000EHV-48 is a 3 kW all-in-one off-grid inverter-charger: 3,000 W continuous, 2× surge for 5 seconds, one MPPT rated 5,000 W PV with a 500 VDC max Voc and a 120–450 VDC MPPT window, 80 A max PV charge current, 60 A AC charge at 120 VAC, 48 V nominal battery, idle draw under 70 W, and 18 lb ([EG4 spec sheet](https://eg4electronics.com/wp-content/uploads/2024/05/EG4-3000EHV-48-Spec-Sheet.pdf)). Parallel is built in: up to 12 units single-phase, 2 × 6 split-phase, or 3 × 4 three-phase, over a CAN bus on an RJ45 port.

Mine are the older revision with physical RS232 and RS485 ports. **[VERIFY: exact model/revision label on each unit, firmware version, and whether both units are the same revision]**

### Which port is which

The V2 manual ([EG4 3000EHV-48 V2 manual](https://eg4electronics.com/wp-content/uploads/2024/04/EG4-3000EHV-48-V2-Manual.pdf)) is not internally consistent, so read it with the unit in front of you:

- **RS232** is the monitoring port. It is used for the Wi-Fi dongle and for PC software. The manual gives the connector as RJ45 in one place and ships an RJ11-to-DB9 cable, which cannot both be right for the same jack.
- **RS485** is the BMS port, for closed-loop battery communication. The spec table lists it as a USB Type A connector and the BMS cable is RJ45-to-USB-A.
- **CAN / parallel** is a separate RJ45 for the inverter-to-inverter bus.
- There is a dry contact, and the spec table says "No USB Port" while elsewhere describing a USB port for PC applications.

Solar Assistant wants the RS232 port. Do not plug anything into the RS485/BMS jack for monitoring; that jack belongs to the battery.

## EG4 3000EHV-48 Solar Assistant cable: one per inverter, into the RS232/COM port

Solar Assistant's page for this inverter lists two connection methods: an RS232 cable or a Wi-Fi dongle, and it "connects as sumry" ([Solar Assistant: EG4 3000EHV-48](https://solar-assistant.io/help/inverters/eg4/3000-EHV-48)). The RS232 page ([Solar Assistant RS232 instructions](https://solar-assistant.io/help/inverters/eg4/3000-EHV-48/rs232)) recommends a Voltronic-style USB-to-RS232 cable plugged into the port labeled "RS232" or "COM," with pinout pin 1 RX, pin 2 TX, pin 8 GND, and states directly that in a parallel installation each inverter needs its own cable.

So for two inverters: two USB serial cables into the Pi, no hub tricks needed at that count. The cable enumerates as an FTDI USB serial device; in the Solar Assistant configuration page you select "Sumry" as the inverter model, pick the FTDI port, and connect. Repeat for the second port.

The Wi-Fi dongle route works too, with Eybond, Wi-Fi Plug Pro, and other Dessmonitor/SmartESS/ShineMonitor dongles, by having Solar Assistant scan the LAN for dongles under the Sumry protocol ([Solar Assistant dongle instructions](https://solar-assistant.io/help/inverters/eg4/3000-EHV-48/eybond-sumry)). I run wired serial because the shed is the one place I do not want to depend on Wi-Fi.

**[VERIFY: exact cable(s) used (Voltronic USB-RS232 vs. homemade FTDI + RJ45), Pi model, and whether a powered USB hub is in the path]**

## Host: Raspberry Pi, SD card sizing

Solar Assistant supports Raspberry Pi 5, 4, 3, 3A+, Zero 2 W and Zero W, and the Orange Pi 3 LTS, with Docker for x86-64 hosts; it recommends a 16 GB SD card for up to 9 inverters and 8 GB minimum for one ([supported hardware](https://solar-assistant.io/help/getting-started/supported-hardware)). The license is a one-time purchase, transferable between devices you own with one active at a time; the paid-update scheme from 2024 was dropped and updates are now free ([licensing update](https://solar-assistant.io/help/updates/terms_update_oct_2024)). I am not going to quote a dollar price here because the site's own pricing page is what you should read on the day you buy.

Put the Pi on the inverter output, not on a separate battery-backed circuit, unless you want to watch it reboot every time the inverters do. The inverters' sub-70 W idle each is already the biggest parasitic load in the shed; a Pi 4 adds a few watts.

## Parallel: what the inverters need before Solar Assistant sees anything sane

Solar Assistant reads each inverter independently. It does not configure the parallel bus for you. Per the V2 manual:

- CAN cable between the parallel RJ45 ports.
- Program 28, AC output mode, set to PAL on both units for single-phase parallel (2P1/2P2 are the split-phase legs; L1/L2/L3 are three-phase).
- Program 30, PV judgment, ONE or ALL, which controls whether the system treats PV presence per-inverter or across the group.
- Output breakers sized for the combined current. The spec sheet lists no-load circulating current under 2 A between parallel units.

Both units feed a single 120 V bus into the Eaton BR panel. Split-phase would need the 2P1/2P2 modes and a 240 V panel configuration; I did not need any 240 V loads, so 120 V single-phase parallel was the simpler, lower-loss arrangement. **[VERIFY: Program 28/30 values as set, combined output breaker size, and panel main/bus rating]**

## What you can actually see

Once two Sumry devices are connected, Solar Assistant shows per-inverter and totals. From the Sumry protocol you get, per inverter:

- Load power and load percentage, output voltage and frequency.
- PV voltage and PV power (one MPPT per unit, so one string per inverter).
- Battery voltage, charge/discharge current, and inverter-estimated state of charge.
- Inverter temperature, mode (line / battery / standby / fault), fault and warning codes.
- Grid/AC input voltage and frequency, which off-grid reads as zero unless a generator is on the input.

Totals are summed across the two units. The thing to understand is that the battery numbers here are the *inverter's* view of the battery: pack voltage at the DC terminals and an SOC the inverter estimates from voltage and current. If the batteries are not talking to the inverter over the BMS port, there is no cell-level data in this path. Solar Assistant can read many BMSes directly as a separate "battery" device, which is where the real SOC, cell voltages, and temperatures come from; that is the subject of the [Eco-Worthy battery article](/articles/eco-worthy-server-rack-battery-eg4-inverter). **[VERIFY: whether the Eco-Worthy packs are connected to Solar Assistant as a separate BMS device, and over what interface]**

Settings you can change from Solar Assistant on a Sumry inverter include output source priority, charger source priority, max charge current and max AC charge current, battery cutoff/back-to-grid/back-to-battery voltages, and the time-of-use-style capacity points. Writes go one at a time and the serial line has to be quiet between them; Solar Assistant's own docs say about 14 settings take 20 to 30 seconds to apply ([Solar Assistant MQTT integration](https://solar-assistant.io/help/integration/mqtt)).

## MQTT: getting the data out

Solar Assistant runs an MQTT broker on the Pi, port 1883. Enable it under Configuration, then subscribe from anything on the LAN. Topic shapes, from the integration page:

- Read: `solar_assistant/inverter_1/load_power/state`, `solar_assistant/inverter_2/load_power/state`, and so on per metric. Values are bare numbers in the units Solar Assistant displays (W, V, A, %, °F or °C per your setting), no unit suffix.
- Write: publish to `solar_assistant/inverter_1/SETTING_NAME/set`, for example `output_source_priority/set` or `max_grid_charge_current/set`. Writes are disabled by default; enable "Allow setting changes" under MQTT Broker or you get "updates not allowed."
- Verified write: `.../set_verified` reads the value back and retries up to three times. Multi-value settings such as a whole work-mode timer row cannot be verified and must use plain `/set`.
- Responses land on `solar_assistant/set/response_message/state`.
- Home Assistant discovery can be turned on so entities auto-create; `mosquitto_sub ... | grep command_topic` lists every writable topic.

A one-liner to read current load on inverter 1:

```
mosquitto_sub -h solar-assistant.local -t 'solar_assistant/inverter_1/load_power/state' -C 1
```

If your router does mDNS, `solar-assistant.local` resolves; otherwise use the Pi's IP. There is also a REST API and a WebSocket API documented alongside MQTT, but MQTT is the one that pushes without polling.

## What I use the data for

Three things, none of them dashboards for their own sake:

1. **Nightly load floor.** Sum of both inverters' load at 3 a.m. is the parasitic baseline (inverter idle, router, satellite terminal, pump controller, fridge). It is the number that sizes battery reserve. **[VERIFY: measured 3 a.m. floor in watts]**
2. **PV string health.** Two MPPTs, two strings. A string that is 20% under its sibling on a clear noon is shading, soiling, or a connector. Per-inverter PV power makes that visible without going outside.
3. **Fault log.** Sumry fault codes show up as numbers; the manual's table maps them. Over MQTT, that becomes a push notification instead of a walk to the shed.

## What it does not do

- It does not make the two inverters share load better; the CAN bus does that.
- It does not read cell voltages through the inverter. Inverter-reported SOC drifts; treat it as approximate.
- It is not a cloud service. Remote access is your VPN or Solar Assistant's optional remote feature, not a vendor portal.
- It does not log forever at full resolution on an SD card. Export or forward over MQTT if you want long history.

If you have the older RS232/RS485 units, this is one serial cable per inverter and an afternoon. **[VERIFY: what the two cables cost]** The payoff is that two 3 kW inverters, which have one small LCD each, become one system you can see from your desk.

## Related

- [Eco-Worthy battery, EG4 inverter: closed-loop comms or voltage-based settings on a 3000EHV-48?](/articles/eco-worthy-server-rack-battery-eg4-inverter)
- [Off grid power for remote work: the budget worksheet](/articles/remote-work-off-grid-power-budget)
- [Building an off grid container home in Arizona: two 40 ft high-cubes, the systems in order](/articles/container-home-off-grid-arizona-build-log)
