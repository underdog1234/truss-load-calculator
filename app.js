const TRUSS_TYPES = [
  {
    id: "global-f54",
    name: "Global Truss F54",
    selfWeightKgPerM: 14.78,
    note: "Self weight based on Global Truss F54 450 cm product data and manufacturer load table.",
    visualProfile: "box-heavy",
    nodeSpacingM: 0.5,
    segmentLengthsM: [3, 2, 1, 0.5]
  },
  {
    id: "global-f45",
    name: "Global Truss F45",
    selfWeightKgPerM: 14.22,
    note: "Self weight based on Global Truss F45 200 cm product data. Table check uses manufacturer load-table data available for this LED-focused truss.",
    visualProfile: "box-medium",
    nodeSpacingM: 0.5,
    segmentLengthsM: [3, 2, 1, 0.5]
  },
  {
    id: "global-f35",
    name: "Global Truss F35",
    selfWeightKgPerM: 11.9,
    note: "Self weight based on Global Truss F35 200 cm product data. Table check uses the manufacturer's central-bottom-chord loading data for this LED truss.",
    visualProfile: "box-light",
    nodeSpacingM: 0.5,
    segmentLengthsM: [3, 2, 1, 0.5]
  },
  {
    id: "global-f34-black",
    name: "Global Truss F34 Black",
    selfWeightKgPerM: 6.05,
    note: "Self weight based on the official Global Truss F34 Square Truss Black 3 m segment. Stored loading table uses the official F34 load-span table reduced per ANSI E1.21. Manufacturer note: loads must be attached to truss panel points.",
    visualProfile: "box-light",
    nodeSpacingM: 0.5,
    segmentLengthsM: [3, 2, 1, 0.5]
  },
  {
    id: "showquip-380-tri",
    name: "ShowQuip 380 Tri-Truss",
    selfWeightKgPerM: 7.5,
    note: "Self weight and loading table based on the ShowQuip 380 TRI-TRUSS technical specification sheet you supplied.",
    visualProfile: "tri",
    nodeSpacingM: 0.6,
    segmentLengthsM: [2.4, 1.2, 0.6]
  }
];

const state = {
  trussTypeId: TRUSS_TYPES[1].id,
  trussLengthM: 12,
  supports: [
    { id: crypto.randomUUID(), label: "Motor A", positionM: 2, capacityKg: 1000, roofPointWllKg: 1000, capacityMode: "preset", motorSelfWeightKg: 74.3 },
    { id: crypto.randomUUID(), label: "Motor B", positionM: 10, capacityKg: 1000, roofPointWllKg: 1000, capacityMode: "preset", motorSelfWeightKg: 74.3 }
  ],
  loads: [
    { id: crypto.randomUUID(), label: "LED Wall", startM: 4, widthM: 2.4, weightKg: 280, color: "#006d77" },
    { id: crypto.randomUUID(), label: "LX Bar", startM: 7, widthM: 1.8, weightKg: 180, color: "#c97f10" }
  ]
};

const MOTOR_CAPACITY_PRESETS = [
  { value: 500, label: "1/2 Tonne", motorSelfWeightKg: 49.3 },
  { value: 1000, label: "1 Tonne", motorSelfWeightKg: 74.3 }
];

const TRUSS_LOADING_TABLES = {
  "global-f54": [
    { spanM: 4, udlKgPerM: 1211, cplKg: 2419 },
    { spanM: 5, udlKgPerM: 953, cplKg: 2209 },
    { spanM: 6, udlKgPerM: 771, cplKg: 2062 },
    { spanM: 7, udlKgPerM: 596, cplKg: 1940 },
    { spanM: 8, udlKgPerM: 463, cplKg: 1834 },
    { spanM: 9, udlKgPerM: 369, cplKg: 1739 },
    { spanM: 10, udlKgPerM: 301, cplKg: 1651 },
    { spanM: 11, udlKgPerM: 250, cplKg: 1571 },
    { spanM: 12, udlKgPerM: 210, cplKg: 1496 },
    { spanM: 13, udlKgPerM: 179, cplKg: 1426 },
    { spanM: 14, udlKgPerM: 153, cplKg: 1358 },
    { spanM: 15, udlKgPerM: 132, cplKg: 1292 },
    { spanM: 16, udlKgPerM: 114, cplKg: 1228 },
    { spanM: 17, udlKgPerM: 99, cplKg: 1167 },
    { spanM: 18, udlKgPerM: 86, cplKg: 1107 },
    { spanM: 19, udlKgPerM: 75, cplKg: 1050 },
    { spanM: 20, udlKgPerM: 66, cplKg: 994 }
  ],
  "global-f45": [
    { spanM: 4, udlKgPerM: 953, cplKg: 2209 },
    { spanM: 5, udlKgPerM: 771, cplKg: 2062 },
    { spanM: 6, udlKgPerM: 614, cplKg: 1940 },
    { spanM: 7, udlKgPerM: 463, cplKg: 1834 },
    { spanM: 8, udlKgPerM: 369, cplKg: 1739 },
    { spanM: 9, udlKgPerM: 301, cplKg: 1651 },
    { spanM: 10, udlKgPerM: 250, cplKg: 1571 },
    { spanM: 11, udlKgPerM: 210, cplKg: 1496 },
    { spanM: 12, udlKgPerM: 179, cplKg: 1426 },
    { spanM: 13, udlKgPerM: 153, cplKg: 1358 },
    { spanM: 14, udlKgPerM: 132, cplKg: 1292 },
    { spanM: 15, udlKgPerM: 114, cplKg: 1228 },
    { spanM: 16, udlKgPerM: 99, cplKg: 1167 },
    { spanM: 17, udlKgPerM: 86, cplKg: 1107 },
    { spanM: 18, udlKgPerM: 75, cplKg: 1050 },
    { spanM: 19, udlKgPerM: 66, cplKg: 994 },
    { spanM: 20, udlKgPerM: 59, cplKg: 940 }
  ],
  "global-f35": [
    { spanM: 4, udlKgPerM: 934, cplKg: 1194 },
    { spanM: 5, udlKgPerM: 744, cplKg: 1051 },
    { spanM: 6, udlKgPerM: 620, cplKg: 948 },
    { spanM: 7, udlKgPerM: 490, cplKg: 868 },
    { spanM: 8, udlKgPerM: 374, cplKg: 804 },
    { spanM: 9, udlKgPerM: 295, cplKg: 750 },
    { spanM: 10, udlKgPerM: 238, cplKg: 706 },
    { spanM: 11, udlKgPerM: 195, cplKg: 668 },
    { spanM: 12, udlKgPerM: 163, cplKg: 635 },
    { spanM: 13, udlKgPerM: 138, cplKg: 605 },
    { spanM: 14, udlKgPerM: 118, cplKg: 578 },
    { spanM: 15, udlKgPerM: 103, cplKg: 553 },
    { spanM: 16, udlKgPerM: 90, cplKg: 531 },
    { spanM: 17, udlKgPerM: 79, cplKg: 510 },
    { spanM: 18, udlKgPerM: 70, cplKg: 491 },
    { spanM: 19, udlKgPerM: 63, cplKg: 473 },
    { spanM: 20, udlKgPerM: 56, cplKg: 456 }
  ],
  "global-f34-black": [
    { spanM: 2.0, udlKgPerM: 342.3, cplKg: 617.0 },
    { spanM: 2.5, udlKgPerM: 300.6, cplKg: 573.8 },
    { spanM: 3.0, udlKgPerM: 259.0, cplKg: 530.7 },
    { spanM: 3.5, udlKgPerM: 218.8, cplKg: 487.6 },
    { spanM: 4.0, udlKgPerM: 177.1, cplKg: 444.5 },
    { spanM: 4.5, udlKgPerM: 159.2, cplKg: 410.5 },
    { spanM: 5.0, udlKgPerM: 139.9, cplKg: 376.5 },
    { spanM: 5.5, udlKgPerM: 122.0, cplKg: 342.5 },
    { spanM: 6.0, udlKgPerM: 104.2, cplKg: 308.4 },
    { spanM: 6.5, udlKgPerM: 90.8, cplKg: 290.3 },
    { spanM: 7.0, udlKgPerM: 78.9, cplKg: 269.9 },
    { spanM: 7.5, udlKgPerM: 67.0, cplKg: 251.7 },
    { spanM: 8.0, udlKgPerM: 55.1, cplKg: 231.3 },
    { spanM: 8.5, udlKgPerM: 49.1, cplKg: 219.5 },
    { spanM: 9.0, udlKgPerM: 44.6, cplKg: 208.7 },
    { spanM: 9.5, udlKgPerM: 40.2, cplKg: 197.3 },
    { spanM: 10.0, udlKgPerM: 35.7, cplKg: 186.0 },
    { spanM: 10.5, udlKgPerM: 32.7, cplKg: 176.9 },
    { spanM: 11.0, udlKgPerM: 29.8, cplKg: 170.1 },
    { spanM: 11.5, udlKgPerM: 28.3, cplKg: 163.3 },
    { spanM: 12.0, udlKgPerM: 25.3, cplKg: 154.2 }
  ],
  "showquip-380-tri": [
    { spanM: 4.8, udlKgPerM: 417, cplKg: 1000 },
    { spanM: 6.0, udlKgPerM: 282, cplKg: 850 },
    { spanM: 7.2, udlKgPerM: 196, cplKg: 705 },
    { spanM: 8.4, udlKgPerM: 144, cplKg: 605 },
    { spanM: 9.6, udlKgPerM: 110, cplKg: 525 },
    { spanM: 10.8, udlKgPerM: 87, cplKg: 465 },
    { spanM: 12.0, udlKgPerM: 65, cplKg: 420 },
    { spanM: 13.2, udlKgPerM: 47, cplKg: 380 },
    { spanM: 14.4, udlKgPerM: 34, cplKg: 310 },
    { spanM: 15.6, udlKgPerM: 25, cplKg: 245 },
    { spanM: 16.8, udlKgPerM: 19, cplKg: 195 },
    { spanM: 18.0, udlKgPerM: 14, cplKg: 155 }
  ]
};

const refs = {};
const dragState = { active: null };
let motorSpacingM = 4;
let globalRoofPointWllKg = 1000;
let includeHardwareWeight = true;
let hardwareWeightPerPickupKg = 8;
let dynamicLoadFactor = 1;
let projectName = "Untitled Project";
const PIECE_LENGTH_SCALE = 100;

document.addEventListener("DOMContentLoaded", () => {
  cacheRefs();
  populateTrussTypes();
  bindPanelToggles();
  bindTopLevelEvents();
  render();
});

