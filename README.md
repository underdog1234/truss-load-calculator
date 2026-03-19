# Truss Load Calculator

Browser-based planning tool for truss spans, motor loads, roof-point reactions, and manufacturer-table truss checks.

## Overview

This tool is a standalone browser app for entertainment rigging planning. It lets you choose a truss type and span, place motors anywhere along the truss, add weighted load blocks, and see the loading update live.

It is designed for preliminary rigging and production planning, not final engineering approval.

## Features

- Interactive truss view with draggable pickups and loads
- Suspended motor load and roof-point load calculations
- Arbitrary pickup-position beam analysis
- Truss loading checks using stored manufacturer table data
- Dynamic load factor input
- Motor capacity and roof-point WLL usage readouts
- Optional pickup hardware weight
- Load readout cards and rigging notes
- CSV export
- Print-friendly report layout

## Included Truss Types

- Global Truss F54
- Global Truss F45
- Global Truss F35
- Global Truss F34 Black
- ShowQuip 380 Tri-Truss

## Run Locally

Open `index.html` in a web browser.

No build step or server is required.

## Publish

Because this is a static app, it can be hosted easily on:

- GitHub Pages
- Cloudflare Pages
- Netlify

## Safety Note

This calculator is for planning only.

Always confirm final loads, support cases, point-loading conditions, and allowable spans against the exact manufacturer documentation for the truss in use, venue requirements, and a qualified rigger or engineer.
