import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const ROLES = [
  {
    name: 'Smart_Hub_Admin',
    pages: [
      { route: '/hub', name: 'Smart_Hub_Overview' },
      { route: '/operator', name: 'Operator_Cockpit' },
      { route: '/supervisor', name: 'Control_Room' },
      { route: '/executive', name: 'Executive_Overview' },
      { route: '/fleet', name: 'Fleet_Haulage_Analytics' },
      { route: '/earthworks', name: 'Trimble_Earthworks' },
      { route: '/safety', name: 'Safety_CPS_Intelligence' },
      { route: '/compliance', name: 'Workforce_Compliance' },
      { route: '/drones', name: 'VTOL_Survey' },
      { route: '/plant', name: 'Plant_Process_Intelligence' },
      { route: '/twin', name: 'Digital_Twin_Scenarios' },
      { route: '/reports', name: 'Report_Packs' },
      { route: '/sensors', name: 'Sensor_Stack_Coverage' },
    ],
  },
  {
    name: 'Executive_Portal',
    pages: [
      { route: '/executive', name: 'Executive_Overview' },
      { route: '/reports', name: 'Report_Packs' },
    ],
  },
  {
    name: 'Supervisor_Portal',
    pages: [
      { route: '/supervisor', name: 'Control_Room' },
      { route: '/fleet', name: 'Fleet_Haulage_Analytics' },
      { route: '/earthworks', name: 'Trimble_Earthworks' },
      { route: '/safety', name: 'Safety_CPS_Intelligence' },
      { route: '/compliance', name: 'Workforce_Compliance' },
      { route: '/drones', name: 'VTOL_Survey' },
      { route: '/plant', name: 'Plant_Process_Intelligence' },
    ],
  },
  {
    name: 'Operator_Portal',
    pages: [
      { route: '/operator', name: 'Operator_Cockpit' },
    ],
  },
];

const BASE_URL = 'http://localhost:3000';
// Changed to screenshots/ to be consistent with user expectation, but we will ensure .gitignore handles it or we manually exclude it
const OUTPUT_DIR = 'docs/screenshots';

async function main() {
    console.log('Launching browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();

    for (const role of ROLES) {
      const roleDir = path.join(OUTPUT_DIR, role.name);
      if (!fs.existsSync(roleDir)) {
        fs.mkdirSync(roleDir, { recursive: true });
      }

      console.log(`Processing role: ${role.name}`);

      for (const [index, pageInfo] of role.pages.entries()) {
        const url = `${BASE_URL}${pageInfo.route}`;
        console.log(`  Navigating to ${url}...`);

        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            // Add a small delay to ensure rendering is stable
            await page.waitForTimeout(2000);

            // 1-based index for ordering
            const filename = `${String(index + 1).padStart(2, '0')}_${pageInfo.name}.png`;
            const filepath = path.join(roleDir, filename);

            await page.screenshot({ path: filepath, fullPage: true });
            console.log(`  Saved screenshot: ${filepath}`);
        } catch (e) {
            console.error(`  Failed to capture ${url}:`, e);
        }
      }
    }

    await browser.close();
    console.log('Done.');
}

main();