function cacheRefs() {
  refs.projectName = document.getElementById("projectName");
  refs.projectTitle = document.getElementById("projectTitle");
  refs.trussType = document.getElementById("trussType");
  refs.trussLength = document.getElementById("trussLength");
  refs.globalRoofPointWll = document.getElementById("globalRoofPointWll");
  refs.includeHardwareWeight = document.getElementById("includeHardwareWeight");
  refs.hardwareWeightPerPickup = document.getElementById("hardwareWeightPerPickup");
  refs.dynamicLoadFactor = document.getElementById("dynamicLoadFactor");
  refs.dynamicPresetGroup = document.getElementById("dynamicPresetGroup");
  refs.supportsList = document.getElementById("supportsList");
  refs.loadsList = document.getElementById("loadsList");
  refs.addSupportBtn = document.getElementById("addSupportBtn");
  refs.applyGlobalWllBtn = document.getElementById("applyGlobalWllBtn");
  refs.clearSupportsBtn = document.getElementById("clearSupportsBtn");
  refs.addLoadBtn = document.getElementById("addLoadBtn");
  refs.clearLoadsBtn = document.getElementById("clearLoadsBtn");
  refs.trussSvg = document.getElementById("trussSvg");
  refs.summaryCards = document.getElementById("summaryCards");
  refs.warningsList = document.getElementById("warningsList");
  refs.trussSelfWeight = document.getElementById("trussSelfWeight");
  refs.appliedWeight = document.getElementById("appliedWeight");
  refs.totalWeight = document.getElementById("totalWeight");
  refs.factoredTotalWeight = document.getElementById("factoredTotalWeight");
  refs.dynamicFactorReadout = document.getElementById("dynamicFactorReadout");
  refs.centerOfGravity = document.getElementById("centerOfGravity");
  refs.motorSpacing = document.getElementById("motorSpacing");
  refs.spacingDistributeBtn = document.getElementById("spacingDistributeBtn");
  refs.spanDistributeBtn = document.getElementById("spanDistributeBtn");
  refs.betweenDistributeBtn = document.getElementById("betweenDistributeBtn");
  refs.clearAllBtn = document.getElementById("clearAllBtn");
  refs.exportBtn = document.getElementById("exportBtn");
  refs.exportSettingsBtn = document.getElementById("exportSettingsBtn");
  refs.importSettingsBtn = document.getElementById("importSettingsBtn");
  refs.importSettingsFile = document.getElementById("importSettingsFile");
  refs.savePdfBtn = document.getElementById("savePdfBtn");
  refs.printBtn = document.getElementById("printBtn");
}

function populateTrussTypes() {
  refs.projectName.value = projectName;
  refs.trussType.innerHTML = TRUSS_TYPES.map((type) => (
    `<option value="${type.id}">${type.name}</option>`
  )).join("");
  refs.trussType.value = state.trussTypeId;
  refs.trussLength.value = formatEditableNumber(state.trussLengthM);
  refs.globalRoofPointWll.value = formatEditableNumber(globalRoofPointWllKg);
  refs.includeHardwareWeight.checked = includeHardwareWeight;
  refs.hardwareWeightPerPickup.value = formatEditableNumber(hardwareWeightPerPickupKg);
  refs.dynamicLoadFactor.value = formatFixedEditableNumber(dynamicLoadFactor, 2);
  refs.motorSpacing.value = String(motorSpacingM);
}

function bindPanelToggles() {
  document.querySelectorAll(".collapsible-panel [data-panel-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const panel = toggle.closest(".collapsible-panel");
      if (!panel) return;
      panel.classList.toggle("is-collapsed");
    });
  });
}

function bindTopLevelEvents() {
  refs.projectName.addEventListener("input", (event) => {
    projectName = event.target.value.trim() || "Untitled Project";
    document.title = `${projectName} - Truss Load Calculator`;
    render();
  });

  refs.trussType.addEventListener("change", (event) => {
    state.trussTypeId = event.target.value;
    render();
  });

  refs.trussLength.addEventListener("input", (event) => {
    state.trussLengthM = clampNumber(parseDecimalInput(event.target.value, state.trussLengthM), 1, 100);
    normalizePositions();
    render();
  });

  refs.globalRoofPointWll.addEventListener("input", (event) => {
    globalRoofPointWllKg = clampNumber(parseDecimalInput(event.target.value, globalRoofPointWllKg), 0.01, 1000000000);
  });

  refs.includeHardwareWeight.addEventListener("input", (event) => {
    includeHardwareWeight = event.target.checked;
    render();
  });

  refs.hardwareWeightPerPickup.addEventListener("input", (event) => {
    hardwareWeightPerPickupKg = clampNumber(parseDecimalInput(event.target.value, hardwareWeightPerPickupKg), 0, 1000000000);
    render();
  });

  refs.dynamicLoadFactor.addEventListener("input", (event) => {
    dynamicLoadFactor = clampNumber(parseDecimalInput(event.target.value, dynamicLoadFactor), 1, 10);
    render();
  });

  refs.dynamicPresetGroup.querySelectorAll("[data-dynamic-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      dynamicLoadFactor = clampNumber(parseDecimalInput(button.getAttribute("data-dynamic-preset"), dynamicLoadFactor), 1, 10);
      refs.dynamicLoadFactor.value = formatFixedEditableNumber(dynamicLoadFactor, 2);
      render();
    });
  });

  refs.addSupportBtn.addEventListener("click", () => {
    const count = state.supports.length;
    const defaultPosition = count
      ? clampNumber((count * state.trussLengthM) / (count + 1), 0, state.trussLengthM)
      : state.trussLengthM / 2;

    state.supports.push({
      id: crypto.randomUUID(),
      label: `Motor ${String.fromCharCode(65 + count)}`,
      positionM: Number(defaultPosition.toFixed(2)),
      capacityKg: 1000,
      roofPointWllKg: globalRoofPointWllKg,
      capacityMode: "preset",
      motorSelfWeightKg: 74.3
    });
    render();
  });

  refs.clearSupportsBtn.addEventListener("click", () => {
    state.supports = [];
    render();
  });

  refs.applyGlobalWllBtn.addEventListener("click", () => {
    state.supports = state.supports.map((support) => ({
      ...support,
      roofPointWllKg: globalRoofPointWllKg
    }));
    render();
  });

  refs.addLoadBtn.addEventListener("click", () => {
    state.loads.push({
      id: crypto.randomUUID(),
      label: `Load ${state.loads.length + 1}`,
      startM: Number(Math.max(0, state.trussLengthM / 2 - 0.75).toFixed(2)),
      widthM: Number(Math.min(1.5, state.trussLengthM).toFixed(2)),
      weightKg: 100,
      color: pickLoadColor(state.loads.length)
    });
    normalizePositions();
    render();
  });

  refs.clearLoadsBtn.addEventListener("click", () => {
    state.loads = [];
    render();
  });

  refs.motorSpacing.addEventListener("input", (event) => {
    motorSpacingM = clampNumber(parseDecimalInput(event.target.value, motorSpacingM), 0.1, 100);
  });

  refs.spacingDistributeBtn.addEventListener("click", () => {
    distributeSupportsBySpacing();
    render();
  });

  refs.spanDistributeBtn.addEventListener("click", () => {
    distributeSupportsAcrossSpan();
    render();
  });

  refs.betweenDistributeBtn.addEventListener("click", () => {
    distributeSupportsBetweenEnds();
    render();
  });

  refs.clearAllBtn.addEventListener("click", () => {
    clearAllData();
    render();
  });

  refs.exportBtn.addEventListener("click", () => {
    exportCsv();
  });

  refs.exportSettingsBtn.addEventListener("click", () => {
    exportSettings();
  });

  refs.importSettingsBtn.addEventListener("click", () => {
    refs.importSettingsFile.click();
  });

  refs.importSettingsFile.addEventListener("change", importSettings);

  refs.savePdfBtn.addEventListener("click", () => {
    savePdfReport();
  });

  refs.printBtn.addEventListener("click", () => {
    window.print();
  });

  refs.trussSvg.addEventListener("pointermove", onPointerMove);
  refs.trussSvg.addEventListener("pointerup", stopDragging);
  refs.trussSvg.addEventListener("pointerleave", stopDragging);
}

function render() {
  const focusState = captureFocusState();
  normalizePositions();
  const results = calculateResults();
  renderSupports(results);
  renderLoads(results);
  renderSummary(results);
  renderWarnings(results);
  renderSvg(results);
  restoreFocusState(focusState);
}

function captureFocusState() {
  const active = document.activeElement;
  if (!active || !(active instanceof HTMLInputElement || active instanceof HTMLSelectElement || active instanceof HTMLTextAreaElement)) {
    return null;
  }

  const marker = getFocusMarker(active);
  if (!marker) return null;

  return {
    ...marker,
    value: active.value,
    selectionStart: "selectionStart" in active ? active.selectionStart : null,
    selectionEnd: "selectionEnd" in active ? active.selectionEnd : null
  };
}

function restoreFocusState(focusState) {
  if (!focusState) return;
  const target = findElementFromMarker(focusState);
  if (!target) return;
  target.focus();

  if (
    target instanceof HTMLInputElement &&
    target.type !== "number" &&
    focusState.selectionStart !== null &&
    focusState.selectionEnd !== null
  ) {
    target.setSelectionRange(focusState.selectionStart, focusState.selectionEnd);
  }
}

function getFocusMarker(element) {
  if (element.id) {
    return { kind: "id", id: element.id };
  }

  const supportId = element.getAttribute("data-support-id");
  const loadId = element.getAttribute("data-load-id");
  const field = element.getAttribute("data-field");

  if (supportId && field) {
    return { kind: "support", id: supportId, field };
  }

  if (loadId && field) {
    return { kind: "load", id: loadId, field };
  }

  return null;
}

function findElementFromMarker(marker) {
  if (marker.kind === "id") {
    return document.getElementById(marker.id);
  }

  if (marker.kind === "support") {
    return document.querySelector(`[data-support-id="${marker.id}"][data-field="${marker.field}"]`);
  }

  if (marker.kind === "load") {
    return document.querySelector(`[data-load-id="${marker.id}"][data-field="${marker.field}"]`);
  }

  return null;
}

function normalizePositions() {
  state.supports.forEach((support) => {
    support.positionM = clampNumber(support.positionM, 0, state.trussLengthM);
    support.capacityKg = clampNumber(support.capacityKg, 0.01, 1000000000);
    support.roofPointWllKg = clampNumber(support.roofPointWllKg, 0.01, 1000000000);
    support.motorSelfWeightKg = clampNumber(support.motorSelfWeightKg ?? 0, 0, 1000000000);
    if (!support.capacityMode) {
      support.capacityMode = MOTOR_CAPACITY_PRESETS.some((preset) => preset.value === support.capacityKg) ? "preset" : "custom";
    }
  });

  state.loads.forEach((load) => {
    load.widthM = clampNumber(load.widthM, 0.1, state.trussLengthM || 0.1);
    load.startM = clampNumber(load.startM, 0, Math.max(0, state.trussLengthM - load.widthM));
    load.weightKg = clampNumber(load.weightKg, 0, 100000);
  });
}

function distributeSupportsBySpacing() {
  const count = state.supports.length;
  if (!count) return;

  if (count === 1) {
    state.supports[0].positionM = Number((state.trussLengthM / 2).toFixed(2));
    return;
  }

  const spacing = clampNumber(Number(refs.motorSpacing.value || motorSpacingM), 0.1, state.trussLengthM);
  motorSpacingM = spacing;
  const totalSpread = spacing * (count - 1);

  if (totalSpread >= state.trussLengthM) {
    state.supports = state.supports.map((support, index) => ({
      ...support,
      positionM: Number((((index + 1) * state.trussLengthM) / (count + 1)).toFixed(2))
    }));
    return;
  }

  const start = (state.trussLengthM - totalSpread) / 2;
  state.supports = state.supports.map((support, index) => ({
    ...support,
    positionM: Number((start + index * spacing).toFixed(2))
  }));
}

function distributeSupportsAcrossSpan() {
  const count = state.supports.length;
  if (!count) return;

  if (count === 1) {
    state.supports[0].positionM = Number((state.trussLengthM / 2).toFixed(2));
    return;
  }

  const edgeInset = Math.min(Math.max(state.trussLengthM * 0.01, 0.1), Math.max(state.trussLengthM / 10, 0.1));
  const usableSpan = Math.max(state.trussLengthM - edgeInset * 2, 0);

  state.supports = state.supports.map((support, index) => ({
    ...support,
    positionM: Number((edgeInset + (usableSpan * index) / Math.max(count - 1, 1)).toFixed(2))
  }));
}

