# Truss Load Calculator

Version: `v0.9.0`

Browser-based planning tool for truss spans, motor loads, roof-point reactions, beam-analysis support reactions, and manufacturer-table truss checks.

## Overview

This tool is a standalone browser app for entertainment rigging planning. It lets you choose a truss type and span, place motors anywhere along the truss, add weighted load blocks, and see the loading update live.

It is designed for preliminary rigging and production planning, not final engineering approval.

## Features

- Interactive truss view with draggable pickups and loads
- Arbitrary pickup-position beam analysis for support reactions
- Suspended motor load and roof-point load calculations
- Motor self weight and optional pickup hardware weight handling
- Roof-point WLL checks and motor-capacity usage bars
- Dynamic load factor with quick presets
- Truss loading checks using stored manufacturer table data with interpolation and estimated out-of-range span handling
- Center-of-gravity readout and visual marker
- Node-point collision warnings in rigging notes
- Auto spacing tools for motors:
  - use fixed spacing
  - distribute across span
  - align motors between the two end motors
- Load tools:
  - draggable and resizable load blocks
  - center load button
- Project tools:
  - project naming
  - export settings to JSON
  - import settings from JSON
  - export report data to CSV
  - print-friendly report layout
  - PDF save/export support
- Separate left-panel and report-area scrolling
- Collapsible setup panels
- Truss section join display in the truss view

## Current Release Notes

`v0.9.0` includes the current planning workflow and reporting features:

- Added Global Truss and ShowQuip truss libraries currently used in the app
- Added arbitrary pickup-position beam analysis
- Separated suspended motor load from roof-point load
- Added motor self weight and global hardware weight per pickup
- Added dynamic factor presets and factored load reporting
- Added truss build planning from stored stock lengths
- Added JSON import/export for project settings
- Added CSV export
- Added print/report layout for the center content only
- Added PDF export workflow
- Added motor auto-spacing tools and load centering
- Added usage bars, beam-analysis summaries, and rigging-note warnings
- Added more realistic truss drawing with section joins

## Included Truss Types

- Global Truss F54
- Global Truss F45
- Global Truss F35
- Global Truss F34 Black
- ShowQuip 380 Tri-Truss

## Run Locally

Open `index.html` in a web browser.

No build step or server is required.

For best results with PDF export, use an internet-connected browser session so the PDF helper libraries can load.

## Publish

Because this is a static app, it can be hosted easily on:

- GitHub Pages
- Cloudflare Pages
- Netlify

## Safety Note

This calculator is for planning only.

Always confirm final loads, support cases, point-loading conditions, and allowable spans against the exact manufacturer documentation for the truss in use, venue requirements, and a qualified rigger or engineer.
