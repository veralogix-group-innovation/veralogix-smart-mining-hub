const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const OUTPUT_ROOT = path.join(__dirname, "../docs/screenshots/portal-flow");

const flows = [
  {
    folder: "entry",
    shots: [
      { name: "00-login", path: "/login" },
    ],
  },
  {
    folder: "smart-hub-admin",
    shots: [
      { name: "01-hub-overview", path: "/hub" },
      { name: "02-operator-cockpit", path: "/operator" },
      { name: "03-supervisor-control-room", path: "/supervisor" },
      { name: "04-executive-overview", path: "/executive" },
      { name: "05-fleet-and-haulage", path: "/fleet" },
      { name: "06-earthworks", path: "/earthworks" },
      { name: "07-safety-and-cps", path: "/safety" },
      { name: "08-compliance", path: "/compliance" },
      { name: "09-drones", path: "/drones" },
      { name: "10-plant-and-process", path: "/plant" },
      { name: "11-digital-twin", path: "/twin" },
      { name: "12-report-packs", path: "/reports" },
      { name: "13-sensors", path: "/sensors" },
    ],
  },
  {
    folder: "executive-portal",
    shots: [
      { name: "01-executive-overview", path: "/executive" },
      { name: "02-report-packs", path: "/reports" },
    ],
  },
  {
    folder: "supervisor-portal",
    shots: [
      { name: "01-control-room", path: "/supervisor" },
      { name: "02-fleet-and-haulage", path: "/fleet" },
      { name: "03-earthworks", path: "/earthworks" },
      { name: "04-safety-and-cps", path: "/safety" },
      { name: "05-compliance", path: "/compliance" },
      { name: "06-drones", path: "/drones" },
      { name: "07-plant-and-process", path: "/plant" },
    ],
  },
  {
    folder: "operator-portal",
    shots: [
      { name: "01-operator-cockpit", path: "/operator" },
    ],
  },
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function captureScreenshot(page, targetPath, url) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: targetPath, fullPage: true });
  console.log(`Captured ${url} -> ${targetPath}`);
}

async function main() {
  ensureDir(OUTPUT_ROOT);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  for (const flow of flows) {
    const flowDir = path.join(OUTPUT_ROOT, flow.folder);
    ensureDir(flowDir);

    for (const shot of flow.shots) {
      const url = new URL(shot.path, BASE_URL).toString();
      const filePath = path.join(flowDir, `${shot.name}.png`);
      await captureScreenshot(page, filePath, url);
    }
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