function distributeSupportsBetweenEnds() {
  const count = state.supports.length;
  if (count < 3) return;

  const sortedSupports = [...state.supports].sort((a, b) => a.positionM - b.positionM);
  const leftPositionM = sortedSupports[0].positionM;
  const rightPositionM = sortedSupports[sortedSupports.length - 1].positionM;
  const usableSpanM = rightPositionM - leftPositionM;
  if (usableSpanM <= 0) return;

  sortedSupports.forEach((support, index) => {
    support.positionM = Number((leftPositionM + (usableSpanM * index) / Math.max(count - 1, 1)).toFixed(2));
  });
  state.supports = sortedSupports;
}

function clearAllData() {
  state.supports = [];
  state.loads = [];
  refs.motorSpacing.value = formatEditableNumber(motorSpacingM);
  refs.globalRoofPointWll.value = formatEditableNumber(globalRoofPointWllKg);
  refs.dynamicLoadFactor.value = formatFixedEditableNumber(dynamicLoadFactor, 2);
}

function exportCsv() {
  const results = calculateResults();
  const lines = [
    ["Section", "Name", "Value 1", "Value 2", "Value 3", "Value 4"],
    ["Setup", "Truss Type", getCurrentTrussType().name, "", "", ""],
    ["Setup", "Truss Length (m)", state.trussLengthM.toFixed(2), "", "", ""],
    ["Setup", "Global Roof Point WLL (kg)", globalRoofPointWllKg.toFixed(2), "", "", ""],
    ["Setup", "Hardware Weight Enabled", includeHardwareWeight ? "Yes" : "No", "", "", ""],
    ["Setup", "Hardware Weight Per Pickup (kg)", hardwareWeightPerPickupKg.toFixed(2), "", "", ""],
    ["Setup", "Dynamic Load Factor", dynamicLoadFactor.toFixed(2), "", "", ""],
    ["Summary", "Self Weight (kg)", results.trussSelfWeightKg.toFixed(2), "", "", ""],
    ["Summary", "Applied Load (kg)", results.appliedLoadKg.toFixed(2), "", "", ""],
    ["Summary", "Total Load (kg)", results.totalLoadKg.toFixed(2), "", "", ""],
    ["Summary", "Factored Total (kg)", results.factoredTotalLoadKg.toFixed(2), "", "", ""],
    ["Summary", "Center Of Gravity (m)", results.totalCogM.toFixed(2), "", "", ""],
    ["", "", "", "", "", ""],
    ["Pickups", "Label", "Position (m)", "Motor Size (kg)", "Motor Self Weight (kg)", "Hardware Enabled", "Hardware Weight (kg)", "Roof Point WLL (kg)", "Suspended Load (kg)", "Roof Point Load (kg)"],
    ...results.supports.map((support) => [
      "Pickup",
      support.label,
      support.positionM.toFixed(2),
      support.capacityKg.toFixed(2),
      support.motorSelfWeightKg.toFixed(2),
      includeHardwareWeight ? "Yes" : "No",
      support.hardwareLoadKg.toFixed(2),
      support.roofPointWllKg.toFixed(2),
      support.suspendedLoadKg.toFixed(2),
      support.roofPointLoadKg.toFixed(2)
    ]),
    ["", "", "", "", "", ""],
    ["Loads", "Label", "Weight (kg)", "Factored Weight (kg)", "Start (m)", "Width (m)"],
    ...results.loads.map((load) => [
      "Load",
      load.label,
      load.weightKg.toFixed(2),
      load.dynamicWeightKg.toFixed(2),
      load.startM.toFixed(2),
      load.widthM.toFixed(2)
    ])
  ];

  const csv = lines.map((line) => line.map(escapeCsv).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "truss-load-plan.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportSettings() {
  const payload = {
    version: 1,
    projectName,
    trussTypeId: state.trussTypeId,
    trussLengthM: state.trussLengthM,
    motorSpacingM,
    globalRoofPointWllKg,
    includeHardwareWeight,
    hardwareWeightPerPickupKg,
    dynamicLoadFactor,
    supports: state.supports,
    loads: state.loads
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(projectName)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  alert("Project settings exported as JSON.");
}

function importSettings(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      projectName = String(payload.projectName || "Untitled Project");
      state.trussTypeId = payload.trussTypeId || state.trussTypeId;
      state.trussLengthM = clampNumber(Number(payload.trussLengthM) || state.trussLengthM, 1, 100);
      motorSpacingM = clampNumber(Number(payload.motorSpacingM) || motorSpacingM, 0.1, 100);
      globalRoofPointWllKg = clampNumber(Number(payload.globalRoofPointWllKg) || globalRoofPointWllKg, 0.01, 1000000000);
      includeHardwareWeight = payload.includeHardwareWeight !== undefined ? Boolean(payload.includeHardwareWeight) : includeHardwareWeight;
      hardwareWeightPerPickupKg = clampNumber(Number(payload.hardwareWeightPerPickupKg) || hardwareWeightPerPickupKg, 0, 1000000000);
      dynamicLoadFactor = clampNumber(Number(payload.dynamicLoadFactor) || dynamicLoadFactor, 1, 10);
      state.supports = Array.isArray(payload.supports) ? payload.supports : [];
      state.loads = Array.isArray(payload.loads) ? payload.loads : [];
      document.title = `${projectName} - Truss Load Calculator`;
      refs.importSettingsFile.value = "";
      populateTrussTypes();
      render();
      alert("Project settings imported.");
    } catch (error) {
      alert("Could not import settings file. Please choose a valid project JSON file.");
      refs.importSettingsFile.value = "";
    }
  };
  reader.readAsText(file);
}

async function savePdfReport() {
  const { jsPDF } = window.jspdf || {};
  if (!window.html2canvas || !jsPDF) {
    alert("PDF export library is not available. Please check your internet connection and try again.");
    return;
  }

  const mainContent = document.querySelector(".main");
  if (!mainContent) {
    alert("Could not find the report content to export.");
    return;
  }

  const originalScrollTop = mainContent.scrollTop;
  mainContent.scrollTop = 0;

  try {
    const canvas = await window.html2canvas(mainContent, {
      backgroundColor: "#0b1220",
      scale: 2,
      useCORS: true,
      windowWidth: document.documentElement.scrollWidth
    });

    const imageData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imageWidth = pageWidth - 16;
    const imageHeight = (canvas.height * imageWidth) / canvas.width;

    let remainingHeight = imageHeight;
    let positionY = 8;

    pdf.addImage(imageData, "PNG", 8, positionY, imageWidth, imageHeight);
    remainingHeight -= (pageHeight - 16);

    while (remainingHeight > 0) {
      pdf.addPage();
      positionY = 8 - (imageHeight - remainingHeight);
      pdf.addImage(imageData, "PNG", 8, positionY, imageWidth, imageHeight);
      remainingHeight -= (pageHeight - 16);
    }

    pdf.save(`${slugify(projectName)}.pdf`);
  } catch (error) {
    alert("Could not save PDF report. Please try again.");
  } finally {
    mainContent.scrollTop = originalScrollTop;
  }
}

function renderSupports(results) {
  refs.supportsList.innerHTML = results.supports.map((support, index) => {
    const isCustomCapacity = support.capacityMode === "custom";
    const capacityOptions = [
      ...MOTOR_CAPACITY_PRESETS.map((preset) => `
        <option value="${preset.value}" ${support.capacityKg === preset.value ? "selected" : ""}>${preset.label}</option>
      `),
      `<option value="custom" ${isCustomCapacity ? "selected" : ""}>Custom</option>`
    ].join("");

    const usageClass = support.usagePercent > 100 || support.roofUsagePercent > 100
      ? "warn"
      : support.usagePercent > 85 || support.roofUsagePercent > 85
        ? "warning"
        : "ok";

    return `
      <div class="card">
        <div class="card-title-row">
          <strong>${escapeHtml(support.label)}</strong>
          <button class="ghost" type="button" data-action="remove-support" data-support-id="${support.id}" ${state.supports.length <= 2 ? "disabled" : ""}>Remove</button>
        </div>
        <div class="card-header">
          <label>
            Name
            <input data-field="label" data-support-id="${support.id}" value="${escapeHtml(support.label)}">
          </label>
          <label>
            Position (m)
            <input data-field="positionM" data-support-id="${support.id}" type="text" inputmode="decimal" value="${formatEditableNumber(support.positionM)}">
          </label>
        </div>
        <div class="inline-fields">
          <label>
            Motor Size
            <select data-field="capacityPreset" data-support-id="${support.id}">
              ${capacityOptions}
            </select>
          </label>
          <label>
            Roof Point WLL (kg)
            <input data-field="roofPointWllKg" data-support-id="${support.id}" type="text" inputmode="decimal" value="${formatEditableNumber(support.roofPointWllKg)}">
          </label>
        </div>
        <label>
          Motor Self Weight (kg)
          <input data-field="motorSelfWeightKg" data-support-id="${support.id}" type="text" inputmode="decimal" value="${formatEditableNumber(support.motorSelfWeightKg)}">
        </label>
        ${isCustomCapacity ? `
          <label>
            Custom Motor Size (kg)
            <input data-field="capacityKg" data-support-id="${support.id}" type="text" inputmode="decimal" value="${formatEditableNumber(support.capacityKg)}">
          </label>
        ` : ""}
        <p class="support-readout small">
          Pickup ${index + 1} suspended load on motor: <strong>${formatKg(support.suspendedLoadKg)}</strong>
          <span class="pill ${usageClass}">${support.usagePercent.toFixed(1)}% motor</span>
        </p>
        <p class="support-readout small">
          Roof point load incl. motor and setup hardware weight: <strong>${formatKg(support.roofPointLoadKg)}</strong>
          <span class="pill ${usageClass}">${support.roofUsagePercent.toFixed(1)}% roof point</span>
        </p>
      </div>
    `;
  }).join("");

  refs.supportsList.querySelectorAll("input, select").forEach((input) => input.addEventListener("input", onSupportInput));
  refs.supportsList.querySelectorAll("[data-action='remove-support']").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-support-id");
      if (state.supports.length > 2) {
        state.supports = state.supports.filter((support) => support.id !== id);
        render();
      }
    });
  });
}

function renderLoads(results) {
  refs.loadsList.innerHTML = results.loads.map((load) => `
    <div class="card">
      <div class="card-title-row">
        <strong>${escapeHtml(load.label)}</strong>
        <div class="button-group">
          <button class="secondary" type="button" data-action="center-load" data-load-id="${load.id}">Center Load</button>
          <button class="ghost" type="button" data-action="remove-load" data-load-id="${load.id}">Remove</button>
        </div>
      </div>
      <div class="card-header">
        <label>
          Name
          <input data-field="label" data-load-id="${load.id}" value="${escapeHtml(load.label)}">
        </label>
        <label>
          Weight (kg)
          <input data-field="weightKg" data-load-id="${load.id}" type="text" inputmode="decimal" value="${formatEditableNumber(load.weightKg)}">
        </label>
      </div>
      <div class="inline-fields">
        <label>
          Start (m)
          <input data-field="startM" data-load-id="${load.id}" type="text" inputmode="decimal" value="${formatFixedEditableNumber(load.startM, 2)}">
        </label>
        <label>
          Width (m)
          <input data-field="widthM" data-load-id="${load.id}" type="text" inputmode="decimal" value="${formatFixedEditableNumber(load.widthM, 2)}">
        </label>
      </div>
      <p class="load-readout small">
        Equivalent center at <strong>${load.centerM.toFixed(2)} m</strong>. Drag the block in the diagram to reposition it live.
      </p>
    </div>
  `).join("");

  refs.loadsList.querySelectorAll("input").forEach((input) => input.addEventListener("input", onLoadInput));
  refs.loadsList.querySelectorAll("[data-action='remove-load']").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-load-id");
      state.loads = state.loads.filter((load) => load.id !== id);
      render();
    });
  });
  refs.loadsList.querySelectorAll("[data-action='center-load']").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-load-id");
      const load = state.loads.find((item) => item.id === id);
      if (!load) return;
      load.startM = Number((Math.max(0, state.trussLengthM - load.widthM) / 2).toFixed(2));
      render();
    });
  });
}

function renderSummary(results) {
  refs.projectTitle.textContent = projectName;
  refs.trussSelfWeight.textContent = formatKg(results.trussSelfWeightKg);
  refs.appliedWeight.textContent = formatKg(results.appliedLoadKg);
  refs.totalWeight.textContent = formatKg(results.totalLoadKg);
  refs.factoredTotalWeight.textContent = formatKg(results.factoredTotalLoadKg);
  refs.dynamicFactorReadout.textContent = `${results.dynamicLoadFactor.toFixed(2)} x`;
  refs.centerOfGravity.textContent = `${results.totalCogM.toFixed(2)} m`;
  const beamSummary = buildBeamAnalysisSummary(results);

  const beamAnalysisCard = `
    <div class="summary-card ${beamSummary.className}">
      <h3>Beam Analysis</h3>
      <div class="summary-stat">${beamSummary.status}</div>
      ${beamSummary.lines.map((line) => `<p class="small">${escapeHtml(line)}</p>`).join("")}
    </div>
  `;

  const manufacturerCardClass = results.trussCheck.status === "over" ? "warn" : results.trussCheck.status === "warning" ? "warn" : "ok";
  const trussCheckUsage = results.trussCheck.status === "unsupported"
    ? "N/A"
    : `${Math.max(
      results.trussCheck.udlUsagePercent || 0,
      results.trussCheck.cplUsagePercent || 0,
      results.trussCheck.momentUsagePercent || 0,
      results.trussCheck.shearUsagePercent || 0
    ).toFixed(1)}%`;
  const trussCheckCard = `
    <div class="summary-card ${manufacturerCardClass}">
      <h3>Truss Loadings</h3>
      <div class="summary-stat">${trussCheckUsage}</div>
      <p class="small">${escapeHtml(results.trussCheck.summary)}</p>
      ${results.trussCheck.status === "unsupported" ? `
        <p class="small">${escapeHtml(results.trussCheck.details)}</p>
      ` : results.trussCheck.mode === "exact-table" ? `
        <p class="small">Mode: exact published row</p>
        <p class="small">Factored added load vs UDL: ${results.trussCheck.factoredAddedLoadKg.toFixed(2)} / ${results.trussCheck.allowableUdlTotalKg.toFixed(2)} kg</p>
        <p class="small">Largest single factored load vs CPL: ${results.trussCheck.maxSingleFactoredLoadKg.toFixed(2)} / ${results.trussCheck.allowableCplKg.toFixed(2)} kg</p>
      ` : `
        <p class="small">Mode: conservative table-derived beam envelope</p>
        <p class="small">Peak moment vs allowable: ${results.trussCheck.peakMomentKgM.toFixed(2)} / ${results.trussCheck.allowableMomentKgM.toFixed(2)} kg*m</p>
        <p class="small">Peak shear vs allowable: ${results.trussCheck.peakShearKg.toFixed(2)} / ${results.trussCheck.allowableShearKg.toFixed(2)} kg</p>
      `}
    </div>
  `;

  refs.summaryCards.innerHTML = beamAnalysisCard + trussCheckCard + results.supports.map((support) => {
    const className = support.usagePercent > 100 || support.roofUsagePercent > 100 ? "warn" : "ok";
    const motorUsagePercent = clampNumber(support.usagePercent, 0, 140);
    const roofUsagePercent = clampNumber(support.roofUsagePercent, 0, 140);
    return `
      <div class="summary-card ${className}">
        <h3>${escapeHtml(support.label)}</h3>
        <div class="summary-stat">${formatKg(support.suspendedLoadKg)}</div>
        <p class="small">Suspended load on motor: ${formatKg(support.suspendedLoadKg)}</p>
        <p class="small">Roof point load: ${formatKg(support.roofPointLoadKg)}</p>
        <p class="small">Motor self weight: ${formatKg(support.motorSelfWeightKg)}</p>
        <p class="small">Motor usage: ${support.usagePercent.toFixed(1)}%</p>
        <div class="usage-bar">
          <div class="usage-bar-fill ${support.usagePercent > 100 ? "over" : support.usagePercent > 85 ? "near" : ""}" style="width: ${motorUsagePercent}%"></div>
        </div>
        <p class="small">Roof point usage: ${support.roofUsagePercent.toFixed(1)}%</p>
        <div class="usage-bar roof">
          <div class="usage-bar-fill ${support.roofUsagePercent > 100 ? "over" : support.roofUsagePercent > 85 ? "near" : ""}" style="width: ${roofUsagePercent}%"></div>
        </div>
        <p class="small">Position: ${support.positionM.toFixed(2)} m</p>
      </div>
    `;
  }).join("");
}

function buildBeamAnalysisSummary(results) {
  const negativeSupports = results.supports.filter((support) => support.rawReactionKg < -0.01);
  const maxReactionKg = results.supports.reduce((max, support) => Math.max(max, support.suspendedLoadKg), 0);

  if (results.supportAnalysis.model !== "continuous-beam") {
    return {
      className: "warn",
      status: "Fallback",
      lines: [
        "Beam solver fallback was used.",
        results.supportAnalysis.summary,
        `Pickups analysed: ${results.supports.length}`
      ]
    };
  }

  if (negativeSupports.length) {
    return {
      className: "warn",
      status: `${negativeSupports.length} issue${negativeSupports.length === 1 ? "" : "s"}`,
      lines: [
        `${negativeSupports.length} pickup reaction went negative.`,
        `${negativeSupports[0].label}: ${negativeSupports[0].rawReactionKg.toFixed(2)} kg reaction.`,
        `Highest suspended pickup load: ${formatKg(maxReactionKg)}`
      ]
    };
  }

  return {
    className: "ok",
    status: "Clear",
    lines: [
      `Pickups analysed: ${results.supports.length}`,
      `Highest suspended pickup load: ${formatKg(maxReactionKg)}`,
      "No negative pickup reactions detected."
    ]
  };
}

function renderWarnings(results) {
  const type = TRUSS_TYPES.find((item) => item.id === state.trussTypeId);
  const notes = [
    { level: "info", text: type.note },
    {
      level: "info",
      text: "Calculation method: support reactions are calculated with a continuous-beam model, so arbitrary pickup counts and pickup positions can be analysed for planning. This is still not a substitute for a truss manufacturer's published loading case or a signed engineering check."
    },
    {
      level: "info",
      text: "Truss-capacity check now has two modes: an exact published-row check for simple end-supported spans, and a conservative table-derived beam-envelope check for arbitrary pickup layouts."
    },
    {
      level: "info",
      text: `Dynamic load factor: ${dynamicLoadFactor.toFixed(2)}x. This calculator applies it as a simple planning multiplier to the suspended load, not as a full motion, shock, or control-system analysis.`
    },
    {
      level: "info",
      text: "Reference note: the warning logic and planning assumptions follow common entertainment-rigging guidance, but the exact allowable load still comes from the specific manufacturer load table and published support case."
    },
    {
      level: "info",
      text: "Each pickup is treated as a direct motor-to-roof connection. Suspended load on the motor comes from truss self weight plus attached loads, while roof point load adds the motor's own self weight on top of that."
    },
    {
      level: "info",
      text: "Current best-practice planning assumption in this tool: truss self weight is distributed through the pickups, hoist dead weight is added to the roof point side, and optional setup hardware weight per pickup can be included globally. Other items like bridles or secondary structures still need separate modelling."
    },
    {
      level: results.trussBuildPlan.isExact ? "info" : "warning",
      text: results.trussBuildPlan.summary
    },
    {
      level: results.trussBuildPlan.isExact ? "info" : "warning",
      text: results.trussBuildPlan.parts.length
        ? `Truss pieces: ${results.trussBuildPlan.parts.map((part) => `${part.lengthM.toFixed(2)} m`).join(" + ")}`
        : "Truss pieces: no exact build available from stored stock lengths."
    }
  ];

  results.warnings.forEach((warning) => notes.push(warning));
  refs.warningsList.innerHTML = notes.map((note) => `<div class="note ${note.level}">${escapeHtml(note.text)}</div>`).join("");
}

function renderSvg(results) {
  const trussType = getCurrentTrussType();
  const width = 1200;
  const height = 460;
  const marginX = 90;
  const trussY = 290;
  const topY = 145;
  const scale = (width - marginX * 2) / Math.max(state.trussLengthM, 1);
  const toX = (meters) => marginX + meters * scale;
  const trussStartX = toX(0);
  const trussEndX = toX(state.trussLengthM);
  const nodePositionsM = buildTrussNodePositions(state.trussLengthM, trussType.nodeSpacingM || 0.5);
  const trussMarkup = buildTrussSvgMarkup(trussType, nodePositionsM, toX, trussY, results.trussBuildPlan);

  const supportMarkup = results.supports.map((support) => {
    const x = toX(support.positionM);
    const overload = support.usagePercent > 100 || support.roofUsagePercent > 100;
    const caution = !overload && (support.usagePercent > 85 || support.roofUsagePercent > 85);
    const stroke = overload ? "#ff6b6b" : caution ? "#ffc857" : "#8fa5c9";
    return `
      <g data-support-handle="${support.id}">
        <line x1="${x}" y1="${topY}" x2="${x}" y2="${trussY - 42}" stroke="${stroke}" stroke-width="6" />
        <circle cx="${x}" cy="${topY}" r="11" fill="${stroke}" />
        <polygon points="${x - 18},${topY - 30} ${x + 18},${topY - 30} ${x},${topY - 54}" fill="${stroke}" opacity="0.9"></polygon>
        <text x="${x}" y="${topY - 96}" text-anchor="middle" class="svg-label">${escapeHtml(support.label)}</text>
        <text x="${x}" y="${topY - 70}" text-anchor="middle" class="svg-small">Roof point: ${formatKg(support.roofPointLoadKg)}</text>
        <text x="${x}" y="${topY - 14}" text-anchor="middle" class="svg-small">Suspended: ${formatKg(support.suspendedLoadKg)}</text>
        <text x="${x}" y="${trussY + 64}" text-anchor="middle" class="svg-small">${support.positionM.toFixed(2)} m</text>
      </g>
    `;
  }).join("");

  const spacingMarkup = [];
  for (let index = 0; index < results.supports.length - 1; index += 1) {
    const left = results.supports[index];
    const right = results.supports[index + 1];
    const x1 = toX(left.positionM);
    const x2 = toX(right.positionM);
    const midX = (x1 + x2) / 2;
    const y = topY + 26;
    spacingMarkup.push(`
      <g>
        <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#4f8cff" stroke-width="2" stroke-dasharray="8 6"></line>
        <line x1="${x1}" y1="${y - 8}" x2="${x1}" y2="${y + 8}" stroke="#4f8cff" stroke-width="2"></line>
        <line x1="${x2}" y1="${y - 8}" x2="${x2}" y2="${y + 8}" stroke="#4f8cff" stroke-width="2"></line>
        <text x="${midX}" y="${y - 10}" text-anchor="middle" class="svg-small">${(right.positionM - left.positionM).toFixed(2)} m</text>
      </g>
    `);
  }

  const loadMarkup = results.loads.map((load) => {
    const x = toX(load.startM);
    const widthPx = Math.max(24, load.widthM * scale);
    const labelX = x + widthPx / 2;
    return `
      <g class="draggable-load" data-load-id="${load.id}">
        <rect x="${x}" y="${trussY + 48}" width="${widthPx}" height="56" rx="12" fill="${load.color}" opacity="0.9"></rect>
        <rect x="${x + widthPx - 12}" y="${trussY + 48}" width="12" height="56" rx="6" fill="rgba(255,255,255,0.28)" data-resize-handle="${load.id}"></rect>
        <text x="${labelX}" y="${trussY + 72}" text-anchor="middle" class="svg-label light">${escapeHtml(load.label)}</text>
        <text x="${labelX}" y="${trussY + 92}" text-anchor="middle" class="svg-small light">${formatKg(load.weightKg)} / ${load.widthM.toFixed(2)} m</text>
      </g>
    `;
  }).join("");

  const cogX = toX(results.totalCogM);
  const meterMarks = [];
  const wholeMeters = Math.floor(state.trussLengthM);
  for (let meter = 0; meter <= wholeMeters; meter += 1) {
    const x = toX(meter);
    meterMarks.push(`
      <line x1="${x}" y1="${trussY + 118}" x2="${x}" y2="${trussY + 132}" stroke="#7f92b5" stroke-width="2"></line>
      <text x="${x}" y="${trussY + 156}" text-anchor="middle" class="svg-small">${meter} m</text>
    `);
  }

  refs.trussSvg.innerHTML = `
    <style>
      .truss-main { stroke: #c6d4ee; stroke-width: 6; stroke-linecap: round; }
      .truss-secondary { stroke: rgba(198, 212, 238, 0.72); stroke-width: 4; stroke-linecap: round; }
      .truss-brace { stroke: rgba(168, 184, 217, 0.45); stroke-width: 2.4; stroke-linecap: round; }
      .truss-node { fill: #dce7fb; opacity: 0.95; }
      .truss-node.back { fill: rgba(220, 231, 251, 0.38); }
      .svg-label { font: 600 18px 'Segoe UI', sans-serif; fill: #eef4ff; }
      .svg-label.light { fill: white; }
      .svg-small { font: 500 14px 'Segoe UI', sans-serif; fill: #a9bad6; }
      .svg-small.light { fill: rgba(255,255,255,0.9); }
    </style>
    <rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>
    <line x1="${trussStartX}" y1="${trussY}" x2="${trussEndX}" y2="${trussY}" stroke="#22c1c3" stroke-width="3" stroke-dasharray="8 10" opacity="0.35"></line>
    ${trussMarkup}
    ${spacingMarkup.join("")}
    ${supportMarkup}
    ${loadMarkup}
    <g>
      <line x1="${cogX}" y1="${trussY - 92}" x2="${cogX}" y2="${trussY + 110}" stroke="#ff6b6b" stroke-width="3" stroke-dasharray="10 8"></line>
      <circle cx="${cogX}" cy="${trussY - 92}" r="10" fill="#ff6b6b"></circle>
      <text x="${cogX}" y="${trussY - 108}" text-anchor="middle" class="svg-label">COG</text>
    </g>
    ${meterMarks.join("")}
  `;

  refs.trussSvg.querySelectorAll(".draggable-load > rect:first-child").forEach((rect) => {
    rect.addEventListener("pointerdown", startDraggingLoad);
  });
  refs.trussSvg.querySelectorAll("[data-resize-handle]").forEach((handle) => {
    handle.addEventListener("pointerdown", startResizingLoad);
  });
  refs.trussSvg.querySelectorAll("[data-support-handle]").forEach((handle) => {
    handle.addEventListener("pointerdown", startDraggingSupport);
  });
}

function calculateResults() {
  const trussType = getCurrentTrussType();
  const nodePositionsM = buildTrussNodePositions(state.trussLengthM, trussType.nodeSpacingM || 0.5);
  const trussBuildPlan = calculateTrussBuildPlan(state.trussLengthM, trussType.segmentLengthsM || []);
  const trussSelfWeightKg = state.trussLengthM * trussType.selfWeightKgPerM;
  const appliedLoadKg = state.loads.reduce((sum, load) => sum + load.weightKg, 0);
  const totalLoadKg = trussSelfWeightKg + appliedLoadKg;
  const factoredTotalLoadKg = totalLoadKg * dynamicLoadFactor;

  const effectiveLoads = [
    ...state.loads.map((load) => ({
      id: load.id,
      label: load.label,
      weightKg: load.weightKg * dynamicLoadFactor,
      nominalWeightKg: load.weightKg,
      centerM: load.startM + load.widthM / 2,
      startM: load.startM,
      widthM: load.widthM,
      color: load.color,
      source: "user"
    })),
    {
      id: "truss-self-weight",
      label: "Truss self weight",
      weightKg: trussSelfWeightKg * dynamicLoadFactor,
      nominalWeightKg: trussSelfWeightKg,
      centerM: state.trussLengthM / 2,
      startM: 0,
      widthM: state.trussLengthM,
      color: "#8fa5c9",
      source: "truss"
    }
  ];

  const supports = [...state.supports].sort((a, b) => a.positionM - b.positionM).map((support) => ({
    ...support,
    reactionKg: 0
  }));
  const supportAnalysis = analyzeBeamSupportSystem(state.trussLengthM, supports, effectiveLoads);
  supportAnalysis.supports.forEach((analyzedSupport, index) => {
    supports[index].reactionKg = analyzedSupport.reactionKg;
  });

  const totalMoment = effectiveLoads.reduce((sum, load) => sum + load.nominalWeightKg * load.centerM, 0);
  const totalCogM = totalLoadKg > 0 ? totalMoment / totalLoadKg : 0;
  const trussCheck = calculateTrussCapacityCheck(supports, effectiveLoads);

  return {
    trussSelfWeightKg,
    appliedLoadKg,
    totalLoadKg,
    factoredTotalLoadKg,
    dynamicLoadFactor,
    totalCogM,
    trussCheck,
    trussBuildPlan,
    supportAnalysis,
    supports: supports.map((support) => ({
      ...support,
      rawReactionKg: support.reactionKg,
      suspendedLoadKg: Math.max(0, support.reactionKg),
      hardwareLoadKg: includeHardwareWeight ? hardwareWeightPerPickupKg : 0,
      roofPointLoadKg: Math.max(0, support.reactionKg + support.motorSelfWeightKg + (includeHardwareWeight ? hardwareWeightPerPickupKg : 0)),
      usagePercent: (Math.max(0, support.reactionKg) / support.capacityKg) * 100,
      roofUsagePercent: (Math.max(0, support.reactionKg + support.motorSelfWeightKg + (includeHardwareWeight ? hardwareWeightPerPickupKg : 0)) / support.roofPointWllKg) * 100,
      nearestNodeM: findNearestNodePosition(nodePositionsM, support.positionM),
      nodeOffsetM: Math.abs(support.positionM - findNearestNodePosition(nodePositionsM, support.positionM)),
      hitsNodePoint: Math.abs(support.positionM - findNearestNodePosition(nodePositionsM, support.positionM)) <= getNodeHitToleranceM(trussType)
    })),
    loads: state.loads.map((load) => ({
      ...load,
      centerM: load.startM + load.widthM / 2,
      dynamicWeightKg: load.weightKg * dynamicLoadFactor
    })),
    warnings: buildWarnings(supports, effectiveLoads, totalLoadKg, trussCheck, supportAnalysis, trussType, nodePositionsM)
  };
}

function calculateTrussCapacityCheck(sortedSupports, effectiveLoads) {
  const table = TRUSS_LOADING_TABLES[state.trussTypeId];
  if (!table) {
    return {
      status: "unsupported",
      summary: "No truss loading table is configured for this truss type.",
      details: "No manufacturer loading table is stored for the selected truss type in this tool."
    };
  }

  if (sortedSupports.length < 2) {
    return {
      status: "unsupported",
      summary: "Truss table check needs at least 2 pickups.",
      details: "A manufacturer-table comparison cannot be built from fewer than 2 pickup positions."
    };
  }

  const supportSpans = [];
  for (let index = 0; index < sortedSupports.length - 1; index += 1) {
    supportSpans.push(sortedSupports[index + 1].positionM - sortedSupports[index].positionM);
  }
  const longestSupportSpanM = Math.max(...supportSpans);
  if (longestSupportSpanM <= 0) {
    return {
      status: "unsupported",
      summary: "Support span is invalid for truss table checking.",
      details: "At least one pickup spacing is zero or negative."
    };
  }

  const beamEnvelope = calculateBeamEnvelopeMetrics(state.trussLengthM, sortedSupports, effectiveLoads);
  const left = sortedSupports[0];
  const right = sortedSupports[1];
  const supportSpanM = sortedSupports.length === 2 ? right.positionM - left.positionM : longestSupportSpanM;
  const leftCantileverM = left.positionM;
  const rightCantileverM = state.trussLengthM - sortedSupports[sortedSupports.length - 1].positionM;
  const maxCantileverForCheckM = 0.25;

  const tableRow = getTableRowForSpan(table, supportSpanM);
  const factoredAddedLoadKg = state.loads.reduce((sum, load) => sum + load.weightKg * dynamicLoadFactor, 0);
  const maxSingleFactoredLoadKg = state.loads.reduce((max, load) => Math.max(max, load.weightKg * dynamicLoadFactor), 0);
  const allowableUdlTotalKg = tableRow.udlKgPerM * supportSpanM;
  const udlUsagePercent = allowableUdlTotalKg > 0 ? (factoredAddedLoadKg / allowableUdlTotalKg) * 100 : 0;
  const cplUsagePercent = tableRow.cplKg > 0 ? (maxSingleFactoredLoadKg / tableRow.cplKg) * 100 : 0;
  const exactEndSupported = sortedSupports.length === 2
    && leftCantileverM <= maxCantileverForCheckM
    && rightCantileverM <= maxCantileverForCheckM;

  if (exactEndSupported) {
    const worstUsagePercent = Math.max(udlUsagePercent, cplUsagePercent);
    const status = worstUsagePercent > 100 ? "over" : worstUsagePercent > 85 ? "warning" : "ok";

    return {
      mode: "exact-table",
      status,
      supportSpanM,
      tableSpanM: tableRow.spanM,
      allowableUdlKgPerM: tableRow.udlKgPerM,
      allowableUdlTotalKg,
      allowableCplKg: tableRow.cplKg,
      factoredAddedLoadKg,
      maxSingleFactoredLoadKg,
      udlUsagePercent,
      cplUsagePercent,
      summary: `Exact published table check using ${describeTableLookup(tableRow, supportSpanM)}.`,
      details: `Comparison is based on factored additional suspended load against the stored static single-span manufacturer table. ${describeTableLookupDetail(tableRow, supportSpanM)} Truss self weight is not added again in this exact table-row comparison.`
    };
  }

  const envelopeSpanM = longestSupportSpanM;
  const envelopeRow = getTableRowForSpan(table, envelopeSpanM);
  const allowableEnvelopeUdlTotalKg = envelopeRow.udlKgPerM * envelopeSpanM;
  const allowableMomentKgM = Math.min(
    allowableEnvelopeUdlTotalKg * envelopeSpanM / 8,
    envelopeRow.cplKg * envelopeSpanM / 4
  );
  const allowableShearKg = Math.min(
    allowableEnvelopeUdlTotalKg / 2,
    envelopeRow.cplKg / 2
  );
  const momentUsagePercent = allowableMomentKgM > 0 ? (beamEnvelope.maxAbsMomentKgM / allowableMomentKgM) * 100 : 0;
  const shearUsagePercent = allowableShearKg > 0 ? (beamEnvelope.maxAbsShearKg / allowableShearKg) * 100 : 0;
  const worstUsagePercent = Math.max(momentUsagePercent, shearUsagePercent);
  const status = worstUsagePercent > 100 ? "over" : worstUsagePercent > 85 ? "warning" : "ok";

  return {
    mode: "table-derived-envelope",
    status,
    supportSpanM: envelopeSpanM,
    tableSpanM: envelopeRow.spanM,
    allowableMomentKgM,
    allowableShearKg,
    peakMomentKgM: beamEnvelope.maxAbsMomentKgM,
    peakShearKg: beamEnvelope.maxAbsShearKg,
    momentUsagePercent,
    shearUsagePercent,
    summary: `Table-derived beam check using ${describeTableLookup(envelopeRow, envelopeSpanM)}.`,
    details: `This is a conservative envelope check for arbitrary pickup layouts. It compares the beam-analysis peak moment and peak shear against moment and shear limits derived from the stored single-span manufacturer table. ${describeTableLookupDetail(envelopeRow, envelopeSpanM)} Current cantilevers are ${leftCantileverM.toFixed(2)} m left and ${rightCantileverM.toFixed(2)} m right.`
  };
}

function getTableRowForSpan(table, spanM) {
  if (spanM <= table[0].spanM) {
    if (Math.abs(spanM - table[0].spanM) < 1e-9) {
      return {
        ...table[0],
        lookupMode: "exact",
        sourceSpanM: table[0].spanM
      };
    }
    const first = table[0];
    const second = table[1] || table[0];
    return {
      spanM,
      udlKgPerM: Math.max(0, extrapolateValue(first.spanM, first.udlKgPerM, second.spanM, second.udlKgPerM, spanM)),
      cplKg: Math.max(0, extrapolateValue(first.spanM, first.cplKg, second.spanM, second.cplKg, spanM)),
      lookupMode: "extrapolated-below",
      sourceSpanM: `${first.spanM.toFixed(1)}-${second.spanM.toFixed(1)}`
    };
  }

  for (let index = 0; index < table.length - 1; index += 1) {
    const left = table[index];
    const right = table[index + 1];
    if (Math.abs(spanM - left.spanM) < 1e-9) {
      return {
        ...left,
        lookupMode: "exact",
        sourceSpanM: left.spanM
      };
    }
    if (spanM > left.spanM && spanM < right.spanM) {
      const ratio = (spanM - left.spanM) / (right.spanM - left.spanM);
      return {
        spanM,
        udlKgPerM: left.udlKgPerM + (right.udlKgPerM - left.udlKgPerM) * ratio,
        cplKg: left.cplKg + (right.cplKg - left.cplKg) * ratio,
        lookupMode: "interpolated",
        sourceSpanM: `${left.spanM.toFixed(1)}-${right.spanM.toFixed(1)}`
      };
    }
  }

  const last = table[table.length - 1];
  const previous = table[table.length - 2] || last;
  if (spanM > last.spanM) {
    return {
      spanM,
      udlKgPerM: Math.max(0, extrapolateValue(previous.spanM, previous.udlKgPerM, last.spanM, last.udlKgPerM, spanM)),
      cplKg: Math.max(0, extrapolateValue(previous.spanM, previous.cplKg, last.spanM, last.cplKg, spanM)),
      lookupMode: "extrapolated-above",
      sourceSpanM: `${previous.spanM.toFixed(1)}-${last.spanM.toFixed(1)}`
    };
  }
  return {
    ...last,
    lookupMode: "exact",
    sourceSpanM: last.spanM
  };
}

function extrapolateValue(x1, y1, x2, y2, x) {
  if (Math.abs(x2 - x1) < 1e-9) return y1;
  return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
}

function describeTableLookup(tableRow, spanM) {
  if (tableRow.lookupMode === "extrapolated-below") {
    return `an extrapolated manufacturer row below the minimum stored span using ${tableRow.sourceSpanM} m data for a ${spanM.toFixed(2)} m support span`;
  }
  if (tableRow.lookupMode === "interpolated") {
    return `an interpolated manufacturer row between ${tableRow.sourceSpanM} m for a ${spanM.toFixed(2)} m support span`;
  }
  if (tableRow.lookupMode === "extrapolated-above") {
    return `an extrapolated manufacturer row above the maximum stored span using ${tableRow.sourceSpanM} m data for a ${spanM.toFixed(2)} m support span`;
  }
  return `the ${tableRow.sourceSpanM.toFixed(1)} m manufacturer row for a ${spanM.toFixed(2)} m support span`;
}

function describeTableLookupDetail(tableRow, spanM) {
  if (tableRow.lookupMode === "extrapolated-below") {
    return `Because ${spanM.toFixed(2)} m is below the first stored span, the allowable values are linearly extrapolated from the first two stored table rows. `;
  }
  if (tableRow.lookupMode === "interpolated") {
    return `Because ${spanM.toFixed(2)} m falls between published rows, the allowable values are linearly interpolated from the adjacent stored table rows. `;
  }
  if (tableRow.lookupMode === "extrapolated-above") {
    return `Because ${spanM.toFixed(2)} m is above the last stored span, the allowable values are linearly extrapolated from the final two stored table rows and should be treated as an estimate only. `;
  }
  return "";
}

function calculateTrussBuildPlan(lengthM, segmentLengthsM) {
  const availableLengths = [...new Set(segmentLengthsM)]
    .filter((value) => value > 0)
    .sort((a, b) => b - a);
  if (!availableLengths.length) {
    return {
      isExact: false,
      totalPieces: 0,
      parts: [],
      summary: "No stock truss segment lengths are configured for this truss type."
    };
  }

  const targetUnits = Math.round(lengthM * PIECE_LENGTH_SCALE);
  const segmentUnits = availableLengths.map((value) => ({
    lengthM: value,
    units: Math.round(value * PIECE_LENGTH_SCALE)
  }));
  const bestCounts = new Array(targetUnits + 1).fill(Infinity);
  const previousIndex = new Array(targetUnits + 1).fill(-1);
  bestCounts[0] = 0;

  for (let units = 1; units <= targetUnits; units += 1) {
    segmentUnits.forEach((segment, index) => {
      if (segment.units <= units && bestCounts[units - segment.units] + 1 < bestCounts[units]) {
        bestCounts[units] = bestCounts[units - segment.units] + 1;
        previousIndex[units] = index;
      }
    });
  }

  if (!Number.isFinite(bestCounts[targetUnits])) {
    return {
      isExact: false,
      totalPieces: 0,
      parts: [],
      summary: `Requested length ${lengthM.toFixed(2)} m cannot be built exactly from stored segment lengths ${availableLengths.map((value) => `${value.toFixed(2)} m`).join(", ")}.`
    };
  }

  const parts = [];
  let remainingUnits = targetUnits;
  while (remainingUnits > 0) {
    const segmentIndex = previousIndex[remainingUnits];
    if (segmentIndex < 0) break;
    parts.push({ lengthM: segmentUnits[segmentIndex].lengthM });
    remainingUnits -= segmentUnits[segmentIndex].units;
  }

  parts.sort((a, b) => b.lengthM - a.lengthM);
  return {
    isExact: true,
    totalPieces: parts.length,
    parts,
    summary: `${parts.length} truss piece${parts.length === 1 ? "" : "s"} used: ${parts.map((part) => `${part.lengthM.toFixed(2)} m`).join(" + ")} = ${lengthM.toFixed(2)} m.`
  };
}

function calculateBeamEnvelopeMetrics(lengthM, sortedSupports, effectiveLoads) {
  const events = new Set([0, lengthM]);
  const pointLoads = new Map();

  sortedSupports.forEach((support) => {
    events.add(support.positionM);
    pointLoads.set(support.positionM, (pointLoads.get(support.positionM) || 0) + support.reactionKg);
  });

  effectiveLoads.forEach((load) => {
    events.add(load.startM);
    events.add(load.startM + load.widthM);
  });

  const positions = [...events].sort((a, b) => a - b);
  let shearKg = pointLoads.get(0) || 0;
  let momentKgM = 0;
  let maxAbsShearKg = Math.abs(shearKg);
  let maxAbsMomentKgM = Math.abs(momentKgM);

  for (let index = 0; index < positions.length - 1; index += 1) {
    const x1 = positions[index];
    const x2 = positions[index + 1];
    const length = x2 - x1;
    if (length <= 1e-9) continue;

    const midpoint = (x1 + x2) / 2;
    const wKgPerM = getDistributedLoadIntensityAt(midpoint, effectiveLoads);
    const endShearKg = shearKg - wKgPerM * length;
    const endMomentKgM = momentKgM + shearKg * length - (wKgPerM * length * length) / 2;

    maxAbsShearKg = Math.max(maxAbsShearKg, Math.abs(shearKg), Math.abs(endShearKg));
    maxAbsMomentKgM = Math.max(maxAbsMomentKgM, Math.abs(momentKgM), Math.abs(endMomentKgM));

    if (Math.abs(wKgPerM) > 1e-9) {
      const zeroShearDistance = shearKg / wKgPerM;
      if (zeroShearDistance > 0 && zeroShearDistance < length) {
        const criticalMomentKgM = momentKgM + shearKg * zeroShearDistance - (wKgPerM * zeroShearDistance * zeroShearDistance) / 2;
        maxAbsMomentKgM = Math.max(maxAbsMomentKgM, Math.abs(criticalMomentKgM));
      }
    }

    shearKg = endShearKg + (pointLoads.get(x2) || 0);
    momentKgM = endMomentKgM;
    maxAbsShearKg = Math.max(maxAbsShearKg, Math.abs(shearKg));
    maxAbsMomentKgM = Math.max(maxAbsMomentKgM, Math.abs(momentKgM));
  }

  return {
    maxAbsShearKg,
    maxAbsMomentKgM
  };
}

function getDistributedLoadIntensityAt(positionM, effectiveLoads) {
  let intensityKgPerM = 0;
  effectiveLoads.forEach((load) => {
    const endM = load.startM + load.widthM;
    if (positionM >= load.startM - 1e-9 && positionM <= endM + 1e-9) {
      intensityKgPerM += load.widthM > 0 ? load.weightKg / load.widthM : 0;
    }
  });
  return intensityKgPerM;
}

function buildTrussNodePositions(lengthM, nodeSpacingM) {
  const spacingM = Math.max(0.1, nodeSpacingM || 0.5);
  const positions = [];
  for (let positionM = 0; positionM < lengthM; positionM += spacingM) {
    positions.push(Number(positionM.toFixed(4)));
  }
  const finalPositionM = Number(lengthM.toFixed(4));
  if (!positions.length || Math.abs(positions[positions.length - 1] - finalPositionM) > 1e-6) {
    positions.push(finalPositionM);
  }
  return positions;
}

function findNearestNodePosition(nodePositionsM, positionM) {
  return nodePositionsM.reduce((closest, nodeM) => (
    Math.abs(nodeM - positionM) < Math.abs(closest - positionM) ? nodeM : closest
  ), nodePositionsM[0] || 0);
}

function getNodeHitToleranceM(trussType) {
  return Math.min(0.04, Math.max(0.015, (trussType.nodeSpacingM || 0.5) * 0.06));
}

function buildTrussSvgMarkup(trussType, nodePositionsM, toX, trussY, trussBuildPlan) {
  if (trussType.visualProfile === "tri") {
    return buildTriTrussMarkup(nodePositionsM, toX, trussY, trussBuildPlan);
  }
  return buildBoxTrussMarkup(nodePositionsM, toX, trussY, trussType.visualProfile, trussBuildPlan);
}

function buildBoxTrussMarkup(nodePositionsM, toX, trussY, visualProfile, trussBuildPlan) {
  const profile = visualProfile === "box-heavy"
    ? { top: 40, bottom: 40, backTop: 24, backBottom: 24, backOffsetX: 12 }
    : visualProfile === "box-medium"
      ? { top: 36, bottom: 36, backTop: 22, backBottom: 22, backOffsetX: 11 }
      : { top: 32, bottom: 32, backTop: 20, backBottom: 20, backOffsetX: 10 };

  const frontTopY = trussY - profile.top;
  const frontBottomY = trussY + profile.bottom;
  const backTopY = trussY - profile.backTop;
  const backBottomY = trussY + profile.backBottom;
  const parts = [];

  for (let index = 0; index < nodePositionsM.length - 1; index += 1) {
    const x1 = toX(nodePositionsM[index]);
    const x2 = toX(nodePositionsM[index + 1]);
    const bx1 = x1 + profile.backOffsetX;
    const bx2 = x2 + profile.backOffsetX;

    parts.push(`
      <line x1="${bx1}" y1="${backTopY}" x2="${bx2}" y2="${backTopY}" class="truss-secondary"></line>
      <line x1="${bx1}" y1="${backBottomY}" x2="${bx2}" y2="${backBottomY}" class="truss-secondary"></line>
      <line x1="${x1}" y1="${frontTopY}" x2="${x2}" y2="${frontTopY}" class="truss-main"></line>
      <line x1="${x1}" y1="${frontBottomY}" x2="${x2}" y2="${frontBottomY}" class="truss-main"></line>
      <line x1="${x1}" y1="${frontTopY}" x2="${x1}" y2="${frontBottomY}" class="truss-brace"></line>
      <line x1="${x2}" y1="${frontTopY}" x2="${x2}" y2="${frontBottomY}" class="truss-brace"></line>
      <line x1="${bx1}" y1="${backTopY}" x2="${bx1}" y2="${backBottomY}" class="truss-brace"></line>
      <line x1="${bx2}" y1="${backTopY}" x2="${bx2}" y2="${backBottomY}" class="truss-brace"></line>
      <line x1="${x1}" y1="${frontTopY}" x2="${bx1}" y2="${backTopY}" class="truss-brace"></line>
      <line x1="${x1}" y1="${frontBottomY}" x2="${bx1}" y2="${backBottomY}" class="truss-brace"></line>
      <line x1="${x2}" y1="${frontTopY}" x2="${bx2}" y2="${backTopY}" class="truss-brace"></line>
      <line x1="${x2}" y1="${frontBottomY}" x2="${bx2}" y2="${backBottomY}" class="truss-brace"></line>
      <line x1="${x1}" y1="${index % 2 === 0 ? frontBottomY : frontTopY}" x2="${x2}" y2="${index % 2 === 0 ? frontTopY : frontBottomY}" class="truss-brace"></line>
      <line x1="${bx1}" y1="${index % 2 === 0 ? backBottomY : backTopY}" x2="${bx2}" y2="${index % 2 === 0 ? backTopY : backBottomY}" class="truss-brace"></line>
    `);
  }

  nodePositionsM.forEach((nodeM) => {
    const x = toX(nodeM);
    const bx = x + profile.backOffsetX;
    parts.push(`
      <circle cx="${bx}" cy="${backTopY}" r="3.2" class="truss-node back"></circle>
      <circle cx="${bx}" cy="${backBottomY}" r="3.2" class="truss-node back"></circle>
      <circle cx="${x}" cy="${frontTopY}" r="3.6" class="truss-node"></circle>
      <circle cx="${x}" cy="${frontBottomY}" r="3.6" class="truss-node"></circle>
    `);
  });

  getTrussSectionBoundaries(trussBuildPlan).forEach((boundaryM) => {
    const x = toX(boundaryM);
    const bx = x + profile.backOffsetX;
    parts.push(`
      <line x1="${x}" y1="${frontTopY - 8}" x2="${x}" y2="${frontBottomY + 8}" stroke="#f5f7ff" stroke-width="3.2" opacity="0.9"></line>
      <line x1="${bx}" y1="${backTopY - 6}" x2="${bx}" y2="${backBottomY + 6}" stroke="rgba(245,247,255,0.55)" stroke-width="2.2"></line>
    `);
  });

  return parts.join("");
}

function buildTriTrussMarkup(nodePositionsM, toX, trussY, trussBuildPlan) {
  const apexY = trussY - 42;
  const baseY = trussY + 32;
  const parts = [];

  for (let index = 0; index < nodePositionsM.length - 1; index += 1) {
    const x1 = toX(nodePositionsM[index]);
    const x2 = toX(nodePositionsM[index + 1]);
    const midX = (x1 + x2) / 2;

    parts.push(`
      <line x1="${x1}" y1="${apexY}" x2="${x2}" y2="${apexY}" class="truss-main"></line>
      <line x1="${x1}" y1="${baseY}" x2="${x2}" y2="${baseY}" class="truss-main"></line>
      <line x1="${x1}" y1="${baseY}" x2="${midX}" y2="${apexY}" class="truss-brace"></line>
      <line x1="${midX}" y1="${apexY}" x2="${x2}" y2="${baseY}" class="truss-brace"></line>
      <line x1="${midX}" y1="${apexY}" x2="${midX}" y2="${baseY}" class="truss-brace"></line>
    `);
  }

  nodePositionsM.forEach((nodeM) => {
    const x = toX(nodeM);
    parts.push(`
      <circle cx="${x}" cy="${apexY}" r="3.6" class="truss-node"></circle>
      <circle cx="${x}" cy="${baseY}" r="3.6" class="truss-node"></circle>
    `);
  });

  getTrussSectionBoundaries(trussBuildPlan).forEach((boundaryM) => {
    const x = toX(boundaryM);
    parts.push(`
      <line x1="${x}" y1="${apexY - 8}" x2="${x}" y2="${baseY + 8}" stroke="#f5f7ff" stroke-width="3"></line>
    `);
  });

  return parts.join("");
}

function getTrussSectionBoundaries(trussBuildPlan) {
  const boundaries = [];
  let runningLengthM = 0;
  trussBuildPlan.parts.forEach((part, index) => {
    runningLengthM += part.lengthM;
    if (index < trussBuildPlan.parts.length - 1) {
      boundaries.push(Number(runningLengthM.toFixed(4)));
    }
  });
  return boundaries;
}

function analyzeBeamSupportSystem(lengthM, sortedSupports, effectiveLoads) {
  if (!sortedSupports.length) {
    return {
      model: "none",
      summary: "No pickups available for support analysis.",
      supports: []
    };
  }

  if (sortedSupports.length === 1) {
    const totalFactoredLoadKg = effectiveLoads.reduce((sum, load) => sum + load.weightKg, 0);
    return {
      model: "fallback-single-pick",
      summary: "Single pickup fallback: all suspended load assigned to one pickup.",
      supports: sortedSupports.map((support, index) => ({
        ...support,
        reactionKg: index === 0 ? totalFactoredLoadKg : 0
      }))
    };
  }

  const nodePositions = buildBeamNodePositions(lengthM, sortedSupports, effectiveLoads);
  const nodeCount = nodePositions.length;
  const dofCount = nodeCount * 2;
  const globalStiffness = createZeroMatrix(dofCount, dofCount);
  const globalLoads = new Array(dofCount).fill(0);
  const trussUniformLoadKgPerM = lengthM > 0
    ? (effectiveLoads.find((load) => load.source === "truss")?.weightKg || 0) / lengthM
    : 0;

  for (let elementIndex = 0; elementIndex < nodeCount - 1; elementIndex += 1) {
    const x1 = nodePositions[elementIndex];
    const x2 = nodePositions[elementIndex + 1];
    const elementLength = x2 - x1;
    if (elementLength <= 1e-9) continue;

    const localStiffness = buildBeamElementStiffness(elementLength);
    const dofIndices = [2 * elementIndex, 2 * elementIndex + 1, 2 * (elementIndex + 1), 2 * (elementIndex + 1) + 1];
    addElementMatrix(globalStiffness, localStiffness, dofIndices);

    let distributedLoadKgPerM = trussUniformLoadKgPerM;
    const midpoint = (x1 + x2) / 2;
    effectiveLoads.forEach((load) => {
      if (load.source !== "user") return;
      const loadEnd = load.startM + load.widthM;
      if (midpoint >= load.startM - 1e-9 && midpoint <= loadEnd + 1e-9) {
        distributedLoadKgPerM += load.widthM > 0 ? load.weightKg / load.widthM : 0;
      }
    });

    if (distributedLoadKgPerM !== 0) {
      const equivalentLoads = buildUniformLoadVector(elementLength, distributedLoadKgPerM);
      addElementVector(globalLoads, equivalentLoads, dofIndices);
    }
  }

  const supportNodeIndices = sortedSupports.map((support) => findNodeIndex(nodePositions, support.positionM));
  const fixedDofs = [...new Set(supportNodeIndices.map((nodeIndex) => nodeIndex * 2))].sort((a, b) => a - b);
  const freeDofs = [];
  for (let dof = 0; dof < dofCount; dof += 1) {
    if (!fixedDofs.includes(dof)) freeDofs.push(dof);
  }

  const reducedStiffness = freeDofs.map((row) => freeDofs.map((col) => globalStiffness[row][col]));
  const reducedLoads = freeDofs.map((row) => globalLoads[row]);
  const reducedDisplacements = solveLinearSystem(reducedStiffness, reducedLoads);

  if (!reducedDisplacements) {
    const totalFactoredLoadKg = effectiveLoads.reduce((sum, load) => sum + load.weightKg, 0);
    const fallbackLoadKg = totalFactoredLoadKg / sortedSupports.length;
    return {
      model: "fallback-equal-share",
      summary: "Beam analysis could not be solved cleanly, so the load was evenly shared across pickups as a fallback.",
      supports: sortedSupports.map((support) => ({
        ...support,
        reactionKg: fallbackLoadKg
      }))
    };
  }

  const displacements = new Array(dofCount).fill(0);
  freeDofs.forEach((dof, index) => {
    displacements[dof] = reducedDisplacements[index];
  });

  const reactions = multiplyMatrixVector(globalStiffness, displacements).map((value, index) => value - globalLoads[index]);

  return {
    model: "continuous-beam",
    summary: "Continuous-beam analysis applied for arbitrary pickup positions.",
    supports: sortedSupports.map((support, index) => ({
      ...support,
      reactionKg: reactions[supportNodeIndices[index] * 2]
    }))
  };
}

function buildWarnings(supports, effectiveLoads, totalLoadKg, trussCheck, supportAnalysis, trussType, nodePositionsM) {
  const warnings = [];
  const userLoads = effectiveLoads.filter((load) => load.source === "user");

  if (dynamicLoadFactor > 1) {
    warnings.push({ level: "warning", text: `Dynamic factor is set to ${dynamicLoadFactor.toFixed(2)}x. This is a simplified event factor and should not replace an engineered motion or shock-load assessment.` });
  }

  if (trussCheck.status === "unsupported") {
    warnings.push({ level: "warning", text: trussCheck.summary });
  } else if (trussCheck.status === "over") {
    if (trussCheck.mode === "exact-table") {
      warnings.push({ level: "danger", text: `Truss table check is over 100%. UDL usage is ${trussCheck.udlUsagePercent.toFixed(1)}% and largest single-load usage is ${trussCheck.cplUsagePercent.toFixed(1)}% against the selected manufacturer row.` });
    } else {
      warnings.push({ level: "danger", text: `Conservative truss beam-envelope check is over 100%. Peak moment usage is ${trussCheck.momentUsagePercent.toFixed(1)}% and peak shear usage is ${trussCheck.shearUsagePercent.toFixed(1)}% against the derived manufacturer envelope.` });
    }
  } else if (trussCheck.status === "warning") {
    if (trussCheck.mode === "exact-table") {
      warnings.push({ level: "warning", text: `Truss table check is above 85%. UDL usage is ${trussCheck.udlUsagePercent.toFixed(1)}% and largest single-load usage is ${trussCheck.cplUsagePercent.toFixed(1)}% against the selected manufacturer row.` });
    } else {
      warnings.push({ level: "warning", text: `Conservative truss beam-envelope check is above 85%. Peak moment usage is ${trussCheck.momentUsagePercent.toFixed(1)}% and peak shear usage is ${trussCheck.shearUsagePercent.toFixed(1)}% against the derived manufacturer envelope.` });
    }
  }

  if (supportAnalysis.model === "continuous-beam") {
    warnings.push({ level: "info", text: "Support reactions are being calculated with a continuous-beam model, so arbitrary pickup positions and pickup counts are supported for planning reactions." });
  } else if (supportAnalysis.model === "fallback-single-pick" || supportAnalysis.model === "fallback-equal-share") {
    warnings.push({ level: "warning", text: supportAnalysis.summary });
  }

  supports.forEach((support) => {
    const usage = (support.reactionKg / support.capacityKg) * 100;
    const roofPointLoadKg = support.reactionKg + support.motorSelfWeightKg + (includeHardwareWeight ? hardwareWeightPerPickupKg : 0);
    const roofUsage = (roofPointLoadKg / support.roofPointWllKg) * 100;
    const nearestNodeM = findNearestNodePosition(nodePositionsM, support.positionM);
    const nodeOffsetM = Math.abs(support.positionM - nearestNodeM);

    if (usage > 100) {
      warnings.push({ level: "danger", text: `${support.label} exceeds motor capacity at ${usage.toFixed(1)}% of WLL.` });
    } else if (usage > 85) {
      warnings.push({ level: "warning", text: `${support.label} is above 85% of motor capacity. Rebalance or increase capacity before show use.` });
    }

    if (roofUsage > 100) {
      warnings.push({ level: "danger", text: `${support.label} roof point exceeds its stated WLL at ${roofUsage.toFixed(1)}%, including motor self weight and the setup hardware weight when enabled.` });
    } else if (roofUsage > 85) {
      warnings.push({ level: "warning", text: `${support.label} roof point is above 85% usage including motor self weight and the setup hardware weight when enabled. Confirm venue approval and redistribute if possible.` });
    }

    if (support.reactionKg < -0.01) {
      warnings.push({ level: "danger", text: `${support.label} has a negative vertical reaction of ${support.reactionKg.toFixed(2)} kg in the beam analysis. This indicates uplift or an invalid support assumption for a hanging motor arrangement.` });
    }

    if (nodeOffsetM <= getNodeHitToleranceM(trussType)) {
      warnings.push({ level: "warning", text: `${support.label} is sitting on or extremely close to a displayed node point at ${nearestNodeM.toFixed(2)} m. Move the pickup clear of the node point and confirm the real hanger position against the truss geometry.` });
    }
  });

  for (let index = 0; index < supports.length - 1; index += 1) {
    const span = supports[index + 1].positionM - supports[index].positionM;
    if (span > 8) {
      warnings.push({ level: "warning", text: `Pickup span ${index + 1} is ${span.toFixed(2)} m. Verify the selected truss can carry this span and point loading with the actual manufacturer's tables.` });
    }
  }

  if (supports.length === 2) {
    const leftSpan = supports[1].positionM - supports[0].positionM;
    const rightSpan = supports[supports.length - 1].positionM - supports[supports.length - 2].positionM;
    const leftCantilever = supports[0].positionM;
    const rightCantilever = state.trussLengthM - supports[supports.length - 1].positionM;

    if (leftSpan > 0 && leftCantilever > leftSpan / 6) {
      warnings.push({ level: "warning", text: `Left cantilever is ${leftCantilever.toFixed(2)} m, beyond the common 1/6 rule of thumb noted in entertainment rigging guidance. Confirm the real truss allowance from the manufacturer product data for this support case.` });
    }
    if (rightSpan > 0 && rightCantilever > rightSpan / 6) {
      warnings.push({ level: "warning", text: `Right cantilever is ${rightCantilever.toFixed(2)} m, beyond the common 1/6 rule of thumb noted in entertainment rigging guidance. Confirm the real truss allowance from the manufacturer product data for this support case.` });
    }
  }

  userLoads.forEach((load) => {
    if (load.weightKg === 0) {
      warnings.push({ level: "warning", text: `${load.label} has zero weight assigned. Either remove it or enter a realistic mass so the reactions stay meaningful.` });
    }
  });

  if (totalLoadKg === 0) {
    warnings.push({ level: "warning", text: "No total load is present. Enter a truss length, pickups, and loads to start calculating." });
  }

  return warnings;
}

function onSupportInput(event) {
  const support = state.supports.find((item) => item.id === event.target.getAttribute("data-support-id"));
  if (!support) return;

  const field = event.target.getAttribute("data-field");
  if (field === "label") support.label = event.target.value || "Motor";
  if (field === "positionM") support.positionM = parseDecimalInput(event.target.value, support.positionM);
  if (field === "capacityPreset") {
    if (event.target.value === "custom") {
      support.capacityMode = "custom";
    } else {
      support.capacityMode = "preset";
      const preset = MOTOR_CAPACITY_PRESETS.find((item) => String(item.value) === String(event.target.value));
      if (preset) {
        support.capacityKg = preset.value;
        support.motorSelfWeightKg = preset.motorSelfWeightKg;
      }
    }
  }
  if (field === "capacityKg") {
    support.capacityMode = "custom";
    support.capacityKg = parseDecimalInput(event.target.value, support.capacityKg);
  }
  if (field === "roofPointWllKg") support.roofPointWllKg = parseDecimalInput(event.target.value, support.roofPointWllKg);
  if (field === "motorSelfWeightKg") support.motorSelfWeightKg = parseDecimalInput(event.target.value, support.motorSelfWeightKg);
  render();
}

function onLoadInput(event) {
  const load = state.loads.find((item) => item.id === event.target.getAttribute("data-load-id"));
  if (!load) return;

  const field = event.target.getAttribute("data-field");
  if (field === "label") load.label = event.target.value || "Load";
  if (field === "weightKg") load.weightKg = parseDecimalInput(event.target.value, load.weightKg);
  if (field === "startM") load.startM = parseDecimalInput(event.target.value, load.startM);
  if (field === "widthM") load.widthM = parseDecimalInput(event.target.value, load.widthM);
  render();
}

function startDraggingLoad(event) {
  const group = event.target.closest("[data-load-id]");
  if (!group) return;
  dragState.active = { type: "move", loadId: group.getAttribute("data-load-id") };
  event.target.setPointerCapture(event.pointerId);
}

function startResizingLoad(event) {
  dragState.active = { type: "resize", loadId: event.target.getAttribute("data-resize-handle") };
  event.target.setPointerCapture(event.pointerId);
  event.stopPropagation();
}

function startDraggingSupport(event) {
  const supportId = event.currentTarget.getAttribute("data-support-handle");
  dragState.active = { type: "support", supportId };
}

function onPointerMove(event) {
  if (!dragState.active) return;

  const rect = refs.trussSvg.getBoundingClientRect();
  const usableWidth = rect.width - 180;
  const relativeX = clampNumber(event.clientX - rect.left - 90, 0, usableWidth);
  const meters = (relativeX / Math.max(usableWidth, 1)) * state.trussLengthM;

  if (dragState.active.type === "support") {
    const support = state.supports.find((item) => item.id === dragState.active.supportId);
    if (!support) return;
    support.positionM = Number(meters.toFixed(2));
  } else {
    const load = state.loads.find((item) => item.id === dragState.active.loadId);
    if (!load) return;
    if (dragState.active.type === "move") {
      load.startM = Number(clampNumber(meters - load.widthM / 2, 0, state.trussLengthM - load.widthM).toFixed(2));
    } else {
      load.widthM = Number(clampNumber(meters - load.startM, 0.1, state.trussLengthM - load.startM).toFixed(2));
    }
  }

  render();
}

function stopDragging() {
  dragState.active = null;
}

function clampNumber(value, min, max) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function formatKg(value) {
  return `${value.toFixed(2)} kg`;
}

function getCurrentTrussType() {
  return TRUSS_TYPES.find((item) => item.id === state.trussTypeId) || TRUSS_TYPES[0];
}

function formatEditableNumber(value) {
  return Number.isFinite(value) ? String(value) : "";
}

function formatFixedEditableNumber(value, decimals) {
  return Number.isFinite(value) ? value.toFixed(decimals) : "";
}

function parseDecimalInput(rawValue, fallbackValue) {
  const normalized = String(rawValue).replace(/,/g, "").trim();
  if (normalized === "" || normalized === "-" || normalized === "." || normalized === "-.") {
    return fallbackValue;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : fallbackValue;
}

function escapeCsv(value) {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

function slugify(value) {
  return String(value ?? "truss-project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    || "truss-project";
}

function buildBeamNodePositions(lengthM, sortedSupports, effectiveLoads) {
  const positions = [0, lengthM, ...sortedSupports.map((support) => support.positionM)];
  effectiveLoads.forEach((load) => {
    positions.push(load.startM);
    positions.push(load.startM + load.widthM);
  });

  return [...positions]
    .map((value) => clampNumber(value, 0, lengthM))
    .sort((a, b) => a - b)
    .filter((value, index, array) => index === 0 || Math.abs(value - array[index - 1]) > 1e-6);
}

function findNodeIndex(nodePositions, positionM) {
  return nodePositions.findIndex((value) => Math.abs(value - positionM) <= 1e-6);
}

function createZeroMatrix(rows, cols) {
  return Array.from({ length: rows }, () => new Array(cols).fill(0));
}

function addElementMatrix(globalMatrix, localMatrix, dofIndices) {
  for (let row = 0; row < dofIndices.length; row += 1) {
    for (let col = 0; col < dofIndices.length; col += 1) {
      globalMatrix[dofIndices[row]][dofIndices[col]] += localMatrix[row][col];
    }
  }
}

function addElementVector(globalVector, localVector, dofIndices) {
  for (let index = 0; index < dofIndices.length; index += 1) {
    globalVector[dofIndices[index]] += localVector[index];
  }
}

function buildBeamElementStiffness(lengthM) {
  const length2 = lengthM * lengthM;
  const length3 = length2 * lengthM;
  return [
    [12 / length3, 6 / length2, -12 / length3, 6 / length2],
    [6 / length2, 4 / lengthM, -6 / length2, 2 / lengthM],
    [-12 / length3, -6 / length2, 12 / length3, -6 / length2],
    [6 / length2, 2 / lengthM, -6 / length2, 4 / lengthM]
  ];
}

function buildUniformLoadVector(lengthM, downwardKgPerM) {
  return [
    -(downwardKgPerM * lengthM) / 2,
    -(downwardKgPerM * lengthM * lengthM) / 12,
    -(downwardKgPerM * lengthM) / 2,
    (downwardKgPerM * lengthM * lengthM) / 12
  ];
}

function multiplyMatrixVector(matrix, vector) {
  return matrix.map((row) => row.reduce((sum, value, index) => sum + value * vector[index], 0));
}

function solveLinearSystem(matrix, vector) {
  const size = matrix.length;
  if (size === 0) return [];

  const a = matrix.map((row, rowIndex) => [...row, vector[rowIndex]]);

  for (let pivot = 0; pivot < size; pivot += 1) {
    let maxRow = pivot;
    for (let row = pivot + 1; row < size; row += 1) {
      if (Math.abs(a[row][pivot]) > Math.abs(a[maxRow][pivot])) {
        maxRow = row;
      }
    }

    if (Math.abs(a[maxRow][pivot]) < 1e-10) {
      return null;
    }

    if (maxRow !== pivot) {
      [a[pivot], a[maxRow]] = [a[maxRow], a[pivot]];
    }

    const pivotValue = a[pivot][pivot];
    for (let col = pivot; col <= size; col += 1) {
      a[pivot][col] /= pivotValue;
    }

    for (let row = 0; row < size; row += 1) {
      if (row === pivot) continue;
      const factor = a[row][pivot];
      for (let col = pivot; col <= size; col += 1) {
        a[row][col] -= factor * a[pivot][col];
      }
    }
  }

  return a.map((row) => row[size]);
}

function pickLoadColor(index) {
  const colors = ["#006d77", "#c97f10", "#7f5539", "#588157", "#9d4edd", "#386fa4"];
  return colors[index % colors.length];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
